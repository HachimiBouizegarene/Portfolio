import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/linkedin.svg'
import navIcon2 from '../assets/img/twitter.svg'

export const NavBar = ()=>{
    const [activeLink, setActiveLink] = useState("home");

    const onUpdateActiveLink = (link)=>{
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt='LOGO'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Accueil</Nav.Link>
              <Nav.Link href="#cv" className={activeLink === 'cv' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('cv')}>Competences</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projets' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('projets')}>Projets</Nav.Link>
            </Nav>
            <span className='navbar-text'> 
                <div className='social-icon'>
                    <a target="_blank" href='https://www.linkedin.com/in/hachimi-bouizegarene-887ab5259/'><img src={navIcon1} alt=''/></a>
                    <a target="_blank" href='https://twitter.com/HachimlI_'><img src={navIcon2} alt=''/></a>
                </div>

            <button onClick={()=>{console.log('connect')}}>
                <a href="mailto:hachimi.bouizegarene@outlook.fr"><span>Me contacter</span></a>
            </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}