import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Brain, Heart, Shield, BarChart3, Users } from "lucide-react";

const ProductSection = () => {
  const features = [
    {
      icon: Mic,
      title: "Voice-first Companion",
      description: "Daily nudges, memory cues, and emotional reflections through natural conversation"
    },
    {
      icon: Brain,
      title: "Cognitive Health Scoring",
      description: "EmScore™ tracks emotional and cognitive wellness through non-invasive interactions"
    },
    {
      icon: Heart,
      title: "Emotion-Optimized Routines",
      description: "AI-powered behavior protocols tuned specifically for geriatric cognition patterns"
    },
    {
      icon: Shield,
      title: "Privacy-First Design", 
      description: "Secure edge processing ensures emotional care even without continuous internet"
    },
    {
      icon: BarChart3,
      title: "Progress Reports",
      description: "Emotional wellness insights shared privately with children to stay connected"
    },
    {
      icon: Users,
      title: "Family Connection",
      description: "Bridge the emotional gap between children and aging parents with daily care rituals"
    }
  ];

  return (
    <section id="product" className="py-24 bg-gradient-feature">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Emboe Echo™ Device
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            More than a voice assistant.
            <span className="text-primary block">A daily companion.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Purpose-built for aging parents with emotional intelligence, cultural awareness, 
            and gentle interaction designed specifically for eldercare.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Device Highlight */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-soft">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Emboe Echo™
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike generic smart speakers, Emboe Echo is gentle in tone, emotionally intelligent, 
                and aware of elderly speech patterns, memory rhythms, and caregiving contexts.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Trained on Indian linguistic and emotional aging data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Works offline for continuous emotional support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Elder-friendly design with screenless interaction</span>
                </li>
              </ul>
              
              <Button variant="hero" size="lg">
                Reserve Your Device
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-light/20 to-accent/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-strong">
                  <Mic className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;