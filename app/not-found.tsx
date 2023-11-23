import { Container } from 'react-bootstrap'

// component
import AppButton from '@/components/AppButton';

export default function NotFound() {
    
    return (
        <main className='not-found' >
            <Container>
                <div className='__content'>
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <AppButton href="/" directionY={30}>Return Home</AppButton>
                </div>
            </Container>
        </main>
    )
}