import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/layout/inicioPage.css';
import { Link } from "react-router-dom";



export default function InicioPage() {
    return (
        <>
            <Container className="beneficioRecurso">
                <Row>
                    <Col>
                        <h1 className="titleInicio">Uma experiência única - Só no <span className="color">Play</span><span className="color2">ground!</span></h1>
                        <p>Com todos os nossos recursos, aproveite uma experiência musical mais do que personalizada.</p>
                        <Link to="/cadastro"><button type="button" className="button">Cadastre-se Gratuitamente! </button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}