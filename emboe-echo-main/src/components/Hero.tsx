import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/emboe-device.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-transparent" />
      
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Emotional Biotech for Aging Parents
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Bridging hearts across
                <span className="text-primary block">distance & time</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Emboe delivers daily emotion-optimized routines and voice-guided rituals 
                for your parents—gifted with love, monitored with care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-primary">150M+</div>
                <div className="text-sm text-muted-foreground">Adults 55+ in India</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">2.1B</div>
                <div className="text-sm text-muted-foreground">Global elderly by 2050</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Device Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}} />
              
              {/* Device image */}
              <div className="relative z-10 animate-scale-in">
                <img
                  src={heroImage}
                  alt="Emboe Echo Device"
                  className="w-full max-w-lg rounded-2xl shadow-strong"
                />
                
                {/* Floating UI elements */}
                <div className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-soft animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <div className="text-sm font-medium text-foreground">Good morning, Mom</div>
                  <div className="text-xs text-muted-foreground">Ready for today's routine?</div>
                </div>
                
                <div className="absolute -right-8 bottom-1/4 bg-primary/90 backdrop-blur-sm rounded-lg p-3 shadow-soft text-white animate-fade-in" style={{animationDelay: '1s'}}>
                  <div className="text-sm font-medium">EmScore: 8.2</div>
                  <div className="text-xs opacity-80">Feeling positive today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;