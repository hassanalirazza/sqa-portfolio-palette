
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled
          ? "bg-background/80 dark:bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-display font-semibold tracking-tight group"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 group-hover:from-primary/70 group-hover:to-primary transition-all duration-300">QA Portfolio</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors px-1 py-2 relative",
                activeSection === item.href.substring(1) 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground",
                "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all",
                activeSection === item.href.substring(1)
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full after:origin-bottom-right hover:after:origin-bottom-left"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex-col items-center pt-24 px-8",
          "md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "flex translate-y-0 bg-background" : "translate-y-full hidden"
        )}
      >
        <nav className="w-full flex flex-col space-y-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium tracking-wide px-4 py-2 relative",
                activeSection === item.href.substring(1) 
                  ? "text-primary" 
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
