
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "blur-in" | "scale-in";
  delay?: number;
  threshold?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.2,
  duration = 700,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-10";
        case "fade-down":
          return "opacity-0 -translate-y-10";
        case "fade-left":
          return "opacity-0 translate-x-10";
        case "fade-right":
          return "opacity-0 -translate-x-10";
        case "blur-in":
          return "opacity-0 blur-md";
        case "scale-in":
          return "opacity-0 scale-95";
        case "fade-in":
        default:
          return "opacity-0";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 blur-none scale-100";
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        getAnimationClasses(),
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
