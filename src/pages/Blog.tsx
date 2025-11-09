import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "quantum-annealing-portfolio",
    title: "Quantum Annealing for Portfolio Optimization: A Deep Dive",
    excerpt: "Exploring how quantum annealing algorithms can revolutionize financial portfolio optimization by solving complex combinatorial problems that are intractable for classical computers.",
    category: "Quantum Computing",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["Quantum Computing", "Finance", "Optimization"]
  },
  {
    id: "asd-biomarkers-fmri",
    title: "Developing Objective ASD Biomarkers Using fMRI Data",
    excerpt: "A comprehensive look at our pipeline for identifying autism spectrum disorder biomarkers through functional MRI analysis and normative modeling techniques.",
    category: "Neuroscience",
    date: "2025-01-08",
    readTime: "10 min read",
    tags: ["Neuroscience", "Machine Learning", "Healthcare"]
  },
  {
    id: "normative-modeling-intro",
    title: "Introduction to Normative Modeling in Neuroimaging",
    excerpt: "Understanding how normative modeling provides a statistical framework for identifying individual deviations from typical brain development patterns.",
    category: "Tutorial",
    date: "2024-12-20",
    readTime: "12 min read",
    tags: ["Neuroscience", "Statistics", "Tutorial"]
  },
  {
    id: "qaoa-explained",
    title: "QAOA: Bridging Classical and Quantum Optimization",
    excerpt: "Breaking down the Quantum Approximate Optimization Algorithm and how it combines quantum superposition with classical optimization techniques.",
    category: "Quantum Computing",
    date: "2024-12-10",
    readTime: "15 min read",
    tags: ["Quantum Computing", "Algorithms", "Tutorial"]
  },
  {
    id: "research-journey",
    title: "My Journey into Quantum Computing and Neuroscience",
    excerpt: "Reflecting on how my curiosity about the brain and quantum mechanics led me to explore the intersection of these fascinating fields at age 16.",
    category: "Personal",
    date: "2024-11-25",
    readTime: "6 min read",
    tags: ["Personal", "Research", "Career"]
  },
  {
    id: "eeg-preprocessing",
    title: "EEG Data Preprocessing: Best Practices and Pitfalls",
    excerpt: "A practical guide to cleaning and preparing EEG data for machine learning applications, covering artifact removal, filtering, and feature extraction.",
    category: "Tutorial",
    date: "2024-11-15",
    readTime: "11 min read",
    tags: ["Neuroscience", "Data Science", "Tutorial"]
  }
];

const Blog = () => {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container relative z-10 max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Research Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Insights on quantum computing, neuroscience, and the intersection of computational methods with real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-fade-in bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
