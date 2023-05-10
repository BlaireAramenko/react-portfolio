import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg"
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Web Developer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Weclome to my Portfolio</span>
            <h1>{`Hi! I'm Blaire `}
            <br/>
            <span className="wrap">{text}</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit quam vitae augue porta, at aliquam magna bibendum. Mauris venenatis tellus at felis cursus ullamcorper. Nulla facilisi. Praesent ullamcorper, arcu nec malesuada aliquet, elit ligula tincidunt leo, id tempor felis nisi vel lacus. Vestibulum sed dui eu tellus malesuada posuere.</p>
            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /> </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={HeaderImg} alt="Header Img" />

            </Col>
        </Row>
      </Container>


    </section>
  )
}