import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

interface CampaignCardProps {
  title: string;
  description: string;
  raised: number;
  goal: number;
  donors: number;
  image: string;
  category: string;
  onDonateClick?: (campaignTitle: string) => void;
}

export const CampaignCard = ({
  title,
  description,
  raised,
  goal,
  donors,
  image,
  category,
  onDonateClick,
}: CampaignCardProps) => {
  const progress = (raised / goal) * 100;
  const daysLeft = Math.floor(Math.random() * 30) + 1; // Mock days left

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-0 bg-card animate-fade-in">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-2xl font-bold text-primary">
                  ${raised.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  raised of ${goal.toLocaleString()}
                </span>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{donors} donors</span>
            </div>
            <span>{daysLeft} days left</span>
          </div>
        </div>

        <Button
          variant="hero"
          className="w-full group/btn text-lg font-bold py-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0"
          size="lg"
          onClick={() => onDonateClick?.(title)}
        >
          <Heart className="w-5 h-5 group-hover/btn:scale-110 transition-transform mr-2" />
          Donate Now
        </Button>
      </div>
    </Card>
  );
};
