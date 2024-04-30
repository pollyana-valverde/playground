import React from "react";
// import PlaylistAlbuns from "../../layout/playlistAlbuns";
import SideBar from "../../layout/sidebar";

import WelcomeProfile from "../../layout/welcomeProfile";
import NovidadesSlider from "../../layout/novidadesSlider";
import ProfileSidebar from "../../layout/ProfileSidebar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../css/pages/perfilAccount.css';


export default function PerfilAccout() {
    return (
        <>
            <div className="corpoInicialMusica">
                <SideBar />

                <div >

                    <Container fluid className="contentInicialMusica">
                        <Row>
                            <Col lg={9}>
                                <WelcomeProfile />

                                <NovidadesSlider />
                            </Col>
                            <Col lg={3}>
                                <ProfileSidebar />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}