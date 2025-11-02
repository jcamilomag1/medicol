import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const StatCounter = ({ 
  value, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className 
}: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const startTime = Date.now();
      const endValue = value;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * endValue);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};
