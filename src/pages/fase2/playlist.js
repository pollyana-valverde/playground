import React from "react";
import SideBar from "../../layout/sidebar";
import MusicPlayer from "../../layout/BlocoMusica";
import MusicPlayerCol from "../../layout/MusicPlayerCol";
import MgTopFooter from "../../layout/mgTopFooter";

import SliderPlaylists from "../../layout/sliderPlaylists";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../css/layout/playlist.css';


export default function Playlist() {
    return (
        <>
            <div className="corpoInicialMusica">
                <SideBar />

                <div >

                    <Container fluid className="contentInicialMusica">
                        <Row>
                            <Col lg={9}>
                                <SliderPlaylists />

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


        </>

    )
}