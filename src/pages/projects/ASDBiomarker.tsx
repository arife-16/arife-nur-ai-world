import { Card } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const ASDBiomarker = () => {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container max-w-5xl mx-auto space-y-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/#projects">Projects</Link>
            </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>ASD Biomarker Discovery</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">Decoding the Neurobiology of Autism (ASD)</h1>
          <p className="text-muted-foreground text-lg">The Vision: From a Single Label to a Personal Map</p>
          <div className="flex gap-2 pt-2">
            <Badge>Neuroscience</Badge>
            <Badge variant="secondary">fMRI/EEG</Badge>
            <Badge variant="outline">Normative Modeling</Badge>
          </div>
        </div>

        <Card className="p-6 space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            The term "Autism Spectrum Disorder" (ASD) groups millions of unique individuals under a single, broad behavioral label. This project challenges that paradigm.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            My goal is to build a computational pipeline that moves beyond behavior and uses brain data (fMRI and EEG) to discover distinct, biologically-based subtypes of autism.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            I am creating a tool that can generate a personalized <span className="font-medium">Deviation Map</span> for each individual. This map shows exactly how and where their brain's functional connectivity differs from a demographic baseline, providing a precise, quantitative profile of their unique neurobiology.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">1. Data Acquisition & Cohort Definition</h2>
            <p className="text-foreground/80">We assemble a large-scale multimodal dataset, leveraging public cohorts to serve as a robust foundation:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>ABIDE I & II for fMRI</li>
              <li>Child Mind Institute's HBN for EEG</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">2. Feature Engineering (The "Vocabulary")</h2>
            <p className="text-foreground/80">Raw brain signals are translated into a rich mathematical vocabulary using tools such as the Brain Connectivity Toolbox (BCT). We extract meaningful features including:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>fMRI Nodal Metrics: nodal strength, clustering coefficient, participation (hub status)</li>
              <li>EEG Spectral Features: power in Delta, Theta, Alpha, Beta, and Gamma bands</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">3. Normative Model Training (The "Grammar")</h2>
            <p className="text-foreground/80">We train statistical models on thousands of typically developing subjects to build a flexible normative model that accounts for key covariates:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>Gaussian Process Regression or GAMLSS</li>
              <li>Controls for age, sex, and site</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">4. Individual Deviation Map Generation (The "Sentence")</h2>
            <p className="text-foreground/80">For any individual, the normative model predicts expected connectivity. We compare this expectation to their actual brain data to compute Z-scores, producing an interpretable Deviation Map that pinpoints hyper- or hypo-connected regions.</p>
          </Card>

          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">5. Subtype Discovery & Integration (The "Discovery")</h2>
            <p className="text-foreground/80">We apply unsupervised clustering on ASD deviation maps to discover data-driven neuro-subtypes and integrate modalities:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>Unsupervised clustering (e.g., k-means)</li>
              <li>Fusion of fMRI and EEG for a multimodal model</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ASDBiomarker;