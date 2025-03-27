
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-secondary/50 opacity-80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">SQA Engineer Portfolio</h3>
            <p className="text-muted-foreground">
              Ensuring software excellence through meticulous testing and quality-focused solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@qaportfolio.com" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" /> hassaneliraza@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground">
                  +923349575154
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border pt-6">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} QA Engineer Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all shadow-sm hover:shadow-md"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
