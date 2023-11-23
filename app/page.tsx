import Image from "next/image";
import { Col, Container, Row, Card, ButtonGroup, Button } from "react-bootstrap";

// component
import SectionTwo from "@/components/SectionTwo";

// animation
import GSAPAnimatedImg from "@/components/animation/GSAPAnimatedImg";
import GSAPAnimatedChild from "@/components/animation/GSAPAnimatedChild";

// assets
import Img_1 from "@/public/img-1.jpeg";
import Img_2 from "@/public/img-2.jpeg";
import Ic_1 from "@/public/ic-1.svg";
import Ic_2 from "@/public/ic-2.svg";
import Ic_3 from "@/public/ic-3.svg";
import Ic_4 from "@/public/ic-4.svg";
import Logo from "@/public/logo.svg";
import Arrow from "@/public/ic-arrow.svg";
import Apple from "@/public/ic-apple.svg";
import Android from "@/public/ic-android.svg";

export default function Page() {
  return (
    <main className="page-home">
      <section className="section-one">
        <Container>
          <Row>
            <Col sm={6}>
              <GSAPAnimatedImg type="figure" directionY={-200}>
                <Image
                  src={Img_1}
                  alt="img"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </GSAPAnimatedImg>
            </Col>
            <Col sm={6}>
              <GSAPAnimatedChild className="title-wrap">
                <h5>ABOUT US</h5>
                <h2>Our company started back in 2016</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
              </GSAPAnimatedChild>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <GSAPAnimatedChild className="title-wrap">
                <h5>OUR MISSION</h5>
                <h2>Our mission is to disrupt the food industry</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
              </GSAPAnimatedChild>
            </Col>
            <Col sm={6}>
              <GSAPAnimatedImg type="figure" directionY={200}>
                <Image
                  src={Img_2}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  alt="img" />
              </GSAPAnimatedImg>
            </Col>
          </Row>
        </Container>
      </section>

      <SectionTwo />

      <section className="section-three">
        <Container>
          <GSAPAnimatedChild className="title-wrap">
            <h5>OUR PARTNERS</h5>
            <h2>We don’t walk alone, Deliver X works thanks to our partners</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.</p>
          </GSAPAnimatedChild>
          <Row>
            <Col sm={4}>
              <GSAPAnimatedChild>
                <Ic_1 />
                <h3>Customers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
              </GSAPAnimatedChild>
            </Col>
            <Col sm={4}>
              <GSAPAnimatedChild>
                <Ic_2 />
                <h3>Customers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
              </GSAPAnimatedChild>
            </Col>
            <Col sm={4}>
              <GSAPAnimatedChild>
                <Ic_3 />
                <h3>Customers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
              </GSAPAnimatedChild>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-four">
        <Container>
          <GSAPAnimatedChild className="title-wrap">
            <h5>PRESS & NEWS</h5>
            <h2>See what the press says about Deliver X</h2>
          </GSAPAnimatedChild>
          <div className="box">
            <Card>
              <Ic_4 />
              <h3>Deliver X raises $26M in series B funding </h3>
              <p><a>Read More <Arrow /></a> <span>January, 23, 2023</span></p>
            </Card>
            <Card>
              <Ic_4 />
              <h3>Deliver X raises $26M in series B funding </h3>
              <p><a>Read More <Arrow /></a> <span>January, 23, 2023</span></p>
            </Card>
            <Card>
              <Ic_4 />
              <h3>Deliver X raises $26M in series B funding </h3>
              <p><a>Read More <Arrow /></a> <span>January, 23, 2023</span></p>
            </Card>
            <Card>
              <Ic_4 />
              <h3>Deliver X raises $26M in series B funding </h3>
              <p><a>Read More <Arrow /></a> <span>January, 23, 2023</span></p>
            </Card>
          </div>
        </Container>
      </section>


      <section className="section-five">
        <Container>
          <div className="_app-download">
            <div className="__content">
              <Logo />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.
              </p>
            </div>
            <ButtonGroup>
              <Button><Apple /> Download IOS</Button>
              <Button><Android /> Download Android</Button>
            </ButtonGroup>
          </div>
        </Container>
      </section>
    </main>
  )
}
