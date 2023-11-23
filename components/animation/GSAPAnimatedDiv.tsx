"use client"

import { gsap } from 'gsap';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// hooks
import useIsomorphicLayoutEffect from '@/hooks/UseIsomorphicLayoutEffect';

const GSAPAnimatedDiv = ({
    className,
    children,
    animateChildren,
    animate = true,
    directionY = 100,
    startPoint = '50px',
    duration = 0.5,
    animationStyle = 'default', // 'default' or 'fadeIn'
}: any) => {
    const animationRef = useRef(null);

    // Control animation based on whether it's a mobile device and the animate prop
    const shouldAnimate = animate;

    useIsomorphicLayoutEffect(() => {
        const element = animationRef.current;
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            if (shouldAnimate && element) {
                if (animationStyle === 'default') {
                    gsap.from(element, {
                        opacity: 0.3,
                        y: directionY,
                        duration: duration,
                        ease: 'power.out',
                        scrollTrigger: {
                            trigger: element,
                            start: `${startPoint} bottom`,
                            end: 'bottom center',
                            toggleActions: 'play none none none',
                        },
                        onComplete: () => {
                            // Reset the animation when it completes
                            gsap.set(element, { clearProps: 'all' });
                        },
                    });
                } else if (animationStyle === 'fadeIn') {
                    gsap.from(element, {
                        opacity: 0,
                        duration: duration,
                        ease: 'power.out',
                        scrollTrigger: {
                            trigger: element,
                            start: `${startPoint} bottom`,
                            end: 'bottom center',
                            toggleActions: 'play none none none',
                        },
                        onComplete: () => {
                            // Reset the animation when it completes
                            gsap.set(element, { clearProps: 'all' });
                        },
                    });
                }
            }
        });
        return () => ctx.revert();
    }, [shouldAnimate, animationStyle]);

    return (
        <div ref={animationRef} className={`__div_animation ${className}`}>
            {children}
            {animateChildren &&
                animateChildren.map((child: any, index: number) => (
                    <div key={index} className="animated-child">
                        {child}
                    </div>
                ))}
        </div>
    );
};

export default GSAPAnimatedDiv;
