import { Container, Row , Col} from "react-bootstrap"
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/linkedin.svg'
import navIcon2 from '../assets/img/twitter.svg'



export const Footer = ()=>{
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/hachimi-bouizegarene-887ab5259/"><img src={navIcon1}></img></a>
                            <a href="https://twitter.com/HachimlI_"><img src={navIcon2}></img></a>
                        </div>
                        <p>Copyright 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}