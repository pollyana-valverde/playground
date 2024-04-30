import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
// import Image from '../components/imagens/album-musicPlayer.webp';
// import Artista from '../components/imagens/artistaIcon.png';
// import { AiFillPlayCircle } from "react-icons/ai";
// import { BsFillSuitHeartFill } from "react-icons/bs";
import Image from 'react-bootstrap/Image';
import Banner from '../components/imagens/banner.jpg'
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import '../components/css/layout/infoTour.css';

function BasicExample() {
    const [cards, setCards] = useState([
        {
            numero: '1',
            // capaMusica: require("../components/imagens/logo.png"),
            artista: 'Cruel Summer'

        },
        {
            numero: require('../components/imagens/album2.jpg'),
            artista: 'Lover'
        },
        {
            numero: '3',
            artista: 'Anti-Hero'

        },
        {
            numero: '4',
            artista: 'Cardigan'

        },
        {
            numero: '5',
            artista: 'Is it over now?'

        }

        // {
        //     capaMusica1: require("../components/imagens/album1.webp"),
        //     capaMusica2: require("../components/imagens/album2.jpg"),
        //     capaMusica3: require("../components/imagens/album3.jpg"),
        //     capaMusica4: require("../components/imagens/album4.png"),
        //     capaMusica5: require("../components/imagens/album1.webp")
        // }


    ])
    return (

        <Container className='box'>
            <Row className='colorFundo'>

                <Col lg={9}>
                    <p className='tituloAlbum'>Populares</p>
                    <hr className='hr-color'></hr>
                </Col>

                {cards.map((card, index) => (
                    <Col lg={9} md={9} sm={9}>
                        <div className="containerTable">
                            <Col lg={6} md={6} sm={6}>
                                <ul className="responsive-table">
                                    <li className="table-row">
                                    <img src={card.numero} className='imgFinal' alt='' />
                                        <div className="col col-1" data-label="Job Id">{card.numero}</div>
                                        <div className="col col-2 hoverMusic" data-label="Customer Name">{card.artista}</div>
                                    </li>
                                </ul>
                            </Col>
                        </div>
                        <div className="containerTable">
                            <Col lg={6} md={6} sm={6}>
                                <ul className="responsive-table">
                                    <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">{card.numero}</div>
                                        <div className="col col-2 hoverMusic" data-label="Customer Name">{card.artista}</div>
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

export default BasicExample;







