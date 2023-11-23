"use client"

import { gsap } from 'gsap';
import React, { useRef } from 'react';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// hooks
import useIsomorphicLayoutEffect from '@/hooks/UseIsomorphicLayoutEffect';

const GSAPAnimatedChild = ({
    className,
    children,
    type,
    animate = true,
    duration = 1,
    directionY = 100,
}: any) => {
    const Element = type || 'div';
    const animationRef = useRef<HTMLElement | null>(null);

    const shouldAnimate = animate;

    useIsomorphicLayoutEffect(() => {
        if (!shouldAnimate) {
            return;
        }

        const childElements = Array.from(animationRef.current?.children || []);

        let ctx = gsap.context(() => {

            gsap.registerPlugin(ScrollTrigger);

            gsap.from(childElements, {
                opacity: 0,
                y: directionY,
                duration: duration,
                ease: 'power3.inOut',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: childElements,
                    start: 'bottom bottom',
                    end: 'bottom center',
                    toggleActions: 'play none none none',
                },
            });
        });

        return () => ctx.revert();

    }, [shouldAnimate, duration]);

    return <Element ref={animationRef} className={`animated-child ${className}`}>{children}</Element>;
};

export default GSAPAnimatedChild;
