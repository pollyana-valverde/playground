import { Container, Row, Col } from 'react-bootstrap';
import '../components/css/layout/pageArtista.css';
import React, { useState } from 'react';
import Image from '../components/imagens/album-musicPlayer.webp';
import Artista from '../components/imagens/artistaIcon.png';
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

function BasicExample() {
    const [cards, setCards] = useState([
        {
            numero: '1',
            // capaMusica: require("../components/imagens/logo.png"),
            artista: 'Cruel Summer',
            musica: '193.928.293',
            tempo: '02:59'

        },
        {
            numero: '2',
            artista: 'Blank Space',
            tempo: '03:51'
        },
        {
            numero: '3',
            artista: 'Style',
            tempo: '03:51'

        },
        {
            numero: '4',
            artista: 'Out Of The Woods',
            tempo: '03:55'

        },
        {
            numero: '5',
            artista: 'All You Had To Do Was Stay',
            tempo: '03:13'

        },

        {
            capaMusica1: require("../components/imagens/album1.webp"),
            capaMusica2: require("../components/imagens/album2.jpg"),
            capaMusica3: require("../components/imagens/album3.jpg"),
            capaMusica4: require("../components/imagens/album4.png"),
            capaMusica5: require("../components/imagens/album1.webp")
        }


    ])
    return (

        <Container className='box'>
            <Row className='colorFundo'>
                <Col lg={2}>
                    <img src={Image} className='albumpickPlay' />
                </Col>
                <Col lg={7}>
                    <h5 className='titulo'>Álbum</h5>
                    <p className='tituloNome'>1989 (Taylor's Version)</p>
                    <p className='titulo2'> <img src={Artista} className='imgIcon' /><a href='' className='aLink'>Taylor Swift</a> - 2023 - 21 músicas, 1h 17min</p>
                </Col>
            </Row>
            <Row>
                <Col lg={9}>
                    <a href=''><AiFillPlayCircle className='colorIcon' /><a href=''><BsFillSuitHeartFill className='colorIcon2' /></a></a>
                </Col>
                <Col lg={9}>
                    <p className='tituloAlbum'>Populares<BiTime className='iconTime' /></p>
                    <hr className='hr-color'></hr>
                </Col>

                {cards.map((card, index) => (
                    <Col lg={9} md={9} sm={9}>
                        <div className="containerTable">
                            <Col lg={12} md={12} sm={12}>
                                <ul className="responsive-table">
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">{card.numero}</div>
                                        <div className="col col-2 hoverMusic" data-label="Customer Name">{card.artista}</div>
                                        <div className="col col-3 artistaTable" data-label="Amount">{card.musica}</div>
                                        <div className="col col-4" data-label="Payment Status">{card.tempo}</div>
                                    </li>
                                </ul>
                            </Col>
                        </div>

                        {/* <Col lg={12} md={12} sm={12} className='playlists'>
                        <img src={card.capaMusica1} className='imageAlbum' alt='' />
                        <img src={card.capaMusica2} className='imageAlbum' alt='' />
                        <img src={card.capaMusica3} className='imageAlbum' alt='' />
                        <img src={card.capaMusica4} className='imageAlbum' alt='' />
                    </Col> */}
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default BasicExample;







