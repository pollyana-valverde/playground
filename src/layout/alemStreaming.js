import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/layout/alemStreaming.css';

export default function AlemStreaming() {
    return (
        <Container>
            <Row className="streamBody">
                <h5>Vá além do streaming</h5>
                <Col className="streamContent stream1" lg={3}>
                    <h4>Quizzes</h4>
                </Col>
                <Col className="streamContent stream2" lg={3}>
                    <h4>Shows</h4>
                </Col>
                <Col className="streamContent stream3" lg={3}>
                    <h4>Podcasts</h4>
                </Col>
                <Col className="streamContent stream4" lg={3}>
                    <h4>Rádios</h4>
                </Col>
            </Row>
        </Container>
    )
}