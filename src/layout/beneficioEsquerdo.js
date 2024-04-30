import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function BeneficioEsquerdo(props) {
    return (
        <>
            <Container className="beneficioPart">
                <Row>
                    <Col lg={6}>
                        <img src={props.imagemES} alt="" />
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