import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/layout/cardGaleria.css';


export default function cardGaleria() {
    return (
        <>
            <Container className="beneficioRecurso">
                <Row>
                    <Col className="espaço">
                        <h2 className="espaco-text-title">Playlists colaborativas instantâneas :)</h2>
                        <p className="margin-text">Você tem amigos que usam o Playground? O Shaker reúne as músicas favoritas dos seus amigos junto das suas em um só lugar!</p>

                        <div class="containerGaleria">
                            <div class="gallery-wrap">
                                <div class="item item-1"></div>
                                <div class="item item-2"></div>
                                <div class="item item-3"></div>
                                <div class="item item-4"></div>
                                <div class="item item-5"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


