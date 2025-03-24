
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border pt-6">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} QA Engineer Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all"
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
