"use client"

import { gsap } from 'gsap';
import Link from 'next/link'
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button, ButtonGroup, Container } from 'react-bootstrap'

// utils
import { fadeDivInDownAnimation } from '@/utils/animations/header';
import Logo from '@/public/logo.svg';

const Header = () => {
    const headerRef = useRef(null);
    const lastScrollY = useRef(0);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline({ paused: true });

        tl.to(headerRef.current, {
            y: '-100%', // Hide the header by moving it above the viewport
            duration: 0.5,
            ease: 'power2.inOut',
        });

        const scrollHandler = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
                // Scrolling down, hide the header
                tl.play();
            } else {
                // Scrolling up or at the top, show the header
                tl.reverse();
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <header ref={headerRef}>
            <Container>
                <Link href="/" className='logo'>
                    <Logo />
                </Link>
                <nav>
                    <ul>
                        <li><Link className={`link active`} href="/" >home</Link></li>
                        <li><Link className={`link`} href="/" >about</Link></li>
                        <li><Link className={`link`} href="/" >Pricing</Link></li>
                        <li><Link className={`link`} href="/" >Cart(0)</Link></li>
                    </ul>
                    <ButtonGroup>
                        <Button variant="secondary">Download App</Button>
                        <Button >Register</Button>
                    </ButtonGroup>
                </nav>
            </Container>
        </header>
    )
}

export default Header