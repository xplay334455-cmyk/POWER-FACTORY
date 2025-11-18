import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  skew?: 'normal' | 'reverse' | 'none';
  noAnimation?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = "", 
  id, 
  skew = 'none',
  noAnimation = false
}) => {
  const skewClass = skew === 'normal' ? 'clip-diagonal' : skew === 'reverse' ? 'clip-diagonal-reverse' : '';
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when 15% of the element is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`relative w-full py-24 ${skewClass} ${className} ${!noAnimation ? 'reveal-on-scroll' : ''} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
};