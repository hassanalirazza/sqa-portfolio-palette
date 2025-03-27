
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  animation?: "fade" | "slide" | "scale" | "none";
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  once = true,
  animation = "fade",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) {
      return "opacity-0";
    }
    
    switch (animation) {
      case "fade":
        return "opacity-100 translate-y-0";
      case "slide":
        return "opacity-100 translate-x-0";
      case "scale":
        return "opacity-100 scale-100";
      case "none":
        return "opacity-100";
      default:
        return "opacity-100 translate-y-0";
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case "fade":
        return "translate-y-full opacity-0";
      case "slide":
        return "translate-x-full opacity-0";
      case "scale":
        return "scale-95 opacity-0";
      case "none":
        return "opacity-0";
      default:
        return "translate-y-full opacity-0";
    }
  };

  return (
    <div className="relative overflow-hidden inline-block">
      <div
        className={cn(
          "transform transition-all duration-700 ease-out",
          isVisible ? getAnimationClass() : getInitialClass(),
          className
        )}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default AnimatedText;
