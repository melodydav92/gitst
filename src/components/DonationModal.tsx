import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Shield, Banknote, Bitcoin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface DonationModalProps {
  open: boolean;
  onClose: () => void;
  campaignTitle: string;
}

export const DonationModal = ({ open, onClose, campaignTitle }: DonationModalProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [paymentMethod, setPaymentMethod] = useState<"transfer" | "bitcoin">("transfer");
  const [showTransferDetails, setShowTransferDetails] = useState(false);
  const [showBitcoinDetails, setShowBitcoinDetails] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Processing Donation",
      description: `Thank you for your ${donationType === "monthly" ? "monthly" : ""} donation of $${amount}!`,
    });

    // In production, integrate with Stripe here
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  const handlePaymentSent = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    if (!uploadedFile) {
      toast({
        title: "Proof Required",
        description: "Please upload proof of payment.",
        variant: "destructive",
      });
      return;
    }

    // Here you would send the data to backend/admin
    toast({
      title: "Payment Submitted",
      description: "Your payment proof has been submitted for verification.",
    });

    // Reset form
    setSelectedAmount(null);
    setCustomAmount("");
    setUploadedFile(null);
    onClose();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      if (!['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a JPEG, PNG, or PDF file.",
          variant: "destructive",
        });
        return;
      }

      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }

      setUploadedFile(file);
      toast({
        title: "File Uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] max-h-[80vh] overflow-y-auto animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Support This Campaign
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {campaignTitle}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={donationType} onValueChange={(v) => setDonationType(v as "one-time" | "monthly")} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="one-time">One-Time</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>

          <TabsContent value={donationType} className="space-y-6 mt-6">
            <div className="space-y-4">
              <Label className="text-base font-semibold">Select Amount</Label>
              <div className="grid grid-cols-3 gap-3">
                {presetAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "hero" : "outline"}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className="h-16 text-lg font-semibold"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-amount">Or Enter Custom Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                    $
                  </span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="0.00"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-8 h-12 text-lg"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-base font-semibold">Payment Method</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant={paymentMethod === "transfer" ? "hero" : "outline"}
                  onClick={() => {
                    setPaymentMethod("transfer");
                    setShowTransferDetails(true);
                    setShowBitcoinDetails(false);
                  }}
                  className={`h-16 flex flex-col gap-2 ${paymentMethod === "transfer" ? "font-bold" : ""}`}
                >
                  <Banknote className="w-6 h-6" />
                  Transfer
                </Button>
                <Button
                  variant={paymentMethod === "bitcoin" ? "hero" : "outline"}
                  onClick={() => {
                    setPaymentMethod("bitcoin");
                    setShowTransferDetails(false);
                    setShowBitcoinDetails(true);
                  }}
                  className="h-16 flex flex-col gap-2"
                >
                  <Bitcoin className="w-6 h-6" />
                  Bitcoin
                </Button>
              </div>
            </div>

            {showTransferDetails && (
              <div className="p-4 bg-accent/50 rounded-lg space-y-4">
                <h3 className="font-semibold">Bank Transfer Details</h3>
                <p className="text-sm text-muted-foreground">
                  Account Name: GiveHope Foundation<br />
                  Account Number: 1234567890<br />
                  Bank: Example Bank<br />
                  SWIFT: EXBKUS33<br />
                  Reference: Your Name - {campaignTitle}
                </p>

                <div className="space-y-2">
                  <Label htmlFor="proof-upload">Upload Proof of Payment</Label>
                  <Input
                    id="proof-upload"
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileUpload}
                    className="cursor-pointer"
                  />
                  {uploadedFile && (
                    <p className="text-xs text-green-600">Uploaded: {uploadedFile.name}</p>
                  )}
                </div>

                <Button
                  variant="hero"
                  size="sm"
                  className="w-full"
                  onClick={handlePaymentSent}
                >
                  Payment Sent
                </Button>
              </div>
            )}

            {showBitcoinDetails && (
              <div className="p-4 bg-accent/50 rounded-lg space-y-2">
                <h3 className="font-semibold">Bitcoin Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Bitcoin Address: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh<br />
                  Please send the exact amount to this address. Include your name in the transaction memo.
                </p>
                <div className="mt-2">
                  <img src="/placeholder.svg" alt="Bitcoin QR Code" className="w-32 h-32 mx-auto object-contain" />
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="p-4 bg-accent/50 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-medium">Secure Payment</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your donation is processed securely through Stripe. We never store your card details.
                </p>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full text-lg"
                onClick={handleDonate}
                disabled={paymentMethod === "transfer" || paymentMethod === "bitcoin"}
              >
                {paymentMethod === "transfer" ? <Banknote className="w-5 h-5" /> : <Bitcoin className="w-5 h-5" />}
                {paymentMethod === "transfer" ? "Transfer Details Above" : "Bitcoin Details Above"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By donating, you agree to our Terms of Service and Privacy Policy.
                {donationType === "monthly" && " You can cancel your monthly donation at any time."}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
