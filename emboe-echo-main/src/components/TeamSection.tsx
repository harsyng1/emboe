import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, LinkedinIcon, Plus } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-gradient-feature">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building the future of eldercare
            </h2>
            <p className="text-xl text-muted-foreground">
              A passionate team dedicated to bridging emotional gaps across generations
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Founder */}
            <Card className="p-8 shadow-soft border-0 bg-white/80 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">HS</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Harsh Singh</h3>
                  <p className="text-primary font-medium">Co-Founder & CEO</p>
                </div>
                
                <p className="text-muted-foreground">
                  (BS+MS) Biotechnology, IIT Madras '27. Passionate about combining biotech 
                  and AI to solve real-world emotional wellness challenges for aging populations.
                </p>
                
                <Button variant="outline" size="sm" className="w-full">
                  <LinkedinIcon className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Open Position */}
            <Card className="p-8 shadow-soft border-0 bg-white/80 backdrop-blur-sm border-dashed border-primary/30">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Plus className="w-8 h-8 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Looking for CTO</h3>
                  <p className="text-primary font-medium">Co-Founder & Technical Lead</p>
                </div>
                
                <p className="text-muted-foreground">
                  We're actively seeking a technical co-founder with experience in AI/ML, 
                  voice technology, and hardware development to join our founding team.
                </p>
                
                <Button variant="hero" size="sm" className="w-full">
                  Join Our Team
                </Button>
              </div>
            </Card>
          </div>

          {/* Company Stage */}
          <div className="bg-primary-light/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Current Stage</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Idea → Prototype</div>
                <div className="text-sm text-muted-foreground">Building MVP</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Q4 2025</div>
                <div className="text-sm text-muted-foreground">MVP Launch</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100 Families</div>
                <div className="text-sm text-muted-foreground">Closed Alpha</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;