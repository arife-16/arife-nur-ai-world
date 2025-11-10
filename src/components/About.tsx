import { Card } from "./ui/card";
import { Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Finding order in chaos, from chalk to quantum
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Statement Card */}
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.2)]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-warm">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">Personal Journey</h3>
                </div>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    I am a researcher and developer driven to find the "mathematical language" hidden within the world's most complex systems. My work focuses on applying rigorous computational methods to solve deep biological and human-centric problems.
                  </p>
                  <p>
                    My core mission is to build tools that move beyond broad, "crude" labels to see the individual. This passion stems from my own experience and the conviction that to truly help people, we must first understand their unique biology.
                  </p>
                  <p>
                    When I am not modeling brain connectivity, I am an active Qiskit Advocate and IBM QAMP mentee, exploring how quantum algorithms can solve complex optimization problems. I also have a deep interest in philosophy and the power of language, from formal logic to Arabic poetry.
                  </p>
                </div>
              </div>
            </Card>

            {/* Current Focus Card */}
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-accent">Current Focus</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">NeuroVision AI Tech</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing machine learning techniques for autism biomarker discovery using 
                      fMRI/EEG neuroimaging data, bridging subjective diagnostics with objective 
                      computational measures.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">IBM Qiskit Advocate</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementing quantum algorithms for financial portfolio optimization as part 
                      of the QAMP mentorship program, exploring applications in quantitative finance.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Girls in Quantum</h4>
                    <p className="text-sm text-muted-foreground">
                      Ambassador designing academic materials and research guides to promote quantum 
                      education and accessibility globally.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70 italic">
                    "I want to study systems that reveal structure without stripping away context. 
                    Quantum computing appeals to me because it deals with uncertainty honestly."
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Bio section */}
          <Card className="p-8 bg-gradient-to-br from-card to-muted/30 border-secondary/30">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">Background</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm a high school student passionate about science and technology and their power to solve 
                real-world problems. I strive to combine technical innovation with global awareness and 
                humanitarian impact. My journey from displacement during the Syrian conflict to researching 
                at the frontiers of quantum computing and neuroscience has taught me that clarity is different 
                from certainty—it means understanding what can be known and respecting what cannot.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Quantum Computing
                </span>
                <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20">
                  Machine Learning
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                  Neuroscience
                </span>
                <span className="px-4 py-2 rounded-full bg-warm/10 text-warm text-sm font-medium border border-warm/20">
                  Research
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
