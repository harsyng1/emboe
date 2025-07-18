import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Born from love, built with purpose
            </h2>
            <p className="text-xl text-muted-foreground">
              The story behind Emboe and why every family deserves this connection
            </p>
          </div>

          {/* Story Content */}
          <Card className="p-8 lg:p-12 shadow-soft border-0 mb-12">
            <Quote className="w-8 h-8 text-primary mb-6" />
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Emboe was born out of a quiet discomfort, one that grew with time but never found words. 
                My grandparents lived in a small village in Jaunpur, Uttar Pradesh, while my father moved 
                to Vasai near Mumbai in his 20s to search for work and a better lifestyle.
              </p>
              
              <p>
                Over the years, according to dad, he witnessed subtle shifts in them—moments of forgetfulness, 
                loss of confidence, a soft erosion of purpose. The phone calls were regular but not very 
                frequent in the early 2000s, the affection intact, but something deeper was quietly slipping away.
              </p>
              
              <p className="text-foreground font-medium">
                Now living between Chennai and Bangalore for college and work, I've begun to feel the growing 
                emotional gap with my own parents. They're still healthy, still spirited, but the distance 
                is no longer just physical.
              </p>
              
              <p>
                There's a tenderness that's hard to express, a guilt that simmers when calls feel rushed 
                or when silence fills the line. Emboe is my way of bridging that space, not just for me, 
                but for every child navigating love, ambition, and distance.
              </p>
              
              <p className="text-primary font-semibold text-xl">
                It's not a replacement for presence. It's a ritual of care, a biotech-powered whisper 
                of "I'm here," every single day.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="text-sm text-muted-foreground">
                — Harsh Singh, Co-Founder & CEO
              </div>
            </div>
          </Card>

          {/* Problem & Solution */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 shadow-soft border-l-4 border-l-destructive bg-destructive/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">The Problem</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 150M+ adults aged 55+ in India face daily emotional voids</li>
                <li>• Children migrate for jobs, leaving parents emotionally unsupported</li>
                <li>• Existing solutions are reactive, not proactive</li>
                <li>• Global elderly population to reach 2.1B by 2050</li>
              </ul>
            </Card>
            
            <Card className="p-6 shadow-soft border-l-4 border-l-success bg-success/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Solution</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Daily emotion-optimized routines for aging parents</li>
                <li>• Proactive cognitive engagement and monitoring</li>
                <li>• Cultural and linguistic awareness for Indian families</li>
                <li>• Bridges emotional gaps through consistent care rituals</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;