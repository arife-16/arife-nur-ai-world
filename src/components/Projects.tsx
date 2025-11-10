import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Brain, Atom, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import asdProject from "@/assets/asd-project.jpg";
import quantumProject from "@/assets/quantum-project.jpg";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Research Projects
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Bridging quantum algorithms and neuroscience to create real-world impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ASD Pipeline Project */}
            <Card className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={asdProject} 
                  alt="Autism diagnosis research using fMRI and EEG neuroimaging"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-3 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    ASD Biomarker Pipeline
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    Neuroscience • Machine Learning • fMRI/EEG
                  </p>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  A project for objective autism diagnosis using normative 
                  modeling on multimodal neuroimaging data. Analyzing brain connectivity patterns to 
                  identify neural signatures and create interpretable deviation maps for clinical classification.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">
                      Feature engineering with Brain Connectivity Toolbox (BCT)
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">
                      Normative modeling using GAMLSS and Gaussian Process Regression
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">
                      Individual deviation Z-score maps for neuro-subtyping
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                    MATLAB
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                    Python
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                    CPAC
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                    EEGLAB
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-accent/50 text-accent hover:bg-accent/10 group/btn mt-4"
                  asChild
                >
                  <Link to="/projects/asd-biomarker">
                    View Research
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Quantum Portfolio Optimization */}
            <Card className="group overflow-hidden bg-card border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={quantumProject} 
                  alt="Quantum computing for financial portfolio optimization"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-3 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
                    <Atom className="w-6 h-6 text-secondary" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    Quantum Portfolio Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    Quantum Computing • Finance • QAOA
                  </p>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  project aims to implement a quantum approach to this classic financial problem by framing it as a combinatorial optimization task and solving it using the Quantum Approximate Optimization Algorithm (QAOA). We will focus on the mean-variance optimization model, a cornerstone of computational finance.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">
                      ADAPT-QAOA with constraint-aware XY-mixers
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">
                      Warm-start initialization and CVaR noise resilience
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">
                      Benchmarking against classical MIP solvers
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium border border-secondary/20">
                    Qiskit
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium border border-secondary/20">
                    Python
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium border border-secondary/20">
                    QAOA
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium border border-secondary/20">
                    Finance
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-secondary/50 text-secondary hover:bg-secondary/10 group/btn mt-4"
                  asChild
                >
                  <Link to="/projects/qamp">
                    View Project
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
