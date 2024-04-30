import React from "react";
import PageArtista2 from "../../layout/playlistArtista";
import Albuns from "../../layout/imageAlbum";
import SideBar from "../../layout/sidebar";
import MusicPlayer from "../../layout/BlocoMusica";
import MusicPlayerCol from "../../layout/MusicPlayerCol";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../css/pages/recursos.css';


export default function Artista() {
    return (
        <>
            <div className="corpoInicialMusica">
                <SideBar />

                <div >

                    <Container fluid className="contentInicialMusica">
                        <Row>
                            <Col lg={9}>
                                <PageArtista2 />
                                <Albuns />

                            </Col>
                            <Col lg={3}>
                                <MusicPlayerCol />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <MusicPlayer />
            </div>


        </>

    )
}