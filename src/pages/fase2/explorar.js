import React from "react";
import SideBar from "../../layout/sidebar";
import MusicPlayer from "../../layout/BlocoMusica";
import MusicPlayerCol from "../../layout/MusicPlayerCol";
import MgTopFooter from "../../layout/mgTopFooter";

import AlemStreaming from "../../layout/alemStreaming";
// import SugestoesMusica from "../../layout/sugestoesMusica";
import SugestoesMusica2 from "../../layout/sugestoesMusica2";
import SugestoesArtista from "../../layout/sugestoesArtista";
import PlaylistPart from "../../layout/playlistPart";
// import FlowMood from "../../layout/flowMood";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//css
import '../../css/pages/explorar.css';

export default function ExplorarMusica() {
    return (
        <div className="corpoInicialMusica">
            <SideBar />

            <div >

                <Container fluid className="contentInicialMusica">
                    <Row>
                        <Col lg={9}>
                            <h1 className="contentInicialTitulo">Explorar</h1>
                            < AlemStreaming />
                            {/* <SugestoesMusica /> */}
                            <SugestoesMusica2 />
                            <SugestoesArtista />
                            < PlaylistPart/>
                            

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