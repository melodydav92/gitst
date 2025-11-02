import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Upload, CheckCircle, Target, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StartCampaign = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    goal: "",
    duration: "",
    image: null as File | null,
  });

  const steps = [
    { id: 1, title: "Campaign Basics", description: "Tell us about your cause" },
    { id: 2, title: "Details & Goals", description: "Set your fundraising targets" },
    { id: 3, title: "Media & Review", description: "Add images and review your campaign" },
  ];

  const categories = [
    "Medical",
    "Education",
    "Environment",
    "Disaster Relief",
    "Community",
    "Animal Welfare",
    "Arts & Culture",
    "Sports",
    "Technology",
    "Other",
  ];

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically submit the form data to your backend
    console.log("Campaign data:", formData);
    // For now, just navigate back to home
    navigate("/");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-base font-semibold">Campaign Title</Label>
              <Input
                id="title"
                placeholder="Give your campaign a compelling title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-base font-semibold">Campaign Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your cause, why it matters, and how donations will be used..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="mt-2 min-h-[120px]"
              />
            </div>

            <div>
              <Label htmlFor="category" className="text-base font-semibold">Category</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="goal" className="text-base font-semibold">Fundraising Goal ($)</Label>
                <Input
                  id="goal"
                  type="number"
                  placeholder="5000"
                  value={formData.goal}
                  onChange={(e) => handleInputChange("goal", e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="duration" className="text-base font-semibold">Campaign Duration (days)</Label>
                <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="120">120 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card className="p-6 bg-muted/50">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Goal Setting Tips</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Research similar campaigns to set realistic goals</li>
                <li>• Consider your network size and reach</li>
                <li>• Factor in platform fees (typically 5-10%)</li>
                <li>• Start with achievable milestones</li>
              </ul>
            </Card>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-semibold">Campaign Image</Label>
              <div className="mt-2">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  {formData.image ? (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <img
                          src={URL.createObjectURL(formData.image)}
                          alt="Campaign preview"
                          className="w-32 h-32 object-cover rounded-lg border"
                        />
                      </div>
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                      <p className="text-sm text-muted-foreground">Image uploaded: {formData.image.name}</p>
                      <Button variant="outline" onClick={() => handleInputChange("image", null)}>
                        Remove Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                      <div>
                        <p className="text-sm font-medium">Upload campaign image</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                      </div>
                      <Button variant="outline" onClick={() => document.getElementById("image-upload")?.click()}>
                        Choose File
                      </Button>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleInputChange("image", e.target.files?.[0] || null)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Campaign Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Title:</span>
                  <span>{formData.title || "Not set"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span>{formData.category ? categories.find(c => c.toLowerCase().replace(" ", "-") === formData.category)?.toLowerCase() : "Not set"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Goal:</span>
                  <span>${formData.goal || "0"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{formData.duration ? `${formData.duration} days` : "Not set"}</span>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Start Your Campaign</h1>
              <p className="text-muted-foreground">Create a campaign to make a difference</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Step {currentStep} of {steps.length}</p>
              <Progress value={(currentStep / steps.length) * 100} className="w-32 mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  step.id <= currentStep
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-muted-foreground text-muted-foreground"
                }`}>
                  {step.id < currentStep ? <CheckCircle className="w-4 h-4" /> : step.id}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    step.id <= currentStep ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    step.id < currentStep ? "bg-primary" : "bg-border"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            {renderStepContent()}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              {currentStep < steps.length ? (
                <Button onClick={handleNext}>
                  Next Step
                </Button>
              ) : (
                <Button onClick={handleSubmit}>
                  Create Campaign
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StartCampaign;
