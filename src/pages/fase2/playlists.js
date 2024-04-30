import React from "react";
import PlaylistAlbuns from "../../layout/playlistAlbuns";
import SideBar from "../../layout/sidebar";
import MusicPlayer from "../../layout/BlocoMusica";
import MusicPlayerCol from "../../layout/MusicPlayerCol";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PlaylistPage() {
    return (

        <>
        <div className="corpoInicialMusica">
            <SideBar />

            <div >

                <Container fluid className="contentInicialMusica">
                    <Row>
                        <Col lg={9}>
                            <PlaylistAlbuns />
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

export default PlaylistPage;







