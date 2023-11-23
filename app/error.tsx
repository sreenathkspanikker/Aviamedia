'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Container } from 'react-bootstrap'

// component
import AppButton from '@/components/AppButton'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className='page-error'>
            <Container>
                <div className='__content'>
                    <h2>Something went wrong!</h2>
                    <AppButton onClick={() => reset()} directionY={30}>Try again</AppButton>
                </div>
            </Container>
        </main>
    )
}