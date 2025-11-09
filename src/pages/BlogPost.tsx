import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPostContent {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
}

const blogContent: Record<string, BlogPostContent> = {
  "quantum-annealing-portfolio": {
    id: "quantum-annealing-portfolio",
    title: "Quantum Annealing for Portfolio Optimization: A Deep Dive",
    category: "Quantum Computing",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["Quantum Computing", "Finance", "Optimization"],
    content: [
      "Portfolio optimization is a fundamental problem in finance that involves selecting the best distribution of assets to maximize returns while minimizing risk. Traditional approaches using classical computing face significant challenges as portfolio complexity grows.",
      "## The Challenge of Classical Optimization",
      "Classical optimization algorithms struggle with the combinatorial explosion that occurs when considering large numbers of assets and constraints. The number of possible portfolio configurations grows exponentially, making it computationally intractable for classical computers to find optimal solutions.",
      "## Enter Quantum Annealing",
      "Quantum annealing leverages quantum mechanical phenomena like superposition and quantum tunneling to explore the solution space more efficiently. By encoding the portfolio optimization problem as a Quadratic Unconstrained Binary Optimization (QUBO) problem, we can harness quantum hardware to find near-optimal solutions.",
      "## Our Approach",
      "In our research, we've developed a pipeline that translates portfolio constraints and risk-return objectives into QUBO formulations suitable for quantum annealers. We use D-Wave's quantum processing units to solve these problems and compare results against classical solvers.",
      "## Preliminary Results",
      "Our initial experiments show promising results, with quantum annealing finding competitive solutions in significantly reduced time for portfolios with 50+ assets. The quantum approach excels particularly when dealing with complex constraint sets that would overwhelm classical methods.",
      "## Future Directions",
      "We're now exploring hybrid quantum-classical algorithms that leverage the strengths of both paradigms. This includes using quantum annealing for the core optimization while employing classical methods for pre-processing and post-processing steps.",
      "The intersection of quantum computing and finance represents one of the most exciting near-term applications of quantum technology, and I'm thrilled to be exploring this frontier."
    ]
  },
  "asd-biomarkers-fmri": {
    id: "asd-biomarkers-fmri",
    title: "Developing Objective ASD Biomarkers Using fMRI Data",
    category: "Neuroscience",
    date: "2025-01-08",
    readTime: "10 min read",
    tags: ["Neuroscience", "Machine Learning", "Healthcare"],
    content: [
      "Autism Spectrum Disorder (ASD) diagnosis currently relies heavily on behavioral assessments, which can be subjective and vary across evaluators. Our research aims to develop objective biomarkers using neuroimaging data.",
      "## The Need for Objective Biomarkers",
      "Early and accurate diagnosis of ASD is crucial for timely intervention. However, current diagnostic methods face challenges in consistency and can be particularly difficult for certain populations. Objective biomarkers based on brain imaging could revolutionize ASD diagnosis.",
      "## Our Pipeline",
      "We've developed a comprehensive pipeline that processes functional MRI (fMRI) data through several stages:",
      "1. **Data Acquisition**: Collecting resting-state fMRI scans from both neurotypical individuals and those diagnosed with ASD\n2. **Preprocessing**: Applying normalization, motion correction, and noise reduction techniques\n3. **Feature Extraction**: Computing functional connectivity matrices and other relevant neuroimaging features\n4. **Normative Modeling**: Establishing baseline patterns from neurotypical data\n5. **Classification**: Using machine learning to identify deviations indicative of ASD",
      "## Normative Modeling Approach",
      "The key innovation in our approach is the use of normative modeling, which treats diagnosis as a problem of identifying statistically significant deviations from typical brain patterns. This is more nuanced than simple binary classification and provides interpretable results.",
      "## Preliminary Findings",
      "Our initial results show promising classification accuracy, with particular success in identifying altered connectivity patterns in the default mode network and social cognition regions. We're achieving over 80% accuracy on our validation set.",
      "## Ethical Considerations",
      "We're mindful that ASD is a neurodevelopmental difference rather than simply a disorder. Our goal is not to 'fix' autism but to provide tools for early support and personalized interventions that respect neurodiversity.",
      "## Next Steps",
      "We're expanding our dataset to include more diverse populations and exploring the integration of EEG data for a more comprehensive biomarker profile. The ultimate goal is a multimodal approach that can support clinicians in making more informed diagnostic decisions."
    ]
  },
  "normative-modeling-intro": {
    id: "normative-modeling-intro",
    title: "Introduction to Normative Modeling in Neuroimaging",
    category: "Tutorial",
    date: "2024-12-20",
    readTime: "12 min read",
    tags: ["Neuroscience", "Statistics", "Tutorial"],
    content: [
      "Normative modeling is a statistical framework that's transforming how we understand individual differences in brain structure and function. Unlike traditional case-control studies, normative modeling focuses on characterizing the full distribution of brain measures across the population.",
      "## What is Normative Modeling?",
      "Think of normative modeling like growth charts used in pediatrics. Just as doctors use percentile curves to assess whether a child's height is within the typical range, normative modeling creates reference curves for brain measurements.",
      "## Why Traditional Approaches Fall Short",
      "Traditional neuroimaging studies typically compare group averages (e.g., patients vs. controls). This approach has limitations:\n- It assumes homogeneity within diagnostic groups\n- It misses individual variation\n- It doesn't account for normal developmental or aging trajectories",
      "## The Normative Modeling Framework",
      "The process involves:\n1. **Building the Normative Model**: Train a model on a large, diverse sample representing the 'typical' population\n2. **Accounting for Covariates**: Include factors like age, sex, and scanner type that naturally influence brain measures\n3. **Calculating Deviations**: For each individual, compute how much they deviate from predicted normative values",
      "## Statistical Foundations",
      "We typically use Bayesian methods or hierarchical models that can handle:\n- Non-linear age effects\n- Site/scanner differences\n- Heteroscedasticity (varying variance across the lifespan)",
      "Common approaches include Gaussian Process Regression and Hierarchical Bayesian Models.",
      "## Applications in Clinical Neuroscience",
      "Normative modeling has shown promise in:\n- Identifying biologically meaningful subtypes within diagnostic categories\n- Predicting treatment response\n- Tracking disease progression\n- Understanding resilience factors",
      "## Practical Considerations",
      "When implementing normative modeling:\n- **Sample Size Matters**: You need large normative samples (ideally 1000+ individuals)\n- **Covariates**: Carefully select which variables to include\n- **Validation**: Always validate on held-out data\n- **Interpretation**: Deviations aren't inherently 'bad' - they're just differences that might be clinically meaningful",
      "## Tools and Resources",
      "Several open-source tools are available:\n- PCNtoolkit (Python)\n- ENIGMA Toolbox\n- BrainChart",
      "These make normative modeling more accessible to researchers without extensive statistical programming expertise.",
      "Normative modeling represents a paradigm shift toward precision medicine in psychiatry and neurology, and I'm excited to apply it in my ASD biomarker research."
    ]
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const post = id ? blogContent[id] : null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Blog post link copied to clipboard",
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Post Not Found</h1>
          <p className="text-muted-foreground">This blog post doesn't exist yet. Check back soon!</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="pt-32 pb-16 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <header className="space-y-4">
              <Badge variant="secondary" className="font-mono">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-between flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-12 mb-4 text-foreground">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.match(/^\d+\./)) {
                  const items = paragraph.split('\n');
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 my-6">
                      {items.map((item, i) => (
                        <li key={i} className="text-foreground/90 leading-relaxed">
                          {item.replace(/^\d+\.\s*/, '')}
                        </li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.startsWith('-')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-6">
                      {items.map((item, i) => (
                        <li key={i} className="text-foreground/90 leading-relaxed">
                          {item.replace(/^-\s*/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Footer */}
            <footer className="pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <Link to="/blog">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    More Posts
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button>Get in Touch</Button>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
