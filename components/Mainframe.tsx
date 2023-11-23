"use client"

import { gsap } from 'gsap';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { useState, useLayoutEffect, useRef } from "react";

// component
import GSAPAnimatedChild from "@/components/animation/GSAPAnimatedChild";

// utils
import { heroImageAnime } from '@/utils/animations/mianframe';

// images
import ImgHero from '@/public/img-hero.png';

const Mainframe = () => {
    const imgRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (imgRef) {
                const imageAnimeRef = imgRef.current;

                if (imageAnimeRef) {
                    heroImageAnime(imageAnimeRef);
                }
            }
        });
        return () => ctx.revert();
    }, [imgRef]);

    return (
        <div className='main-frame'>
            <Container>
                <div className='top'>
                    <div className='__mainframe_content'>
                        <h5>ABOUT DELIVER X</h5>
                        <h2 >
                            We are here to help amazing restaurants get great customers
                        </h2>
                        <p>
                            At morbi adipiscing sit sed consectetur senectus Dignissim sed amet tincidunt vitae ultricies ultrices amet fermentum amet neque et id sed lacinia massa pretium aliquam libero et.
                        </p>
                    </div>
                    <div className='hero-wrap'>
                        <Image
                            priority
                            alt="hero"
                            src={ImgHero}
                            ref={imgRef}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>
                <div className="counter">
                    <GSAPAnimatedChild type="ul">
                        <li><span>10M<b>+</b></span> <em>Happy customers</em></li>
                        <li><span>500k<b>+</b></span> <em>Restaurants available</em></li>
                        <li><span>30M<b>+</b></span> <em>Successful deliveries</em></li>
                        <li><span>99.9<b>%</b></span> <em>Customer satisfaction</em></li>
                    </GSAPAnimatedChild>
                </div>

            </Container>
        </div>
    );
};

export default Mainframe;