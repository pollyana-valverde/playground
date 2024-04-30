import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardRepetidasInfo from '../data/cardRepetidasInfo';

import '../css/layout/cardRepetidos.css';

export default function CardMaisRepetidos() {

    function getCardRepetidasInfo() {
        return CardRepetidasInfo.map((infoCardRepetidas, index) => {
            return (
                <Row key={index}>
                    <Col lg={3}>
                        <img src={infoCardRepetidas.imagemMusicaRepi} alt="" />
                    </Col>

                    <Col className="cardRepetidosText">
                        <h5>{infoCardRepetidas.tituloMusicaRepi}</h5>
                        <p>{infoCardRepetidas.artistaNomeRepi}</p>
                    </Col>
                </Row>
            )
        })
    }

    return (
        <Container className=" cardRepetidosBody">
            <div className="cardRepetidosContent">
                <h4>Mais Ouvidas nessa semana</h4>
                {getCardRepetidasInfo()}
            </div>
        </Container>
    )
}