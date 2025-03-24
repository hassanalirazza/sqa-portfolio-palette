
import { ArrowDown } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,230,240,0.5)_0%,rgba(240,240,250,0)_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(30,30,40,0.5)_0%,rgba(30,30,40,0)_60%)]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-4 inline-block">
          <AnimatedText
            text="Quality Assurance"
            className="text-sm sm:text-base font-medium tracking-widest uppercase text-muted-foreground"
            delay={200}
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 overflow-hidden">
          <div className="overflow-hidden mb-2">
            <AnimatedText 
              text="Crafting Flawless" 
              className="block"
              delay={400}
            />
          </div>
          <div className="overflow-hidden">
            <AnimatedText 
              text="Digital Experiences" 
              className="block text-primary/80"
              delay={600}
            />
          </div>
        </h1>
        
        <div className="overflow-hidden mb-12">
          <AnimatedText
            text="Building reliable software through meticulous testing, automation, and quality-focused development processes."
            className="text-lg font-light text-muted-foreground max-w-2xl mx-auto"
            delay={800}
          />
        </div>
        
        <div className="overflow-hidden">
          <AnimatedText
            delay={1000}
            className="inline-block"
            text={
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:bg-primary/90 hover:gap-3"
              >
                Learn More <ArrowDown className="h-4 w-4" />
              </a>
            }
          />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
