import { Search, Heart, Share2, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const HowItWorks = ({ id }: { id?: string }) => {
  const steps = [
    {
      icon: Search,
      title: "Find a Campaign",
      description: "Browse campaigns or create your own cause to support.",
      color: "from-primary to-primary-glow",
    },
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Choose your amount and donate securely with one click.",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Share2,
      title: "Share the Cause",
      description: "Spread the word and inspire others to contribute.",
      color: "from-success to-success/80",
    },
    {
      icon: CheckCircle,
      title: "Track Impact",
      description: "See real-time updates on how your donation makes a difference.",
      color: "from-primary-glow to-primary",
    },
  ];

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Making a difference has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
