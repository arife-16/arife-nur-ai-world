import { Card } from "./ui/card";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  color: "primary" | "secondary" | "accent" | "warm";
}

const experiences: ExperienceItem[] = [
  {
    organization: "NeuroVision AI Tech",
    role: "Research Fellow - NeuroConnect Team",
    period: "October 2025 - Present",
    location: "Remote",
    description: [
      "Developing machine learning techniques for autism biomarker discovery using fMRI/EEG data",
      "Creating normative models to analyze complex neuroimaging data for hidden neural signatures",
      "Bridging subjective diagnostic assessments with objective computational biomarkers"
    ],
    color: "accent"
  },
  {
    organization: "IBM",
    role: "Qiskit Advocate",
    period: "September 2025 - Present",
    location: "Remote",
    description: [
      "Implementing quantum algorithms for financial portfolio optimization using Qiskit (QAMP)",
      "Researching quantum computing applications in quantitative finance",
      "Contributing to global Qiskit community and open-source quantum computing ecosystem"
    ],
    color: "secondary"
  },
  {
    organization: "Girls in Quantum",
    role: "Ambassador | Research & Outreach Teams",
    period: "September 2025 - Present",
    location: "Remote",
    description: [
      "Designing academic materials and research guides on quantum computing",
      "Collaborating on partnership projects and global initiatives",
      "Promoting quantum education accessibility to diverse audiences"
    ],
    color: "primary"
  },
  {
    organization: "Harvard SEAS",
    role: "HUVTSP Intern",
    period: "June 2025 - July 2025",
    location: "Remote",
    description: [
      "Selected with full scholarship for invite-only Harvard Undergraduate Ventures-TECH Summer Program",
      "Engaged in venture creation, product strategy, and daily workshops",
      "Led international team developing EduBeyond, an AI-powered AP Physics tutor (RAG application)"
    ],
    color: "warm"
  }
];

const colorClasses = {
  primary: {
    border: "border-primary/50",
    text: "text-primary",
    bg: "bg-primary/10"
  },
  secondary: {
    border: "border-secondary/50",
    text: "text-secondary",
    bg: "bg-secondary/10"
  },
  accent: {
    border: "border-accent/50",
    text: "text-accent",
    bg: "bg-accent/10"
  },
  warm: {
    border: "border-warm/50",
    text: "text-warm",
    bg: "bg-warm/10"
  }
};

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-warm via-secondary to-primary bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Research positions and leadership roles
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const colors = colorClasses[exp.color];
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${colors.bg} border-2 ${colors.border} z-10`}></div>

                    {/* Content */}
                    <div className={`flex-1 ${isEven ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <Card className={`p-6 bg-card border-border hover:${colors.border} transition-all duration-300 ml-8 md:ml-0`}>
                        <div className="space-y-4">
                          <div>
                            <h3 className={`text-xl font-bold ${colors.text}`}>
                              {exp.organization}
                            </h3>
                            <p className="text-foreground font-medium mt-1">
                              {exp.role}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-sm text-foreground/70 flex gap-2">
                                <span className={colors.text}>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
