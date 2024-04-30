import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardMaisRepetidos from "./cardMaisRepetidos";
import CardDescobertas from "./cardDescobertas";
import CardTempoMusica from "./cardTempoMusica";

import '../css/layout/welcomeProfile.css';

export default function WelcomeProfile() {
    return (
        <Container className="welcomeConteiner">
            <Row>
                <Col>
                    <h1>Olá, Pollyana Valverde</h1>
                </Col>
            </Row>
            <Row className="welcomeConteinerCards">
                <Col lg={4}>
                    <CardMaisRepetidos />
                </Col>
                <Col lg={3}>
                    <CardTempoMusica />
                </Col>
                <Col lg={4}>
                    <CardDescobertas />
                </Col>
            </Row>
        </Container>
    )
}