import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { prisma } from "@/lib/prisma";
import { AdminLogin } from "@/components/AdminLogin";

interface Payment {
  id: number;
  amount: number;
  method: string;
  status: string;
  proofUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PaymentMethod {
  id: number;
  type: string;
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
  routingNumber?: string;
  bitcoinAddress?: string;
  qrCodeUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    accountNumber: "",
    bank: "",
    routingNumber: "",
    swift: ""
  });

  const [bitcoinAddress, setBitcoinAddress] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [paymentsData, paymentMethodsData] = await Promise.all([
        prisma.payment.findMany({
          orderBy: { createdAt: 'desc' }
        }),
        prisma.paymentMethod.findMany()
      ]);

      setPayments(paymentsData);

      // Set payment methods data
      const bankMethod = paymentMethodsData.find(pm => pm.type === 'bank');
      const bitcoinMethod = paymentMethodsData.find(pm => pm.type === 'bitcoin');

      if (bankMethod) {
        setBankDetails({
          accountName: bankMethod.accountName || "",
          accountNumber: bankMethod.accountNumber || "",
          bank: bankMethod.bankName || "",
          routingNumber: bankMethod.routingNumber || "",
          swift: "" // Note: swift not in schema, keeping for compatibility
        });
      }

      if (bitcoinMethod) {
        setBitcoinAddress(bitcoinMethod.bitcoinAddress || "");
      }

      setPaymentMethods(paymentMethodsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to load data from database.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmPayment = async (paymentId: number) => {
    try {
      setUpdating(true);
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: "confirmed" }
      });

      setPayments(payments.map(payment =>
        payment.id === paymentId
          ? { ...payment, status: "confirmed" }
          : payment
      ));

      toast({
        title: "Payment Confirmed",
        description: "The payment has been confirmed successfully.",
      });
    } catch (error) {
      console.error('Error confirming payment:', error);
      toast({
        title: "Error",
        description: "Failed to confirm payment.",
        variant: "destructive"
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleRejectPayment = async (paymentId: number) => {
    try {
      setUpdating(true);
      await prisma.payment.update({
        where: { id: paymentId },
        data: { status: "rejected" }
      });

      setPayments(payments.map(payment =>
        payment.id === paymentId
          ? { ...payment, status: "rejected" }
          : payment
      ));

      toast({
        title: "Payment Rejected",
        description: "The payment has been rejected.",
      });
    } catch (error) {
      console.error('Error rejecting payment:', error);
      toast({
        title: "Error",
        description: "Failed to reject payment.",
        variant: "destructive"
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleUpdateBankDetails = async () => {
    try {
      setUpdating(true);
      const bankMethod = paymentMethods.find(pm => pm.type === 'bank');

      if (bankMethod) {
        await prisma.paymentMethod.update({
          where: { id: bankMethod.id },
          data: {
            accountName: bankDetails.accountName,
            accountNumber: bankDetails.accountNumber,
            bankName: bankDetails.bank,
            routingNumber: bankDetails.routingNumber
          }
        });
      } else {
        await prisma.paymentMethod.create({
          data: {
            type: 'bank',
            accountName: bankDetails.accountName,
            accountNumber: bankDetails.accountNumber,
            bankName: bankDetails.bank,
            routingNumber: bankDetails.routingNumber
          }
        });
      }

      toast({
        title: "Bank Details Updated",
        description: "Bank transfer details have been updated successfully.",
      });

      fetchData(); // Refresh data
    } catch (error) {
      console.error('Error updating bank details:', error);
      toast({
        title: "Error",
        description: "Failed to update bank details.",
        variant: "destructive"
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleUpdateBitcoinAddress = async () => {
    try {
      setUpdating(true);
      const bitcoinMethod = paymentMethods.find(pm => pm.type === 'bitcoin');

      if (bitcoinMethod) {
        await prisma.paymentMethod.update({
          where: { id: bitcoinMethod.id },
          data: { bitcoinAddress: bitcoinAddress }
        });
      } else {
        await prisma.paymentMethod.create({
          data: {
            type: 'bitcoin',
            bitcoinAddress: bitcoinAddress
          }
        });
      }

      toast({
        title: "Bitcoin Address Updated",
        description: "Bitcoin address has been updated successfully.",
      });

      fetchData(); // Refresh data
    } catch (error) {
      console.error('Error updating bitcoin address:', error);
      toast({
        title: "Error",
        description: "Failed to update bitcoin address.",
        variant: "destructive"
      });
    } finally {
      setUpdating(false);
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <Tabs defaultValue="payments" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="payments">Payment Management</TabsTrigger>
          <TabsTrigger value="settings">Payment Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Payments</CardTitle>
            </CardHeader>
            <CardContent>
              {payments.filter(p => p.status === "pending").length === 0 ? (
                <p className="text-muted-foreground">No pending payments</p>
              ) : (
                <div className="space-y-4">
                  {payments.filter(p => p.status === "pending").map(payment => (
                    <div key={payment.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">${payment.amount}</p>
                          <p className="text-sm text-muted-foreground">
                            {payment.method}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Submitted: {payment.createdAt.toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant="secondary">Pending</Badge>
                      </div>

                      {payment.proofUrl && (
                        <div className="space-y-2">
                          <Label>Proof of Payment:</Label>
                          <div className="border rounded-lg p-2 bg-muted/50">
                            <img
                              src={payment.proofUrl}
                              alt="Proof of payment"
                              className="max-w-full h-auto max-h-48 object-contain rounded"
                              onError={(e) => {
                                // Fallback to link if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const link = target.nextElementSibling as HTMLAnchorElement;
                                if (link) link.style.display = 'inline';
                              }}
                            />
                            <a
                              href={payment.proofUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline text-sm hidden"
                            >
                              View Proof (Image failed to load)
                            </a>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="default"
                          disabled={updating}
                          onClick={() => handleConfirmPayment(payment.id)}
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          disabled={updating}
                          onClick={() => handleRejectPayment(payment.id)}
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>All Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payments.map(payment => (
                  <div key={payment.id} className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold">${payment.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        {payment.method}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {payment.createdAt.toLocaleDateString()}
                      </p>
                    </div>
                    <Badge
                      variant={
                        payment.status === "confirmed" ? "default" :
                        payment.status === "rejected" ? "destructive" : "secondary"
                      }
                    >
                      {payment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bank Transfer Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="account-name">Account Name</Label>
                  <Input
                    id="account-name"
                    value={bankDetails.accountName}
                    onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-number">Account Number</Label>
                  <Input
                    id="account-number"
                    value={bankDetails.accountNumber}
                    onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bank">Bank Name</Label>
                  <Input
                    id="bank"
                    value={bankDetails.bank}
                    onChange={(e) => setBankDetails({...bankDetails, bank: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="routing-number">Routing Number</Label>
                  <Input
                    id="routing-number"
                    value={bankDetails.routingNumber}
                    onChange={(e) => setBankDetails({...bankDetails, routingNumber: e.target.value})}
                  />
                </div>
              </div>
              <Button onClick={handleUpdateBankDetails} disabled={updating}>
                Update Bank Details
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bitcoin Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bitcoin-address">Bitcoin Address</Label>
                <Input
                  id="bitcoin-address"
                  value={bitcoinAddress}
                  onChange={(e) => setBitcoinAddress(e.target.value)}
                />
              </div>
              <Button onClick={handleUpdateBitcoinAddress} disabled={updating}>
                Update Bitcoin Address
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
