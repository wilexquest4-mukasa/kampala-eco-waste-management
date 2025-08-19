import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kampala-clean.jpg";
import { ArrowRight, Recycle, Users, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Kampala</span>
            <span className="gradient-text block">Clean Circle</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Building a sustainable future through community-driven waste management. 
            Join thousands of Kampala residents making our city cleaner, one neighborhood at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Start Your Impact
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="community" size="lg">
              Join Community
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-card/20">
              <div className="flex items-center justify-center mb-4">
                <Recycle className="h-8 w-8 text-community" />
              </div>
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-sm text-primary-foreground/80">Tons Recycled</div>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-card/20">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-impact" />
              </div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-sm text-primary-foreground/80">Community Members</div>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-card/20">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-community" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-primary-foreground/80">Neighborhoods</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="w-16 h-16 rounded-full bg-community floating-animation"></div>
      </div>
      <div className="absolute bottom-32 right-10 opacity-20">
        <div className="w-24 h-24 rounded-full bg-impact floating-animation" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};