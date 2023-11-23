import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const heroImageAnime = (element: any) => {
    gsap.registerPlugin(ScrollTrigger);
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
};
