// animationUtil.js
import { gsap } from 'gsap';

export const heroImageAnime = (element: any) => {
  gsap.from(element, {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: 'power3.inOut',
    onComplete: () => {
      const parentElement = document.querySelector('.__mainframe_content') as HTMLElement;
      if (parentElement) {
        parentElement.style.visibility = 'visible';
        slideUpText(parentElement);
      }
    },
  });
};

export const slideUpText = (element: any) => {
  gsap.from(element?.children, {
    opacity: 0,
    y: '100%',
    duration: 1,
    ease: 'power3.inOut',
    stagger: 0.2,
  });
};