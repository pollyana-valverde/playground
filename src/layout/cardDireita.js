import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/layout/cardDireita.css';
import Letra1 from '../imagens/letra1.jpg';



export default function CardDireita(props) {
    return (
        <>
            <Container className="beneficioEsquerdaDireita">
                <Row>
                    <Col lg={6}>
                        <h1>{props.tituloDI}</h1>
                        <p>{props.subtituloDI}
                        </p>
                        <button type="button">{props.btnTextDI}</button>
                    </Col>
                    <Col lg={6}>
                        <div className="conteinerEsquerda">
                            <div className="phone">
                                <div className="content">


                                    <nav role="navigation" className="phoneNav">
                                        <div id="menuToggle">
                                            <img id="img1" className="image2" src={Letra1} />
                                            <input type="checkbox" />
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <ul id="menu">
                                                <li><a href="img1">Músicas</a></li>
                                                <li><a href="#">Podcasts</a></li>
                                                <li><a href="#">Letras</a></li>
                                                <li><a href="#">Tradução</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}