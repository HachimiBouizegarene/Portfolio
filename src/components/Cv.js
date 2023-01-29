import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';
import "react-multi-carousel/lib/styles.css";
import p100 from '../assets/img/100.png'
import p70 from '../assets/img/70.png'
import p80 from '../assets/img/80.png'
import p60 from '../assets/img/60.png'
import p90 from '../assets/img/90.png'

class Item extends React.Component{
    constructor(props){
        super (props);
    }
    render(){
        return  <div className="item">
             <img src={this.props.img} alt="image"/>
            <h5>{this.props.text}</h5>
            </div>
    }
}

export const Skills = ()=>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (

        <section className="skill" id="cv">
            <Container>
                <Row>
                <div className="skill-bx">
                    <Col>
                        <h2>Compétences</h2>
                        <p>Ceci est une note sur 100 que je donne à mon niveau sur chaque langage de programmation, 100% signifie que je maitrise parfaitement !</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <Item img={p100} text ={"HTML, CSS, JavaScript"}/>
                        <Item img={p90} text ={"PHP, SQL"}/>
                        <Item img={p80} text ={"Java"}/>
                        <Item img={p70} text ={"C, C++, C#"}/>
                        <Item img={p60} text ={"NodeJs, React"}/>
                    </Carousel>
                    </Col>
                    <Col>
                    <Button variant="info">Telecharger CV</Button>{' '}
                    </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}