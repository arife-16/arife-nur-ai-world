import { Card } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const QAMP = () => {
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
              <BreadcrumbPage>QAMP Quantum Optimization</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">Project: Advanced Quantum Optimization for Finance (QAMP)</h1>
          <p className="text-muted-foreground text-lg">The Vision: Building a NISQ-Ready Optimization Engine</p>
          <div className="flex gap-2 pt-2">
            <Badge>Quantum Computing</Badge>
            <Badge variant="secondary">Finance</Badge>
            <Badge variant="outline">QAOA</Badge>
          </div>
        </div>

        <Card className="p-6 space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            This project, part of the IBM Qiskit Advocate Mentorship Program (QAMP), pushes beyond a standard QAOA implementation.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            The core strategy is to build an <span className="font-medium">Upgraded Module</span> by integrating four state-of-the-art enhancements to tackle complex, non-convex financial optimization problems that challenge classical solvers.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            The goal is a problem-tailored, constraint-aware, and noise-resilient quantum algorithm suited for scalable optimization on near-term (NISQ) devices.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Phase 1: Foundations & Classical Benchmarking</h2>
            <p className="text-foreground/80">Establish the data pipeline for historical prices and implement a classical solver (e.g., CPLEX/Gurobi) as the primary benchmark. Formulate advanced QUBOs for:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>Mean-Absolute Deviation (MAD)</li>
              <li>CVaR risk</li>
              <li>Transaction costs</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Phase 2: Core Quantum Engine Development</h2>
            <p className="text-foreground/80">Implement and integrate two key algorithmic upgrades:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>Hard-constraint XY mixers to enforce fixed-budget feasibility</li>
              <li>ADAPT-QAOA to grow a problem-tailored ansatz iteratively</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Phase 3: NISQ Performance Enhancements</h2>
            <p className="text-foreground/80">Integrate enhancements designed for noisy, near-term devices:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>Warm-starting (WS-QAOA) after classical relaxation</li>
              <li>CVaR objective for improved noise resilience</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Phase 4: Full-Scale Benchmarking & Analysis</h2>
            <p className="text-foreground/80">Compare Standard QAOA against the fully upgraded module (ADAPT-QAOA + WS + CVaR + XY mixer) on both Mean-Variance Optimization and harder non-convex formulations. Run comprehensive tests on noisy simulators.</p>
          </Card>

          <Card className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Phase 5: Final Deliverables</h2>
            <p className="text-foreground/80">Disseminate the results to the community with:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>A public GitHub repository with documented code</li>
              <li>An interactive Jupyter Notebook tutorial</li>
              <li>A Qiskit community blog post explaining methods and results</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QAMP;