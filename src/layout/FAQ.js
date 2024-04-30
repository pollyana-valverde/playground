import Accordion from 'react-bootstrap/Accordion';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FaqInfo from '../data/FaqInfo';

import '../css/layout/FAQ.css';

export default function FAQ() {

    function getFaqInfo() {
        return FaqInfo.map((infoFAQ, index) => {
            return (
                <Accordion.Item key={index} eventKey={infoFAQ.keyEvent} className='faqContent'>
                    <Accordion.Header >{infoFAQ.pergunta}</Accordion.Header>
                    <Accordion.Body>
                        {infoFAQ.respota}
                    </Accordion.Body>
                </Accordion.Item>
            )
        })
    }
    return (

        <Container >
            <Row>
                <Col className='faqHeader'>
                    <h1> Perguntas frequentes</h1>
                </Col>
            </Row>
            <Row className='faqBody'>
                <Col lg={10} >
                    <Accordion defaultActiveKey="0" >

                        {getFaqInfo()}
                    </Accordion>
                </Col>
                <div className='bgUpFooter'></div>

            </Row>
        </Container>

    );
}

