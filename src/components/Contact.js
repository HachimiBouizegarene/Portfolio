
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg'


export const Contact = ()=>{

    const formInitialDetails = {
        firstName : '',
        lastName: '',
        email: '',
        phone: '', 
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Envoyer');
    const [statut, setStatut] = useState({});


    const onFormUpdate = (category, value)=>{
        let updatedFormDetails = {...formDetails};
        updatedFormDetails[category] = value;
        setFormDetails(updatedFormDetails);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        let updatedStatut = {...statut};
        updatedStatut['message'] = "Le service ne fonctionne pas vraiment !";
        updatedStatut['success'] = false;
        setStatut(updatedStatut);
    }

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg}></img>
                    </Col>
                    <Col md={6}>
                        <h2>Contactez moi !</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Prenom" onChange={(e)=>{onFormUpdate('firstName', e.target.value)}}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Nom" onChange={(e)=>{onFormUpdate('lastName', e.target.value)}}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=>{onFormUpdate('email', e.target.value)}}></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Telephone" onChange={(e)=>{onFormUpdate('phone', e.target.value)}}></input>
                                </Col>
                                <Col sm={12}>
                                    <textarea rows={6} value={formDetails.message} placeholder="Message" onChange={(e)=>{onFormUpdate('message', e.target.value)}}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                <Col>
                                    <p className={statut.success===false ? "danger" : "success"}>{statut.message}</p>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}