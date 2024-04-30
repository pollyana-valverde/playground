import React from "react";
import { Link } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//imagens
import PlaylistUm from '../imagens/playlist1.jpg';
import PlaylistDois from '../imagens/playlist2.png';
import PlaylistTres from '../imagens/playlist3.png';
import PlaylistQuatro from '../imagens/playlist4.png';

//icons
import { AiFillPlayCircle } from "react-icons/ai";


import '../css/layout/playlistPart.css';

export default function PlaylistPart() {
    return (
        <Container>
            <Row className="playlists">
                <h5>Continue dando stream</h5>
                <Col lg={3}>
                    <img src={PlaylistUm} alt="" />
                    <Link to="/playlist" ><AiFillPlayCircle /></Link>
                </Col>
                <Col lg={3}>
                    <img src={PlaylistQuatro} alt="" />
                    <Link to="/playlist" ><AiFillPlayCircle /></Link>
                </Col>
                <Col lg={3}>
                    <img src={PlaylistTres} alt="" />
                    <Link to="/playlist" ><AiFillPlayCircle /></Link>
                </Col>
                <Col lg={3}>
                    <img src={PlaylistDois} alt="" />
                    <Link to="/playlist" ><AiFillPlayCircle /></Link>
                </Col>
            </Row>
        </Container>
    )
}