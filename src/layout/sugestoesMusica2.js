import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SugestoesMusicasInfo from "../data/sugestoesMusicasInfo";

import '../css/layout/sugestoesMusica.css';

export default function SugestoesMusica2() {

function getSugestoesMusicaInfo2 (){
    return SugestoesMusicasInfo.map((infoSugestoesMusica2, index) => {
        return (
            <Col key={index} lg={2}>
                    <img src={infoSugestoesMusica2.sugeMusicaImg2} alt="" />
                    <div>{infoSugestoesMusica2.sugeMusicaIcons2}</div>
                </Col>
        )
    })
}


    return (
        <Container>
            <Row className="sugestaoCorpo2">
                <h5>Playlists que você vai amar</h5>
            {getSugestoesMusicaInfo2()}
            </Row>
        </Container>
    )
}