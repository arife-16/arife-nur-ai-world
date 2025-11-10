import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's collaborate on quantum computing, neuroscience, or humanitarian tech
            </p>
          </div>

          <Card className="p-8 bg-card border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <p className="text-foreground/70">
                    I'm always open to discussing research collaborations, 
                    project opportunities, or just connecting with fellow 
                    scientists and technologists.
                  </p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="mailto:arifenurayaz@gmail.com"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>arifenurayaz@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-3 text-foreground/80">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <span>Türkiye</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Connect Online
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6">
                    Follow my research and projects on these platforms
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary"
                    asChild
                  >
                    <a 
                      href="https://github.com/arife-16" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-3" />
                      GitHub
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-accent/50 text-foreground hover:bg-accent/10 hover:text-accent"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/arife-nur-ayaz-2an0a1/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "To make sense of complexity, to keep improving the systems 
                    that help others see more clearly, and then handing the chalk 
                    to the next person."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
