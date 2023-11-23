"use client"

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button, Card, Col, Container, Row } from "react-bootstrap";

// component
import GSAPAnimatedChild from "@/components/animation/GSAPAnimatedChild";
import GSAPAnimatedDiv from "@/components/animation/GSAPAnimatedDiv";

// hooks
import useIsomorphicLayoutEffect from '@/hooks/UseIsomorphicLayoutEffect';

const YourComponent = () => {
    useIsomorphicLayoutEffect(() => {

        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
        
            gsap.utils.toArray('.anime-sticky').forEach(({element}: any) => {
              ScrollTrigger.create({
                trigger: '.section-two',
                start: 'top top',
                endTrigger: '.section-two',
                end: 'bottom bottom',
                pin: element,
                pinSpacing: false,
              });
            });
        });

        return () => ctx.revert();

  }, []);

  return (

      <section className="section-two">
        <Container>
          <Row >
            <Col sm={6}>
              <GSAPAnimatedChild className="title-wrap anime-sticky">
                <h5>OUR JOURNEY</h5>
                <h2>It has been a long but incredible journey</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.</p>
                <Button>Download App</Button>
              </GSAPAnimatedChild>
            </Col>
            <Col sm={6}>
              <div className="card-list">
                <GSAPAnimatedDiv className="card">
                  <div className="title-wrap" >
                    <h5>2016</h5>
                    <h2>Deliver X was founded</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
                  </div>
                </GSAPAnimatedDiv>
                <GSAPAnimatedDiv className="card">
                  <div className="title-wrap" >
                    <h5>2018</h5>
                    <h2>Raised Series A at $50M valuation</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
                  </div>
                </GSAPAnimatedDiv>
                <GSAPAnimatedDiv className="card">
                  <div className="title-wrap" >
                    <h5>2019</h5>
                    <h2>Raised Series B at $600M valuation</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
                  </div>
                </GSAPAnimatedDiv>
                <GSAPAnimatedDiv className="card">
                  <div className="title-wrap" >
                    <h5>2022</h5>
                    <h2>Raised Series C at $3B valuation</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
                  </div>
                </GSAPAnimatedDiv>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default YourComponent;
