import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2 } from "lucide-react";
import EntropyViz from "@/components/EntropyViz";
import { useToast } from "@/hooks/use-toast";
import qubo1 from "../../QUBO/1.png";
import qubo2 from "../../QUBO/2.png";
import qubo3 from "../../QUBO/3.png";
import tf1 from "../../teknofest/neuroDx final sunum_page-0001.jpg";
import tf2 from "../../teknofest/neuroDx final sunum_page-0002.jpg";
import tf3 from "../../teknofest/neuroDx final sunum_page-0003.jpg";
import tf4 from "../../teknofest/neuroDx final sunum_page-0004.jpg";
import tf5 from "../../teknofest/neuroDx final sunum_page-0005.jpg";
import tf6 from "../../teknofest/neuroDx final sunum_page-0006.jpg";
import tf7 from "../../teknofest/neuroDx final sunum_page-0007.jpg";
import tf8 from "../../teknofest/neuroDx final sunum_page-0008.jpg";
import tf9 from "../../teknofest/neuroDx final sunum_page-0009.jpg";
import tf10 from "../../teknofest/neuroDx final sunum_page-0010.jpg";
import tf11 from "../../teknofest/neuroDx final sunum_page-0011.jpg";
import tf12 from "../../teknofest/neuroDx final sunum_page-0012.jpg";
import tf13 from "../../teknofest/neuroDx final sunum_page-0013.jpg";
import tf14 from "../../teknofest/neuroDx final sunum_page-0014.jpg";
import tf15 from "../../teknofest/neuroDx final sunum_page-0015.jpg";
import qamp1 from "../../QAMP/QAMP_Checkpoint1_page-0001.jpg";
import qamp2 from "../../QAMP/QAMP_Checkpoint1_page-0002.jpg";
import qamp3 from "../../QAMP/QAMP_Checkpoint1_page-0003.jpg";
import qamp4 from "../../QAMP/QAMP_Checkpoint1_page-0004.jpg";
import qamp5 from "../../QAMP/QAMP_Checkpoint1_page-0005.jpg";
import qamp6 from "../../QAMP/QAMP_Checkpoint1_page-0006.jpg";
import qamp7 from "../../QAMP/QAMP_Checkpoint1_page-0007.jpg";
import qamp8 from "../../QAMP/QAMP_Checkpoint1_page-0008.jpg";

interface BlogPostContent {
  id: string;
  title: string;
  category: string;
  tags: string[];
  content: string[];
}

const imageMap: Record<string, string> = {
  "QUBO/1.png": qubo1,
  "QUBO/2.png": qubo2,
  "QUBO/3.png": qubo3,
  "TEKNOFEST-01": tf1,
  "TEKNOFEST-02": tf2,
  "TEKNOFEST-03": tf3,
  "TEKNOFEST-04": tf4,
  "TEKNOFEST-05": tf5,
  "TEKNOFEST-06": tf6,
  "TEKNOFEST-07": tf7,
  "TEKNOFEST-08": tf8,
  "TEKNOFEST-09": tf9,
  "TEKNOFEST-10": tf10,
  "TEKNOFEST-11": tf11,
  "TEKNOFEST-12": tf12,
  "TEKNOFEST-13": tf13,
  "TEKNOFEST-14": tf14,
  "TEKNOFEST-15": tf15,
  "QAMP-01": qamp1,
  "QAMP-02": qamp2,
  "QAMP-03": qamp3,
  "QAMP-04": qamp4,
  "QAMP-05": qamp5,
  "QAMP-06": qamp6,
  "QAMP-07": qamp7,
  "QAMP-08": qamp8,
};



const blogContent: Record<string, BlogPostContent> = {
  "qamp-presentation": {
    id: "qamp-presentation",
    title: "Qiskit Advocate Mentorship Program: QAMP Presentation",
    category: "Quantum Computing",
    tags: ["QAMP", "Qiskit", "Mentorship", "Presentation"],
    content: [
      "Presentation gallery from the Qiskit Advocate Mentorship Program (QAMP).",
      "IMAGE:QAMP-01",
      "IMAGE:QAMP-02",
      "IMAGE:QAMP-03",
      "IMAGE:QAMP-04",
      "IMAGE:QAMP-05",
      "IMAGE:QAMP-06",
      "IMAGE:QAMP-07",
      "IMAGE:QAMP-08",
    ],
  },
  "neurodx-teknofest": {
    id: "neurodx-teknofest",
    title: "NeuroDx: TEKNOFEST Finalist Presentation (9th Place)",
    category: "Neuroscience",
    tags: ["TEKNOFEST", "NeuroDx", "Presentation", "Finalist"],
    content: [
      "Showcase of my TEKNOFEST International Science and Tech Festival finalist presentation (NeuroDx), awarded 9th place.",
      "IMAGE:TEKNOFEST-01",
      "IMAGE:TEKNOFEST-02",
      "IMAGE:TEKNOFEST-03",
      "IMAGE:TEKNOFEST-04",
      "IMAGE:TEKNOFEST-05",
      "IMAGE:TEKNOFEST-06",
      "IMAGE:TEKNOFEST-07",
      "IMAGE:TEKNOFEST-08",
      "IMAGE:TEKNOFEST-09",
      "IMAGE:TEKNOFEST-10",
      "IMAGE:TEKNOFEST-11",
      "IMAGE:TEKNOFEST-12",
      "IMAGE:TEKNOFEST-13",
      "IMAGE:TEKNOFEST-14",
      "IMAGE:TEKNOFEST-15",
    ],
  },
  "qubo-posters": {
    id: "qubo-posters",
    title: "QUBO Formulation: Poster Gallery",
    category: "Quantum Computing",
    tags: ["QUBO", "Quantum", "Posters"],
    content: [
      "IMAGE:QUBO/1.png",
      "IMAGE:QUBO/2.png",
      "IMAGE:QUBO/3.png",
    ],
  },
  "research-journey": {
    id: "research-journey",
    title: "My Journey into Quantum Computing and Neuroscience",
    category: "Personal",
    tags: ["Personal", "Quantum Computing", "Neuroscience", "Autism", "Leadership"],
    content: [
      "My Journey into Quantum Computing and Neuroscience",
      "On my website, I list two fields that at first glance seem to be worlds apart: quantum computing and computational neuroscience. One is the physics of the impossibly small, a world built on probability and uncertainty. The other is the science of the human mind, the most complex biological system we know.",
      "But to me, they are not separate. They are two destinations on the same map, part of one long, continuous search to understand how order emerges in complex worlds, whether physical or human. This blog post is about that journey, a path that started in chaos and was given direction by a pivotal friendship.",
      "## The Search for Order",
      "My entire life has been a search for patterns. My goal is to understand the world in a way that makes it less chaotic. As an autistic child raised in a war environment, I learned very early how unpredictable the world and human behavior can be. In the midst of that uncertainty, I found a sanctuary in logic. Numbers and patterns offered a sense of order when nothing else did.",
      "My journey began not in a lab, but in a classroom where my family and I were sheltered after being displaced by war. My autistic mind was overwhelmed by the noise and unpredictability of it all. In that room, I found a blackboard and a piece of chalk, and I began to do the only thing that made sense: I tried to map the chaos.",
      "For years, I saw the world this way, finding comfort in the predictable, logical rules of numbers and patterns while the world outside followed none. This instinct of finding structure in chaos is the one constant in my life. For years, I channeled it inward, believing that self-discovery was a journey I had to take alone. I was seeking a framework for understanding, but I was missing the tools. My biggest obstacle was the lack of a companion. When I felt lost, I would try to find my way by methodically calculating every possibility on my own, searching until I found an answer. I was turning my mind into a fortress.",
      "Years later, from a coincidence that shaped an entire journey, the walls of that fortress began to come down. I met a friend who would later become my best friend. He didn't just influence my view of the world; he handed me a new lens through which to see it. He introduced me to the exciting possibilities within technology and entrepreneurship, inspiring me by introducing me to the fascinating world of computers and the power of this tool. While I was instinctively drawing complex shapes to try and explain what was in my head, he gave me a language to describe it: computation.",
      "My friend's influence, however, went beyond the technical. He helped me realize that if I wanted to add real value to the world, I couldn't do it alone. He had a philosophy on leadership and passion that re-shaped my own. He shared a quote with me that captured this vision, a 'law' of leadership I've never forgotten:",
      "\"The best managers are the great individual contributors who never ever want to be a manager but the side that they have to be a manager because no one else is going to be able to do as good a job as them.\" - Steve Jobs",
      "This idea of stepping up not for power, but out of a sense of responsibility and passion struck me deeply. I finally understood that every equation, every algorithm, every theory only gains its true meaning when it's connected to a higher desire of changing our realities.",
      "This quest led me to the frontiers of quantum computing and artificial intelligence systems, where these fields perfectly reflect the way my mind processes the world. The classical logic demands absolute certainty, while quantum systems embrace the power of probability. In this same vision, human decision-making is often disrupted by noise, while artificial intelligence seeks to find clear patterns in the data.",
      "These fields, which I now explore as a Qiskit Advocate and researcher, are the ultimate expression of my search. It is a system that asks for precision without pretending that everything can be known. At the same time, my friend's insights into human nature and my own autistic mind pushed me down a parallel path. I have always synthesized concepts, mapping abstract ideas into words, phrases, and even colors in my mind.",
      "What if I could use the same computational tools to understand that process?",
      "This led me to neuroscience. I am now a research fellow working to discover biomarkers for autism, developing machine learning techniques to analyze complex neuroimaging data. In a way, I am trying to build the objective, computational tools to understand the very 'systems' I've been navigating my whole life.",
      "I still love the clean line of a proof, but I’m no longer chasing certainty. The chalk, the code, the experiments, and the people I’ve met all form one continuous line of inquiry. Each step has been a way of learning how to think clearly when the world is not. That is the habit I carry forward: to make sense of complexity, to keep improving the systems that help others see more clearly, and then handing the chalk to the next person.",
      "It is a search that began with an internal need for order, was given a critical spark by a friend who taught me how to model the world, and continues today as I use these tools to make sense of complexity.",
    ],
  },
  "information-theory": {
    id: "information-theory",
    title: "Information Theory: The Mathematics of Uncertainty",
    category: "Information Theory",
    tags: ["Entropy", "Shannon", "Probability", "MaxEnt"],
    content: [
      "## Information Theory: The Mathematics of Uncertainty",
      "We’ve all heard and used the word “information” colloquially: it is any observation, data, or knowledge that reduces uncertainty. “I can’t make a decision yet, I need more information.”",
      "For a moment, let’s examine a counterfeit coin puzzle: the goal of this puzzle is to find which (if any) coins in our possession are counterfeit. With one suspicious coin, and no observation or other data to support its authenticity, we are uncertain whether or not it is counterfeit.",
      "How many possible outcomes are there? Obviously there are two possibilities: either the coin is counterfeit, or it isn’t. Other than the trivial case of one possibility (and therefore no uncertainty), an event with two possibilities is the lowest possible level of uncertainty.",
      "The amount of information it takes to resolve this smallest level of uncertainty is the elementary unit of information: a bit. The information that you would gain by weighing the coin and determining whether it is counterfeit or not would be one bit of information. This is the same amount of information you get from the answer to a yes or no question, or from flipping a coin.",
      "The more uncertain an event, the more information is required to resolve that uncertainty. Consider the same counterfeit coin puzzle, but this time we have ten coins, any of which may be counterfeit. This time the total outcome possibilities is 2^10 = 1024.",
      "There’s more uncertainty in the counterfeit coin puzzle when there are ten coins in the mix. In fact, by adding nine more coins, we’ve increased the number of possible outcomes by a huge factor of 512.",
      "One yes or no question—one bit of information—is enough to reduce the number of outcomes for one coin from 2 to 1. Whether the coin is counterfeit or not, the total number of outcomes for the counterfeit coin puzzle then drops from 2^10 = 1024 to 2^9 = 512.",
      "From these two cases, we can see that the number of possible outcomes n is scaling exponentially with respect to the number of bits: n = 2^bits. By taking the logarithm of both sides, we come to the formal definition of information: it scales with the logarithm of the number of possibilities. That is, for n possible outcomes, the information required to resolve the uncertainty is: Information = log₂(n) bits.",
      "## Entropy: Measuring Uncertainity",
      "Information theory, pioneered by Claude Shannon in the mid-20th century, provides a mathematical framework for understanding and quantifying information. At its core, information theory revolves around the concept of uncertainty and how it can be reduced through the acquisition of new data.",
      "While we commonly think of bits as 1s and 0s in computer systems, their significance runs deeper. A single bit can answer one yes/no question, reducing uncertainty by half. For example, if you're thinking of a number between 1 and 8, I can determine it with exactly 3 bits of information through binary search:",
      "- Is it greater than 4?\n- Among the remaining possibilities, is it greater than the midpoint?\n- Of the two remaining numbers, is it the larger one?",
      "## The Story of Shannon's Entropy",
      "Imagine you're playing a game of \"20 Questions\" with a friend. Your friend is thinking of an animal, and you need to guess it by asking yes/no questions. How can we measure how \"surprising\" or \"informative\" each answer is?",
      "- Rare events should give us more information than common ones\n- Independent events should add their information\n- The measure should be continuous and smooth",
      "Following these conclusions, the famous entropy formula has emerged.",
      "## The Birth of the Formula",
      "- Start with Probability\n- Consider an event with probability p\n- The less likely it is (smaller p), the more information it should contain",
      "- The Logarithm Magic\n- If we want dependent events to add their information, we need logarithms\n- Why? Because log(ab) = log(a) + log(b)",
      "- The Negative Sign\n- Since probabilities are between 0 and 1, their logarithms are negative\n- We want information to be positive, so we add a negative sign",
      "Hence: Information = -log₂(p)",
      "- The Average Surprise\n- Entropy is just the average information over all possible outcomes\n- For each outcome with probability p, we multiply its information [-log₂(p)] by its probability (p)\n- Sum these up, and voilà! H = -∑ p log₂(p)",
      "As we learn, entropy decreases, and each bit of information we gain reduces uncertainty by a specific amount. High entropy means we need more information to make good decisions. On the other hand, low entropy means we're more certain about what to do.",
      "In basic terms, entropy is the nature's measure of \"surprisingness\". Just as a predictable movie is boring, a predictable information source has low entropy. The more unpredictable something is, the higher its entropy - and the more interesting each new piece of information becomes!",
      "## The Maximum Entropy Principle: Being Smartly Clueless!",
      "The Maximum Entropy Principle (MaxEnt) is one of the most profound ideas in information theory, serving as a bridge between probability theory and rational inference. It tells us something remarkable: when we lack information, the best strategy is to choose the probability distribution that: Maximizes entropy (uncertainty) and remains consistent with what we do know.",
      "This might seem counterintuitive - why maximize uncertainty? The answer lies in intellectual honesty: we want to be as uncertain as possible while still respecting our constraints. This prevents us from making hidden assumptions or claiming more knowledge than we actually have.",
      "Imagine you're a detective who's surprisingly good at their job by admitting what you don't know! That's essentially what the Maximum Entropy Principle is - it's the scientific way of saying \"I don't know, but here's what I do know, and I'm going to be super honest about everything else!\"",
      "## The Birthday Party Mystery",
      "Let's say you're planning a surprise party and trying to guess how many people will show up. Here's what you know:\n- You invited 50 people\n- On average, about 70% of people show up to parties\n- The venue fits 45 people max",
      "What should you expect? Maximum Entropy says: \"Be as unsure as possible while respecting these facts!\" It's like planning for chaos while knowing the boundaries of that chaos.",
      "## Setting the Boundaries",
      "Minimum: 0 people (theoretically possible, though sad!)\nMaximum: 45 people (venue limit)\nExpected average: 35 people (70% of 50)",
      "## The MaxEnt Solution",
      "Instead of assuming a normal distribution (bell curve) or any other specific pattern, MaxEnt tells us to:\nUse an exponential-like distribution that:\n- Has an average of 35 people\n- Never predicts more than 45 people\n- Maintains maximum uncertainty everywhere else!",
      "## The Three Rules of Professional Uncertainty",
      "- Don't make stuff up\n- Use what you know\n- For everything else - embrace the chaos (in a mathematical way!)",
      "## Conclusion",
      "Information theory provides a rigorous mathematical framework for understanding uncertainty and information. Its deep connections with Bayesian probability theory make it an essential tool in modern data science, machine learning, and communications. Through the concept of entropy, we can quantify uncertainty and measure the information content of data, leading to practical applications across numerous fields.",
      "The beauty of information theory lies in its ability to bridge the gap between abstract mathematical concepts and practical problems in data processing and decision making. As we continue to live in an increasingly data-driven world, understanding these fundamental principles becomes ever more crucial.",
      "Remember, all we should do is making sense of uncertainty!!",
    ],
  },
  
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
              <div className="flex items-center justify-end flex-wrap gap-4 text-sm text-muted-foreground">
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
                const imageMatch = paragraph.match(/^IMAGE:(.+)$/);
                if (imageMatch) {
                  const key = imageMatch[1].trim();
                  const src = imageMap[key] ?? key;
                  return (
                    <div key={index} className="my-6">
                      <img src={src} alt={key} className="w-full h-auto rounded-md" />
                    </div>
                  );
                }
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

            {post.id === "information-theory" && (
              <div className="mt-8">
                <EntropyViz />
              </div>
            )}

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
