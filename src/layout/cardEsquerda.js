import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mix from '../imagens/taylor-mix.png'
import Mix2 from '../imagens/bruno-mix.png'
import Mix3 from '../imagens/olivia-mix.png'
import Mix4 from '../imagens/harry-mix.png'
import '../css/layout/cardEsquerda.css';


export default function CardEsquerda(props) {
    return (
        <>
            <Container className="beneficioEsquerdaDireita">
                <Row>
                    <Col lg={6}>
                        <div className="conteinerEsquerda">
                            <div className="cardMix">
                                <div className="cardRecursos">
                                    <h2 className="card-title">Música</h2>
                                    <img className="image" src={Mix} />
                                </div>

                                <div className="cardRecursos">
                                    <h2 className="card-title">Podcasts</h2>
                                    <img className="image" src={Mix2} />
                                </div>

                                <div className="cardRecursos">
                                    <h2 className="card-title">Em alta</h2>
                                    <img className="image" src={Mix3} />
                                </div>

                                <div className="cardRecursos">
                                    <h2 className="card-title">Para você</h2>
                                    <img className="image" src={Mix4} />
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <h1>{props.tituloES}</h1>
                        <p>{props.subtituloES}
                        </p>
                        <button type="button">{props.btnTextES}</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}