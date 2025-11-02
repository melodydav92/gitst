import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedCampaigns } from "@/components/FeaturedCampaigns";
import { HowItWorks } from "@/components/HowItWorks";
import { StartCampaign } from "@/components/StartCampaign";
import { AboutUs } from "@/components/AboutUs";
import { TrustBadges } from "@/components/TrustBadges";
import { Footer } from "@/components/Footer";
import { DonationModal } from "@/components/DonationModal";

const Index = () => {
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [selectedCampaignTitle, setSelectedCampaignTitle] = useState("General Donation");

  const handleDonateClick = (campaignTitle: string = "General Donation") => {
    setSelectedCampaignTitle(campaignTitle);
    setDonationModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header onDonateClick={() => handleDonateClick()} />
      <main>
        <Hero />
        <FeaturedCampaigns id="browse" onDonateClick={handleDonateClick} />
        <HowItWorks id="how-it-works" />
        <StartCampaign />
        <AboutUs />
        <TrustBadges />
      </main>
      <Footer />
      <DonationModal
        open={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        campaignTitle={selectedCampaignTitle}
      />
    </div>
  );
};

export default Index;
