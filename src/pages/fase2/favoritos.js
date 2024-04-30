import React from "react";
import SideBar from "../../layout/sidebar";
import MusicPlayer from "../../layout/BlocoMusica";
import MusicPlayerCol from "../../layout/MusicPlayerCol";
import MgTopFooter from "../../layout/mgTopFooter";


import TabFavoritos from "../../layout/tabFavoritos";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../css/pages/recursos.css';


export default function Favoritos() {
    return (
        <>
            <div className="corpoInicialMusica">
                <SideBar />

                <div >

                    <Container fluid className="contentInicialMusica">
                        <Row>
                            <Col lg={9}>
                                <TabFavoritos />
                                
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