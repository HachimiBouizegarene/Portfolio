import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import refonteSite from '../assets/img/refonteSite.PNG'
import java from "../assets/img/java.jpg"
import tetris from "../assets/img/tetris.PNG"
import jeuDeTir from "../assets/img/jeuDeTir.PNG"


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
            <div className="project-button">
                {this.props.lien ? <Button target="_blank" href={this.props.lien}>Acceder au projet</Button> : <Button variant="danger">Pas encore </Button>}
            </div>
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
         {Title : "Tetrice (Console)",
         Description : "Celui-ci est un projet personnel, je l'ai réalisé avec l'aide de vidéos YouTube. C'est un jeu réalisé totalement en C++ sur le logiciel Visual Studio qui tient sur un seul fichier, mais qui imite très bien le jeu Tetris. Ce projet m'a permis d'apprendre certaines notions mathématiques (géométrie).Mais aussi à mieux maitriser les bases du langage C++, qui je pense sont indispensable pour un développeur.",
         img : tetris,
         type : 'application'},
         {Title : "Jeu de tir",
         Description : "Celui-ci est aussi un projet personnel, je l'ai réalisé avec l'aide de vidéos YouTube. C'est un jeu réalisé sur le logiciel Unreal Engine.J'ai utilisé un outil intégré au logiciel nommé BluePrint, pour le décrire rapidement, c'est de programmation visuelle basée sur des nœuds.Ce projet m'a permis de passer de Unity à Unreal Engine et je pense c'est une bonne décision si je veux travailler dans le milieu du jeux vidéo",
         img : jeuDeTir,
         type : 'application'}
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
                                                <Project lien={project['lien']} Title={project['Title']} Description={project['Description']} img={project['img']}></Project> 
                                            ))}
                                             </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Web">
                                        <Row xs={1} md={2} xl={3} className="g-4 d-flex justify-content-around">
                                        {projects.map((project, index)=>(
                                            project['type']=='web'?
                                            <Project lien={project['lien']} Title={project['Title']} Description={project['Description']} img={project['img']}></Project>: ""
                                        ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Applications">
                                        <Row xs={1} md={2} xl={3} className="g-4 d-flex justify-content-around">
                                        {projects.map((project, index)=>(
                                            project['type']=='application'?
                                            <Project lien={project['lien']} Title={project['Title']} Description={project['Description']} img={project['img']}></Project>: ""
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