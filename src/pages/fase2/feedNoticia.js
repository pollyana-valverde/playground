import React from "react";
import SideBar from "../../layout/sidebar";
import MusicPlayer from "../../layout/BlocoMusica";
import MusicPlayerCol from "../../layout/MusicPlayerCol";
import MgTopFooter from "../../layout/mgTopFooter";

import NovidadesSlider from "../../layout/novidadesSlider";
import NoticiaPrincipal from '../../imagens/banner-artista.webp'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//css
import '../../css/layout/feedNoticia.css';

export default function FeedNoticia() {
    return (
        <div className="corpoInicialMusica">
            <SideBar />

            <div >

                <Container fluid className="contentInicialMusica">
                    <Row>
                        <Col lg={9}>
                            <div className="feedNoticiaTitulo">
                                <h2>O que está acontencendo?</h2>
                                <p>As notícias mais recentes do mundo da música</p>
                            </div>
                            <img className="noticiaPrincipal" src={NoticiaPrincipal} alt="" />
                            < NovidadesSlider />

                            <MgTopFooter />
                        </Col>
                        <Col lg={3}>
                            <MusicPlayerCol />
                        </Col>
                    </Row>
                </Container>
            </div>
            <MusicPlayer />
        </div>
    )
}