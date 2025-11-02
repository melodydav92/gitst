import { CampaignCard } from "./CampaignCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import educationImg from "@/assets/campaign-education.jpg";
import medicalImg from "@/assets/campaign-medical.jpg";
import environmentImg from "@/assets/campaign-environment.jpg";

interface FeaturedCampaignsProps {
  id?: string;
  onDonateClick?: (campaignTitle: string) => void;
}

export const FeaturedCampaigns = ({ id, onDonateClick }: FeaturedCampaignsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const campaigns = [
    {
      id: 1,
      title: "Gaza Children Emergency Relief",
      description: "Provide immediate humanitarian aid including food, medical supplies, shelter, and educational support for children affected by the crisis in Gaza.",
      raised: 100,
      goal: 50000,
      donors: 5,
      image: educationImg,
      category: "Emergency Relief",
    },
    {
      id: 2,
      title: "Education for Underprivileged Children",
      description: "Help provide quality education and school supplies to children in rural communities who lack access to basic learning resources.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Education",
    },
    {
      id: 2,
      title: "Medical Aid for Emergency Relief",
      description: "Support critical medical supplies and healthcare services for communities affected by natural disasters and health crises.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 3,
      title: "Reforestation & Climate Action",
      description: "Plant trees and restore ecosystems to combat climate change and preserve biodiversity for future generations.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: environmentImg,
      category: "Environment",
    },
    {
      id: 4,
      title: "Emergency Aid for Gaza Children",
      description: "Provide immediate relief including food, medical supplies, shelter, and educational support for children affected by the crisis in Gaza.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Emergency Relief",
    },
    {
      id: 5,
      title: "ALS Ice Bucket Challenge",
      description: "Raise awareness and funds for ALS research through the viral ice bucket challenge that took social media by storm.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 6,
      title: "TCS London Marathon",
      description: "Support charity runners in the iconic London Marathon, raising millions for various causes through sponsorship and participation.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Sports",
    },
    {
      id: 7,
      title: "TV-aksjonen",
      description: "Norway's largest annual fundraiser supporting international development projects and humanitarian aid worldwide.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Children",
    },
    {
      id: 8,
      title: "World's Biggest Coffee Morning",
      description: "Join communities across the UK for coffee mornings that raise funds for Macmillan Cancer Support through local events.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 9,
      title: "Giving Tuesday",
      description: "The global generosity movement encouraging people to give back to their communities and support charitable causes.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Community",
    },
    {
      id: 10,
      title: "ZEvent",
      description: "France's largest gaming charity stream raising funds for children with disabilities through 24-hour gaming marathons.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Children",
    },
    {
      id: 11,
      title: "Pan-Mass Challenge",
      description: "Bicycle riders pedal across Massachusetts to raise funds for cancer research and patient support at Dana-Farber Cancer Institute.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 12,
      title: "Red Nose Day",
      description: "Comic Relief's annual fundraising event using comedy and entertainment to fight poverty and social injustice in the UK and Africa.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Community",
    },
    {
      id: 13,
      title: "Comic Relief",
      description: "UK charity using comedy to raise funds for development work in Africa and social issues in the UK.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Community",
    },
    {
      id: 14,
      title: "Movember",
      description: "Men grow mustaches for a month to raise awareness and funds for men's health issues, particularly prostate cancer.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 15,
      title: "Live Aid",
      description: "Historic 1985 concert that raised funds for famine relief in Ethiopia and helped establish modern celebrity charity events.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Emergency Relief",
    },
    {
      id: 16,
      title: "Children in Need",
      description: "BBC's annual telethon raising funds for disadvantaged children and young people across the UK.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Children",
    },
    {
      id: 17,
      title: "Stand Up to Cancer",
      description: "Multi-network TV event bringing together celebrities and cancer survivors to raise funds for cancer research.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 18,
      title: "The Trevor Project Fundraiser",
      description: "Support suicide prevention and crisis intervention for LGBTQ youth through various fundraising initiatives.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Children",
    },
    {
      id: 19,
      title: "No-Shave November",
      description: "Men and women forgo shaving for a month to raise awareness and funds for cancer research and men's health.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 20,
      title: "Team Trees",
      description: "MrBeast and Mark Rober planted 20 million trees in 2020 through online donations and challenges.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: environmentImg,
      category: "Environment",
    },
    {
      id: 21,
      title: "Team Seas",
      description: "Ocean cleanup initiative aiming to remove 30 million pounds of trash from the world's oceans and coastlines.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: environmentImg,
      category: "Environment",
    },
    {
      id: 22,
      title: "Global Citizen Festival",
      description: "Music festival that combines entertainment with advocacy to end extreme poverty and drive social change.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Community",
    },
    {
      id: 23,
      title: "One Love Manchester",
      description: "Benefit concert organized by Ariana Grande following the Manchester Arena bombing to support victims and their families.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Emergency Relief",
    },
    {
      id: 24,
      title: "Charity: Water Campaigns",
      description: "Provide clean drinking water to people in developing countries through well construction and water system installation.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: environmentImg,
      category: "Environment",
    },
    {
      id: 25,
      title: "Kiva Lending Teams",
      description: "Microfinance platform connecting lenders with entrepreneurs in developing countries through community lending teams.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Community",
    },
    {
      id: 26,
      title: "Save the Children's Christmas Jumper Day",
      description: "UK fundraising campaign where people wear ugly Christmas jumpers to raise funds for children's charities worldwide.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Children",
    },
    {
      id: 27,
      title: "World Wildlife Fund Earth Hour Donations",
      description: "Annual event where people turn off lights for one hour to raise awareness and funds for environmental conservation.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: environmentImg,
      category: "Environment",
    },
    {
      id: 28,
      title: "GoFundMe Global Relief Drives",
      description: "Crowdfunding platform facilitating emergency relief efforts for natural disasters, medical crises, and humanitarian needs.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Emergency Relief",
    },
    {
      id: 29,
      title: "UNICEF Emergency Appeals",
      description: "United Nations Children's Fund emergency response programs providing immediate aid to children in crisis situations worldwide.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Children",
    },
    {
      id: 30,
      title: "Doctors Without Borders Crisis Fund",
      description: "International medical humanitarian organization providing emergency medical care in conflict zones and disaster areas.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 31,
      title: "Feeding America Covid Relief Fund",
      description: "Emergency food assistance program providing meals to families affected by the COVID-19 pandemic across the United States.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Emergency Relief",
    },
    {
      id: 32,
      title: "American Cancer Society Relay for Life",
      description: "Community-based fundraising event where teams camp out overnight to raise funds for cancer research and patient support.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 33,
      title: "St. Jude Children's Research Hospital Marathon",
      description: "Annual marathon and fundraising event supporting the world's leading pediatric cancer research hospital.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: medicalImg,
      category: "Medical",
    },
    {
      id: 34,
      title: "Habitat for Humanity Global Village Campaign",
      description: "International housing charity building affordable homes and communities for families in need around the world.",
      raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
      goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      image: educationImg,
      category: "Community",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= campaigns.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, campaigns.length - 3) : prevIndex - 3
    );
  };

  const visibleCampaigns = campaigns.slice(currentIndex, currentIndex + 3);

  return (
    <section id={id} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Campaigns
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover impactful causes and help make a difference today
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCampaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in"
              >
                <CampaignCard {...campaign} onDonateClick={onDonateClick} />
              </div>
            ))}
          </div>

          {campaigns.length > 3 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(campaigns.length / 3) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i * 3)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      Math.floor(currentIndex / 3) === i
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={currentIndex + 3 >= campaigns.length}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
