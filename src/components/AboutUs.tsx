import { Heart, Target, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in the power of empathy and understanding to drive positive change in our communities.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Every donation is tracked and reported, ensuring donors see the real impact of their contributions.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building bridges between donors and causes, creating lasting relationships that matter.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in security, user experience, and campaign management.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About GiveHope
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize charitable giving by connecting compassionate donors with meaningful causes worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2020, GiveHope emerged from a simple belief: everyone deserves the opportunity to make a difference.
              What started as a small initiative to help local communities has grown into a global platform connecting
              millions of donors with causes that matter.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine cutting-edge technology with human-centered design to create a donation experience that's
              secure, transparent, and impactful. Every dollar donated through our platform goes directly to the causes
              that need it most.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "25M+", label: "Total Raised" },
              { number: "150K+", label: "Active Donors" },
              { number: "5K+", label: "Campaigns Supported" },
              { number: "95%", label: "Funds to Causes" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-card hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the impact we create together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
