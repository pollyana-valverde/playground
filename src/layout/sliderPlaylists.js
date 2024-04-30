import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import '../css/layout/playlist.css';

import SliderPlaylistInfo from '../data/sliderPlaylistInfo';

import Image from 'react-bootstrap/Image';
// import Banner from '../imagens/banner.jpg'
import { FaPlay } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

export default function SliderPlaylists() {

    function getSliderPlaylistInfo() {
        return SliderPlaylistInfo.map((infoPlaylistSliderInfo, index) => {
            return (
                <Carousel.Item key={index}>
                    <Col lg={9}>
                        <div className='playlistHeader'>
                            <Image className='playlistHeaderImg' src={infoPlaylistSliderInfo.capaPlaylist} fluid />
                            <div className='playlistHeaderNome'>
                                <h1 >{infoPlaylistSliderInfo.nomePlaylist}</h1>
                                <h5>{infoPlaylistSliderInfo.quantFaixasTempo} </h5>
                                <button  type='button'>
                                    <FaPlay /> Ouvir
                                </button>
                            </div>
                        </div>

                    </Col>

                    <Col lg={9} className='headerMusicasPlaylist'>
                        <p className='headerMusicasPlayTitulo'>Música</p>
                        <BiTime className='headerMusicasPlayIcon ' />
                    </Col>


                    <Col lg={12} md={9} sm={9}>
                        <div className="containerTable">
                            <Col lg={12} md={12} sm={12}>
                                <ul className="responsive-table">
                                    <li className="table-row musicasPlaylistInfo">
                                        <img src={infoPlaylistSliderInfo.capaMusica1} className='imageAlbum2 col-lg-1' alt='' />

                                        <div className="col-lg-7 hoverMusic" data-label="Customer Name">{infoPlaylistSliderInfo.musicaPlaylist1}</div>

                                        <div className="col-lg-2 artistaTable"
                                            data-label="Amount">{infoPlaylistSliderInfo.artistaPlaylist1}</div>

                                        <div className="col-lg-1" data-label="Payment Status">{infoPlaylistSliderInfo.tempoMusica1}</div>
                                    </li>

                                    <li className="table-row musicasPlaylistInfo">
                                        <img src={infoPlaylistSliderInfo.capaMusica2} className='imageAlbum2 col-lg-1' alt='' />

                                        <div className="col-lg-7 hoverMusic" data-label="Customer Name">{infoPlaylistSliderInfo.musicaPlaylist2}</div>

                                        <div className="col-lg-2 artistaTable"
                                            data-label="Amount">{infoPlaylistSliderInfo.artistaPlaylist2}</div>

                                        <div className="col-lg-1" data-label="Payment Status">{infoPlaylistSliderInfo.tempoMusica2}</div>
                                    </li>

                                    <li className="table-row musicasPlaylistInfo">
                                        <img src={infoPlaylistSliderInfo.capaMusica3} className='imageAlbum2 col-lg-1' alt='' />

                                        <div className="col-lg-7 hoverMusic" data-label="Customer Name">{infoPlaylistSliderInfo.musicaPlaylist3}</div>

                                        <div className="col-lg-2 artistaTable"
                                            data-label="Amount">{infoPlaylistSliderInfo.artistaPlaylist3}</div>

                                        <div className="col-lg-1" data-label="Payment Status">{infoPlaylistSliderInfo.tempoMusica3}</div>
                                    </li>

                                    <li className="table-row musicasPlaylistInfo">
                                        <img src={infoPlaylistSliderInfo.capaMusica4} className='imageAlbum2 col-lg-1' alt='' />

                                        <div className="col-lg-7 hoverMusic" data-label="Customer Name">{infoPlaylistSliderInfo.musicaPlaylist4}</div>

                                        <div className="col-lg-2 artistaTable"
                                            data-label="Amount">{infoPlaylistSliderInfo.artistaPlaylist4}</div>

                                        <div className="col-lg-1" data-label="Payment Status">{infoPlaylistSliderInfo.tempoMusica4}</div>
                                    </li>

                                    <li className="table-row musicasPlaylistInfo">
                                        <img src={infoPlaylistSliderInfo.capaMusica5} className='imageAlbum2 col-lg-1' alt='' />

                                        <div className="col-lg-7 hoverMusic" data-label="Customer Name">{infoPlaylistSliderInfo.musicaPlaylist5}</div>

                                        <div className="col-lg-2 artistaTable"
                                            data-label="Amount">{infoPlaylistSliderInfo.artistaPlaylist5}</div>

                                        <div className="col-lg-1" data-label="Payment Status">{infoPlaylistSliderInfo.tempoMusica5}</div>
                                    </li>
                                </ul>
                            </Col>
                        </div>
                    </Col>

                </Carousel.Item>
            )
        })
    }

    return (

        <Container className='playlistBody'>
            <Row className='playlistContent'>
                <Carousel interval={null}>

                    {getSliderPlaylistInfo()}

                </Carousel>
            </Row>
        </Container >
    );
}

