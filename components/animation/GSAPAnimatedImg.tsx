"use client"

import { gsap } from 'gsap';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// hooks
import useIsomorphicLayoutEffect from '@/hooks/UseIsomorphicLayoutEffect';

const GSAPAnimatedImg = ({
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


  useIsomorphicLayoutEffect(() => {
    if (!shouldAnimate) {
      return; // No need to set up animation if it shouldn't animate.
    }

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const element = animationRef.current;

      if (element) {
        gsap.from(element, {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: 'power3.inOut',
            scrollTrigger: {
                trigger: element,
                start: 'bottom bottom',
                end: 'bottom center',
                toggleActions: 'play none none none',
            },
        });
      }
    });

    return () => ctx.revert();
  }, [shouldAnimate, directionY, duration]);

  return <Element ref={animationRef} className={className}>{children}</Element>;
};

export default GSAPAnimatedImg;