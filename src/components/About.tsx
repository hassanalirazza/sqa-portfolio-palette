
import { Check, Code, Search, Shield } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated to delivering exceptional software quality through comprehensive testing strategies
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold">QA Engineer with Passion for Excellence</h3>
              <p className="text-muted-foreground">
                With 6+ years of experience in software quality assurance, I specialize in developing and implementing testing methodologies that enhance product reliability and user satisfaction.
              </p>
              <p className="text-muted-foreground">
                My expertise spans manual and automated testing, continuous integration, test planning, and defect management across web and mobile applications.
              </p>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 mt-0.5 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <p>End-to-end testing strategies that deliver measurable quality improvements</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 mt-0.5 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <p>Automation frameworks that increase testing efficiency by up to 70%</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 mt-0.5 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <p>Collaborative approach integrating QA into all stages of development</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="order-1 md:order-2" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="glassmorphism p-6 rounded-2xl">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-medium mb-2">Testing Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Developing comprehensive testing plans tailored to project requirements
                </p>
              </div>
              
              <div className="glassmorphism p-6 rounded-2xl">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-medium mb-2">Test Automation</h4>
                <p className="text-sm text-muted-foreground">
                  Building scalable automation frameworks to streamline testing processes
                </p>
              </div>
              
              <div className="glassmorphism p-6 rounded-2xl">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-medium mb-2">Quality Assurance</h4>
                <p className="text-sm text-muted-foreground">
                  Implementing QA processes that prevent defects early in development
                </p>
              </div>
              
              <div className="glassmorphism p-6 rounded-2xl">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-medium mb-2">Performance Testing</h4>
                <p className="text-sm text-muted-foreground">
                  Analyzing and optimizing application performance under various conditions
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
