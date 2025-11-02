import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Users, TrendingUp, Shield, CheckCircle } from "lucide-react";

export const StartCampaign = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Easy Setup",
      description: "Create your campaign in minutes with our guided process.",
    },
    {
      icon: Users,
      title: "Reach Donors",
      description: "Connect with thousands of compassionate supporters worldwide.",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor donations and impact in real-time with detailed analytics.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your campaign and donations are protected by enterprise-grade security.",
    },
  ];

  return (
    <section id="start-campaign" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Start Your Campaign Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn your vision into reality. Whether it's helping a community, supporting a cause, or making a difference,
              we'll help you reach your fundraising goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground">Why Choose GiveHope?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our platform makes fundraising simple and effective. With millions of active donors and powerful tools,
                your campaign has everything it needs to succeed.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl" onClick={() => window.location.href = '/start-campaign'}>
                <Plus className="w-5 h-5 mr-2" />
                Create Your Campaign
              </Button>
            </div>

            <Card className="p-8 bg-card hover:shadow-xl transition-shadow animate-fade-in">
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-foreground mb-2">Campaign Success Stories</h4>
                  <p className="text-muted-foreground text-sm">Real results from our community</p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Community Garden Project",
                      raised: "$45,000",
                      goal: "$30,000",
                      donors: "1,250",
                      category: "Environment",
                    },
                    {
                      title: "School Supplies Drive",
                      raised: "$28,500",
                      goal: "$25,000",
                      donors: "890",
                      category: "Education",
                    },
                    {
                      title: "Medical Equipment Fund",
                      raised: "$75,000",
                      goal: "$50,000",
                      donors: "2,100",
                      category: "Medical",
                    },
                  ].map((story, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-muted/50 border border-border/50 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h5 className="font-semibold text-foreground mb-1">{story.title}</h5>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>{story.category}</span>
                        <span>{story.donors} donors</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-semibold">{story.raised}</span>
                        <span className="text-xs text-muted-foreground">of {story.goal}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Join thousands of successful campaigns
                  </p>
                  <Button variant="outline" className="w-full">
                    View All Success Stories
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Make a Difference?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Your campaign could be the next success story. Start today and see the impact you can create.
              </p>
              <Button size="lg" className="shadow-lg hover:shadow-xl" onClick={() => window.location.href = '/start-campaign'}>
                <Plus className="w-5 h-5 mr-2" />
                Start Your Campaign Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
