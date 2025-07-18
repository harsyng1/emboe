import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's bridge hearts together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our waitlist, partner with us, or share your story. 
              Every conversation brings us closer to solving this together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-soft border-0">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="What would you like to discuss?" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your experience with aging parents, or how you'd like to get involved..."
                    rows={4}
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="p-6 shadow-soft border-0 hover:shadow-medium transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email Us</h4>
                      <p className="text-muted-foreground">hello@emboe.in</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 shadow-soft border-0 hover:shadow-medium transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Based in</h4>
                      <p className="text-muted-foreground">Chennai & Bangalore, India</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Waitlist CTA */}
              <Card className="p-8 bg-gradient-primary text-white shadow-medium">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Join the Waitlist</h3>
                  <p className="opacity-90">
                    Be among the first 100 families to experience Emboe. 
                    Get early access and help shape the future of eldercare.
                  </p>
                  
                  <div className="flex gap-3">
                    <Input 
                      placeholder="Enter your email" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button variant="elegant" size="default">
                      Join
                    </Button>
                  </div>
                  
                  <p className="text-xs opacity-70">
                    MVP launches Q4 2025. No spam, just updates on our progress.
                  </p>
                </div>
              </Card>

              {/* Mission Statement */}
              <Card className="p-6 shadow-soft border-0 border-l-4 border-l-primary bg-primary-light/5">
                <h4 className="font-semibold text-foreground mb-3">Our Mission</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To create technology that doesn't replace human connection, but amplifies it. 
                  Every ritual, every interaction, every gentle nudge is designed to bring 
                  families closer, not further apart.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;