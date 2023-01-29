import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap/esm";
import headerImg from '../assets/img/header-img.png';

export const Banner = ()=>{
    const [loopNum, setLoopNum] = useState (0);
    const toRotate = ["Web-Developper", "UX-Designer", "Web-Designer"];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(100);
    const period = 2000;


    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text]);

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0, text.length +1);
        setText (updatedText);

        if(isDeleting) {
            setDelta(delta/2);
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenue sur mon Portfolio</span>
                        <h1>Bonjour je suis Hachimi <span className="wrap">{text=== "" ? <span>&nbsp;</span> : text}</span></h1>
                        <p>Actuellement étudiant en deuxième année de BUT informatique à l'IUT de Paris , je suis à la recherche d'un stage d'une période de 8 à 12 semaine à partir du 3 avril 2023</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}