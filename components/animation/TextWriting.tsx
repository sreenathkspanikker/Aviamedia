"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger); 

const TextWriting = ({ children, className }: any) => {
    const textRef = useRef<HTMLSpanElement | null>(null); 
    const [animationStarted, setAnimationStarted] = useState(false);
    const [textArray, setTextArray] = useState<string[]>([]);

  useEffect(() => {
    setTextArray(children.split(''));
  }, [children]);

  useLayoutEffect(() => {
    const sectionTrigger = document.querySelector('.section-trigger'); 
    let ctx = gsap.context(() => {
        if (textRef.current && sectionTrigger) {
            gsap.to(textRef.current, {
              opacity: 1,
              scrollTrigger: {
                trigger: sectionTrigger,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                onEnter: () => {
                  if (!animationStarted) {
                    setAnimationStarted(true);
                    startAnimation();
                  }
                },
                onLeave: () => {
                  if (animationStarted) {
                    setAnimationStarted(false);
                  }
                },
              },
            });


          }
    });
    return () => ctx.revert();
  }, [textArray]);

  const startAnimation = () => {
    const tl = gsap.timeline();

    textArray.forEach((char, index) => {
      textRef.current?.children[index] && tl.fromTo(
        textRef.current.children[index],
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        index * 0.1
      );
    });

  };

  return (
    <span ref={textRef} className={`section-trigger ${className}`} style={{ opacity: 0 }}>
      {textArray.map((char, index) => (
        <span key={index} style={{ opacity: 0 }}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default TextWriting;
