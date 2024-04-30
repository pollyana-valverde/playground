import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SugestoesMusicasInfo from "../data/sugestoesMusicasInfo";

import '../css/layout/sugestoesMusica.css';

export default function SugestoesMusica() {

    function getSugestoesMusicaInfo1() {
        return SugestoesMusicasInfo.map((infoSugestoesMusica1, index) => {
            return (
                <Col key={index} lg={2}>
                    <img src={infoSugestoesMusica1.sugeMusicaImg1} alt="" />
                    <div>{infoSugestoesMusica1.sugeMusicaIcons1}</div>
                </Col>
            )
        })
    }


    return (
        <Container>
            <Row className="sugestaoCorpo">
                <h5>Descubra</h5>
                {getSugestoesMusicaInfo1()}
            </Row>
        </Container>
    )
}