import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import impactIcons from "@/assets/impact-icons.jpg";
import { 
  Smartphone, 
  Calendar, 
  Trophy, 
  Users, 
  MapPin, 
  Recycle,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Smart Collection Scheduling",
      description: "Get notified when it's time for pickup in your area. Never miss a collection day again.",
      benefits: ["Real-time notifications", "Optimize your schedule", "Reduce waste overflow"]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Community Mapping",
      description: "Report illegal dumping and find the nearest recycling centers in your neighborhood.",
      benefits: ["Interactive maps", "Real-time reporting", "Find recycling centers"]
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Rewards & Incentives",
      description: "Earn green points for every kilogram recycled. Redeem rewards from local partners.",
      benefits: ["Earn green points", "Exclusive rewards", "Support local business"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Challenges", 
      description: "Join neighborhood competitions and collaborative cleanup events to maximize impact.",
      benefits: ["Team competitions", "Group cleanups", "Build connections"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Smart Features for 
            <span className="gradient-text"> Sustainable Living</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines technology with community spirit to make waste management 
            effortless, rewarding, and environmentally impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card via-card to-muted/30">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Showcase */}
        <div className="bg-gradient-to-r from-primary/5 via-community/5 to-impact/5 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Creating Lasting Impact
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Every action on our platform contributes to measurable environmental and social outcomes 
                across Kampala's communities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Waste Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-community mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Green Jobs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-impact mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Partner Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">25%</div>
                  <div className="text-sm text-muted-foreground">Cost Savings</div>
                </div>
              </div>
              
              <Button variant="community" className="group">
                Learn More About Our Impact
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={impactIcons} 
                alt="Community impact visualization" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary via-primary to-primary-glow text-primary-foreground border-0 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Join the Movement?</CardTitle>
              <CardDescription className="text-primary-foreground/80 text-base">
                Start making a difference in your community today. Together, we can transform Kampala 
                into a model of sustainable urban living.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="bg-card/20 hover:bg-card/30">
                  Get Started Now
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Download App
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};