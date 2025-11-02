import { Shield, Lock, Award, HeartHandshake } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "PCI-DSS Compliant",
      description: "Industry-standard payment security",
    },
    {
      icon: Lock,
      title: "256-bit SSL Encryption",
      description: "Your data is always protected",
    },
    {
      icon: Award,
      title: "Verified Campaigns",
      description: "All campaigns are reviewed",
    },
    {
      icon: HeartHandshake,
      title: "Transparent Fees",
      description: "Know exactly where your money goes",
    },
  ];

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center space-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{badge.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
