import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleDarkMode from "./toggleDarkMode";

import Perfil from '../imagens/perfilPhoto.jpg';
// import OndasModes from '../imagens/ondasFAQ.png'

import '../css/layout/profileSidebar.css';

export default function ProfileSidebar() {
    return (
        <Container className="profileSidebarBody">
            <div className="profielSidebarContent">
                <Row>
                    <Col className="profileNameImg">
                        <img className="imagemPerfil" src={Perfil} alt="" />
                        <h4>Pollyana Valverde</h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <p>Configurações da conta</p>
                        <p>Suporte</p>
                    </Col>
                    <Col lg={6}>

                        <p>Assinatura</p>
                        <p>Aparelhos conectados</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="changeModeBody">
                        <h5>Modo noturno</h5>
                        <ToggleDarkMode />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}