"use client"

import { gsap } from 'gsap';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// hooks
import useIsomorphicLayoutEffect from '@/hooks/UseIsomorphicLayoutEffect';

const GSAPAnimatedText = ({
  className,
  children,
  type,
  animate = true,
  duration = 1,
  directionY = 100,
}: any) => {
  const Element = type || 'div';
  const animationRef = useRef<HTMLElement | null>(null);

  // Control animation based on whether it's a mobile device
  const shouldAnimate = animate;

  const animateChildren = useRef<Array<HTMLElement | Element>>([]);

  useIsomorphicLayoutEffect(() => {
    if (!shouldAnimate) {
      return; // No need to set up animation if it shouldn't animate.
    }
    const childElements = Array.from(animationRef.current?.children || []);
    animateChildren.current = childElements;

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const element = animationRef.current?.children;
      const childElements = animateChildren.current;

      if (element && childElements.length > 0) {
        gsap.from(childElements, {
          opacity: 0,
          y: directionY,
          duration: duration,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: 'bottom bottom',
            end: 'bottom center',
            toggleActions: 'play none none none',
          },
          onComplete: () => {
            gsap.set(childElements, { clearProps: 'all' });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [shouldAnimate, directionY, duration]);

  return <Element ref={animationRef} className={className}>{children}</Element>;
};

export default GSAPAnimatedText;