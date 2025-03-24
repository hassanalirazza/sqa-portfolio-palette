
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="relative overflow-hidden inline-block">
      <div
        className={cn(
          "transform transition-transform duration-700 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
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
