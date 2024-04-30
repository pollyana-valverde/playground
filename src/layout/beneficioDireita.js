import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function BeneficioDireita(props) {
    return (
        <>
            <Container className="beneficioPart">
                <Row>
                    <Col lg={6}>
                        <h1>{props.tituloDI}</h1>
                        <p>{props.subtituloDI}
                        </p>
                        <button type="button">{props.btnTextDI}</button>
                    </Col>
                    <Col lg={6}>
                        <img src={props.imagemDI} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}