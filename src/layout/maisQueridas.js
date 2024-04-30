import { Container, Row, Col } from 'react-bootstrap';
import '../css/layout/maisQueridas.css';
import React, { useState } from 'react';
import Image from '../imagens/album-musicPlayer.webp';
import Artista from '../imagens/artistaIcon.png';
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

export default function MaisQueridas() {
    const [cards, setCards] = useState([
        {
            capa: require("../imagens/album1.webp"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album7.jpg"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album10.png"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album11.png"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album12.webp"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album2.jpg"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album3.jpg"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album4.png"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album5.webp"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album6.jpg"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album8.jpg"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        {
            capa: require("../imagens/album9.png"),
            musica:'Cruel Summer',
            artista: 'Tailor Swift',
            tempo: '02:58'

        },
        


    ])
    return (

        <Container className='box'>
            <Row className='maisQueridasMusica'>
                {cards.map((card, index) => (
                    <Col lg={12} md={9} sm={9}>
                        <div className="containerTable">
                            <Col lg={12} md={12} sm={12}>
                                <ul className="responsive-table">
                                    <li className="table-row maisQueridasMusicaInfo">
                                        <img src={card.capa} className='imageAlbum2 col-lg-1' alt='' />

                                        <div className="col-lg-7 hoverMusic" data-label="Customer Name">{card.musica}</div>

                                        <div className="col-lg-2 artistaTable" 
                                        data-label="Amount">{card.artista}</div>

                                        <div className="col-lg-1" data-label="Payment Status">{card.tempo}</div>
                                    </li>
                                </ul>
                            </Col>
                        </div>


                    </Col>
                ))}
            </Row>
        </Container>

    )
}








