import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/layout/cardRepetidos.css';

export default function CardTempoMusica() {


    return (
        <Container className=" cardTempoBody">
            <div className="cardTempoContent">
                <Row>
                    <Col className="cardTempoText">
                        <p>Tempo de música hoje:</p>
                        <h5>9Hrs e 30mins</h5>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}