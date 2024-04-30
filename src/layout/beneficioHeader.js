import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from "react-router-dom";


export default function BeneficioHeader() {
    return (
        <>
            <Container className="beneficioHeaderInicial">
                <Row>
                    <Col >
                    <h1>Por que escolher Deezer?</h1>
    <p> Ouça milhões de músicas, podcasts e canais de rádio. Acesse seu aplicativo de música em todos os seus dispositivos. Descubra recursos inclusos básicos e exclusivos.</p>
    <Link to="/recursos" ><button type="button">Descubra todos os nossos recursos</button></Link>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}