import { Container, Row, Col } from 'react-bootstrap';
import '../css/layout/playlist2.css';
import React, { useState } from 'react';
// import Image from '../components/imagens/album-musicPlayer.webp';
// import Artista from '../components/imagens/artistaIcon.png';
// import { AiFillPlayCircle } from "react-icons/ai";
// import { BsFillSuitHeartFill } from "react-icons/bs";
import Image from 'react-bootstrap/Image';
import Banner from '../imagens/banner.jpg'
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

function PageArtista2() {
    const [cards, setCards] = useState([
        {
            numero: '1',
            capa: require("../imagens/album1.webp"),
            artista: 'Cruel Summer',
            tempo: '02:58'

        },
        {
            numero: '2',
            capa: require("../imagens/album1.webp"),
            artista: 'Lover',
            tempo: '03:41'
        },
        {
            numero: '3',
            capa: require("../imagens/album4.png"),
            artista: 'Anti-Hero',
            tempo: '03:20'

        },
        {
            numero: '4',
            capa: require("../imagens/album5.webp"),
            artista: 'Cardigan',
            tempo: '03:59'

        },
        {
            numero: '5',
            capa: require("../imagens/album-musicPlayer.webp"),
            artista: 'Is it over now?',
            tempo: '03:49'

        }

        // {
        //     capaMusica1: require("../components/imagens/album1.webp"),
        //     capaMusica2: require("../components/imagens/album2.jpg"),
        //     capaMusica3: require("../components/imagens/album3.jpg"),
        //     capaMusica5: require("../components/imagens/album1.webp")
        // }


    ])
    return (

        <Container className='artistaMusica'>
            <Row className='colorFundo'>
                <Col lg={9}>
                    <div className='image-container1'>
                        <Image className='bannerNavbar' src={Banner} fluid />
                        <div className='filter'></div>
                        <div className='tituloSobreposto'>
                            <h1 >Taylor Swit</h1>
                            <h5>101.993.371 ouvintes </h5>
                        </div>
                    </div>

                </Col>
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
                                        <img src={card.capa} className='imageAlbum2' alt='' />
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

export default PageArtista2;







