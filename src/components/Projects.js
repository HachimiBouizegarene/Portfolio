import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import refonteSite from '../assets/img/refonteSite.PNG'
import java from "../assets/img/java.jpg"
import tetris from "../assets/img/tetris.PNG"
import jeuDeTir from "../assets/img/jeuDeTir.PNG"
import portfolio from "../assets/img/portfolio.PNG"
import hex from "../assets/img/hex.jpg"
import soccerSearch from "../assets/img/soccerSearch.PNG"

class Project extends React.Component{

    constructor (props){
        super(props);
        }

    render() {

       return <div className="project-bx">   
            <div className="project-titre">
                <h4>{this.props.Title}</h4>
            </div>
            <div className="project-img">
                <img src={this.props.img}></img>
            </div>
            <div className="project-description">
                <p>{this.props.Description}</p>
            </div>
            {this.props.site ?  <div className="project-button">
                { <Button target="_blank" href={this.props.site}>Acceder au site</Button>}
            </div> : <div className='vide'></div>}
            {this.props.lien ?  <div className="project-button">
                { <Button target="_blank" href={this.props.lien}>Acceder au dépôt Git</Button>}
            </div> : ""}
            

       </div>
  
       
    }
}


export const Projects = ()=>{


    const projects = [
        {Title : "Jeu de carte 6-qui-prend",
         Description : "Dans le cadre d'un projet académique, j'ai réalisé ce projet, qui consiste à réaliser un jeu de carte nommée 6-qui-prend. Totalement réalisé en java sur le logiciel Éclipse, le programme permet à deux joueurs de s'affronter via la console. Ce projet m'a permis de voir la programmation sous un nouvel angle. et ça m'a aussi appris à mieux soigner mon code.",
         img : java,
         lien: "https://github.com/HachimiBouizegarene/6-qui-prend",
        type : 'application'},
         {Title : "Refonte Site web",
         Description : "Dans le cadre d'un projet académique, j'ai réalisé ce projet avec l'aide de deux de mes camarades. Le projet consiste a totalement restructurer un site qui nous a été soumis, en y ajoutant des fonctionnalités utiles et en recréant un design plus moderne. Grâce à ce projet, j'ai découvert la technologie NodeJs et j'ai appris à mieux maitriser le langage JavaScript.",
         img : refonteSite,
         type : 'web',
        lien: "https://github.com/HachimiBouizegarene/SiteGuadeloupe"},
        {Title : "Portfolio",
         Description : "C'est le site sur lequel vous vous trouvez actuellement. Ce site a ete realisee avec react et react bootstrap pour le CSS. Grâce à ce projet je sais maintenant creer une application react d'A a Z et maitrise mieux le CSS en utilisant Bootstrap, mais surtout, ce que j'ai appris en réalisant ce site c'est comment le publier, je pensais que ce serait très difficile mais c'est la partie la plus simple.",
         img : portfolio,
         type : 'web',
        lien: "https://github.com/HachimiBouizegarene/Portfolio"},
        {Title : "Hex",
         Description : "Dans le cadre d'un projet académique, j'ai réalisé ce projet en collaboration avec des camarades de classe. C'est une reproduction du jeu Hex en Java. Le jeu se joue sur la console et permet à deux joueurs de s'affronter, ou alors d'affronter une IA ou même faire une partie IA vs IA. Ce projet est fait en respectant les principes SOLID de java, même si ce n'est pas parfait, ma manière de coder s'est nettement améliorée",
         img : hex,
         type : 'application',
        lien: "https://github.com/HachimiBouizegarene/HexGame"},
        {Title : "SoccerSearch",
         Description : "Dans le cadre d'un projet académique , en collaboration avec des camarades de classe, nous avons réalisé ce site qui permet à des clubs de football d'inscrire leur club et ainsi permettre à des utilisateurs de candidater pout intégrer le club. pour ce projet nous avons utilisé php pour gérer base de données associée, php et jQuery(ajax) pour les formulaires, enfin nous avons utilisé l'API leaflet pour afficher la localisation des clubs sur une carte.",
         img : soccerSearch,
         type : 'web',
        lien: "https://github.com/HachimiBouizegarene/SoccerSearch",
        site: "https://soccersearch.alwaysdata.net/"},
    ]



    return (
        <section className='project' id='project'>
            <Container>
                <Row className='project-row'>
                    <Col>
                        <h2>Projets</h2>
                        <h4>Liste de mes projets personnels</h4>
                        <Tab.Container id="project-tabs"   defaultActiveKey="Tous">
                            <Nav variant="pills" defaultActiveKey="/home" justify>
                                <Nav.Item>
                                    <Nav.Link eventKey="Tous">Tous</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Web">Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Applications">Applications</Nav.Link>
                                </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="Tous">
                                            <Row xs={1} md={2} xl={3} className="g-2 d-flex justify-content-around">
                                            {projects.map((project, index)=>(
                                                <Project site={project['site']} lien={project['lien']} Title={project['Title']} Description={project['Description']} img={project['img']}></Project> 
                                            ))}
                                             </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Web">
                                        <Row xs={1} md={2} xl={3} className="g-4 d-flex justify-content-around">
                                        {projects.map((project, index)=>(
                                            project['type']=='web'?
                                            <Project site={project['site']} lien={project['lien']} Title={project['Title']} Description={project['Description']} img={project['img']}></Project>: ""
                                        ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Applications">
                                        <Row xs={1} md={2} xl={3} className="g-4 d-flex justify-content-around">
                                        {projects.map((project, index)=>(
                                            project['type']=='application'?
                                            <Project site={project['site']} lien={project['lien']} Title={project['Title']} Description={project['Description']} img={project['img']}></Project>: ""
                                        ))}
                                    </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}