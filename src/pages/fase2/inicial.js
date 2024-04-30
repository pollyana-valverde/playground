import React from "react";
import SideBar from "../../layout/sidebar";
import MusicPlayer from "../../layout/BlocoMusica";
import MusicPlayerCol from "../../layout/MusicPlayerCol";
import MgTopFooter from "../../layout/mgTopFooter";

import FlowMood from "../../layout/flowMood";
import PlaylistPart from "../../layout/playlistPart";
import MusicasFavoritas from "../../layout/musicasFavoritas";
import SugestoesMusica from "../../layout/sugestoesMusica";
import AlemStreaming from "../../layout/alemStreaming";
import SugestoesMusica2 from "../../layout/sugestoesMusica2";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//css
import '../../css/pages/inicial.css';

export default function IncialMusica() {
    return (
        <div className="corpoInicialMusica">
            <SideBar />

            <div >

                <Container fluid className="contentInicialMusica">
                    <Row>
                        <Col lg={9}>
                            < FlowMood />
                            <PlaylistPart />
                            <MusicasFavoritas />
                            <SugestoesMusica2 />
                            <AlemStreaming />
                            <SugestoesMusica />

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