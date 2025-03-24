
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

const projects = [
  {
    title: "E-Commerce Test Automation Framework",
    description: "Developed a comprehensive Selenium-based framework for automating regression testing of a high-traffic e-commerce platform, reducing testing time by 65%.",
    tags: ["Selenium", "Java", "TestNG", "Jenkins", "Docker"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "API Test Suite for Payment Gateway",
    description: "Created an extensive API testing suite using Postman and Newman for a payment processing system, ensuring security compliance and transaction reliability.",
    tags: ["Postman", "Newman", "JavaScript", "CI/CD", "REST API"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Performance Testing for SaaS Platform",
    description: "Implemented JMeter test plans to identify and resolve performance bottlenecks in a SaaS application, improving response times by 40% under high load conditions.",
    tags: ["JMeter", "Performance", "Load Testing", "AWS", "Monitoring"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Mobile App Test Automation",
    description: "Built an Appium framework for cross-platform mobile testing, ensuring consistent functionality across iOS and Android versions with 90% test coverage.",
    tags: ["Appium", "Mobile Testing", "Python", "BDD", "CI/CD"],
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1470&auto=format&fit=crop",
    links: {
      github: "#",
      live: "#",
    },
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) => {
  return (
    <AnimatedSection 
      className="group"
      delay={index * 150}
    >
      <div className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-display font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <a
                href={project.links.github}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={project.links.live}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View Live Project"
              >
                <LinkIcon className="h-5 w-5" />
              </a>
            </div>
            <a
              href={project.links.live}
              className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              View Details <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of quality assurance projects demonstrating my expertise in testing methodologies
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        <AnimatedSection className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:bg-primary/90 hover:gap-3"
          >
            Let's Work Together <ArrowRight className="h-4 w-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
