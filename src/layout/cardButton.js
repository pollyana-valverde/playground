import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Notas from '../imagens/notas-musicais.png'
import '../css/layout/cardButton.css';

export default function CardButton() {
    return (
        <>
            <Container className="beneficioRecurso">
                <Row>
                    <Col className="espaço">
                        <h2>Músicas e podcasts que se ajustam aos seus gostos</h2>
                        <p className="margin-text">A música que você escuta é uma expressão da sua identidade. Nossa prioridade é dar a você a experiência musical e de podcasts mais personalizada possível, com recomendações escolhidas de forma única. É simples: quanto mais você ouvir e curtir, melhores serão suas recomendações.</p>

                        <div className="parent-wrapper">
                            <span className="close-btn glyphicon glyphicon-remove"></span>
                            <div className="subscribe-wrapper">
                                <h4>Suas emoções traduzidas em melodias!</h4>
                                <img className="imageNotas" src={Notas} />
                                <div className="submit-btn">Aperte o PLAY e curta o ritmo!</div>
                            </div>
                        </div>
                        <div className="hr-text">
                            <hr />
                            <span>O que há de novo</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}