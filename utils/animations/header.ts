import { gsap } from 'gsap';

export const fadeDivInDownAnimation = (element: any) => {
    gsap.from(element, {
      opacity: 0, 
      y: -50,
      duration: 1,
      ease: 'power2.inOut',
    });
  };