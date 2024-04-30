import { Container, Row, Col } from 'react-bootstrap';
import '../css/layout/playlistAlbum.css';
import React, { useState } from 'react';
import Image from '../imagens/album-musicPlayer.webp';
import Artista from '../imagens/artistaIcon.png';
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

function PlaylistAlbuns() {
    const [cards, setCards] = useState([
        {
            numero: '1',
            // capaMusica: require("../components/imagens/logo.png"),
            artista: 'Welcome To New York',
            tempo: '03:32'

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
            numero: '6',
            artista: 'Shake It Off',
            tempo: '03:39'
        },
        {
            numero: '7',
            artista: 'I Wish You Would',
            tempo: '03:27'

        },
        {
            numero: '8',
            artista: 'Bad Blood',
            tempo: '03:31'

        },
        {
            numero: '9',
            artista: 'Wildest Dreams',
            tempo: '03:40'

        },
        {
            numero: '10',
            artista: 'How You Get The Girl',
            tempo: '03:07'
        },
        {
            numero: '11',
            artista: 'This Love',
            tempo: '03:10'

        },
        {
            numero: '12',
            artista: 'I Know Places',
            tempo: '03:15'


        },
        {
            numero: '13',
            artista: 'Clean',
            tempo: '03:31'

        },
        {
            numero: '14',
            artista: 'Wonderland',
            tempo: '03:05'
        },
        {
            numero: '15',
            artista: 'You Are In Love',
            tempo: '03:27'

        },
        {
            numero: '16',
            artista: 'New Romantics',
            tempo: '03:50'

        },
        {
            numero: '17',
            artista: '"Slut!"',
            tempo: '03:00'

        },
        {
            numero: '18',
            artista: 'Say Don’t Go',
            tempo: '04:27'
        },
        {
            numero: '19',
            artista: 'Now That We Don’t Talk',
            tempo: '03:50'

        },

        {
            numero: '20',
            artista: 'Suburban Legends',
            tempo: '03:00'

        },

        {
            numero: '21',
            artista: 'Is It Over Now?',
            tempo: '03:39'

        },

        {
            capaMusica1: require("../imagens/album1.webp"),
            capaMusica2: require("../imagens/album2.jpg"),
            capaMusica3: require("../imagens/album3.jpg"),
            capaMusica4: require("../imagens/album4.png"),
            capaMusica5: require("../imagens/album1.webp")
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
            <Row className='musicPlaylistAlbuns'>
                <Col lg={9}>
                    <a href=''><AiFillPlayCircle className='colorIcon' /><a href=''><BsFillSuitHeartFill className='colorIcon2' /></a></a>
                </Col>
                <Col lg={9}>
                    <p className='tituloAlbum'># Título<BiTime className='iconTime' /></p>
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

export default PlaylistAlbuns;







