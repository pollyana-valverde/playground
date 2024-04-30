import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FundoWaveEnd from '../imagens/ondasFundoEnd.svg';
import '../css/layout/pageOnda.css';

export default function PageOnda() {

    return (
        <>
            <Container fluid>
                <Row>

                </Row>
            </Container>

            <img className="fundoWaveEnd" src={FundoWaveEnd} alt="" />
        </>
    )
}