import Link from "next/link";
import React, { MouseEvent } from 'react';
import { Button, Spinner } from "react-bootstrap";

// component
import GSAPAnimatedDiv from '@/components/animation/GSAPAnimatedDiv';


const AppButton = ({
    href, 
    type,
    onClick,
    variant,
    children,
    animate = true,
    spinner = false,
    directionY = 200,
}: any) => {
    const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (href) {
            // Open the URL in a new tab when href is provided
            window.open(href, '_blank');
        }
        if (onClick) {
            onClick(event);
        }
    };


    return (
        <GSAPAnimatedDiv animate={animate} directionY={directionY} duration={1} >
            {href ? (
                <Link
                    href={href}
                    className={`btn btn-link btn-${variant ? variant : 'primary'}`}
                >
                    {children}
                </Link>
            ) : (
                <Button
                    disabled={spinner}
                    type={type ? type : 'button'}
                    variant={variant ? variant : 'primary'}
                    onClick={handleButtonClick}
                >
                    {spinner && <Spinner animation="border" variant="dark" />}
                    {children}

                </Button>
            )}

        </GSAPAnimatedDiv>
    )
}

export default AppButton