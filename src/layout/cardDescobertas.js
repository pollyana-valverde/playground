import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardDescobertasInfo from '../data/cardDescobertasInfo';

import '../css/layout/cardRepetidos.css';

export default function CardDescobertas() {
    function getCardDescobertasInfo() {
        return CardDescobertasInfo.map((infoCardDescobertas, index) => {
            return (
                <Row key={index}>
                <Col lg={3}>
                    <img src={infoCardDescobertas.imagemMusicaRepi} alt="" />
                </Col>

                <Col className="cardRepetidosText">
                    <h5>{infoCardDescobertas.tituloMusicaRepi}</h5>
                    <p>{infoCardDescobertas.artistaNomeRepi}</p>
                </Col>
        </Row>
            )
        })
    }

    return (
        <Container className="cardDescobertasBody">
            <div className="cardRepetidosContent">
                <h4>Descobertas dessa semana</h4>
                {getCardDescobertasInfo()}
            </div>
        </Container>
    )
}