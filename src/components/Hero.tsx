import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-donation.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="People supporting each other"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary-glow/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Make a Difference
              <span className="block bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                One Donation at a Time
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Join thousands of donors supporting causes that matter. Every contribution creates lasting impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 h-14 shadow-xl hover:shadow-2xl" onClick={() => window.location.href = '/start-campaign'}>
              <Heart className="w-5 h-5" />
              Start a Campaign
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-14 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary shadow-xl" onClick={() => document.getElementById('browse')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Campaigns
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { icon: TrendingUp, label: "Total Raised", value: "$25M+" },
              { icon: Users, label: "Active Donors", value: "150K+" },
              { icon: Shield, label: "Trust & Safety", value: "100%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-fade-in hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
