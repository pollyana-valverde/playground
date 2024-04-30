import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '../imagens/album-musicPlayer.webp'
import bannerArtista from '../imagens/banner-artista.webp'
import Image2 from '../imagens/merch1.webp'
import Image3 from '../imagens/merch2.webp'
import '../css/layout/MusicPlayerCol.css';

export default function MusicPlayerCol() {
    return (
        <Container >
            <Row>

                <Col lg={3} md={3} sm={3}>
                    <div className='background'>
                        <Col lg={12} md={12} sm={12}>
                            <div className='elementoTodo'>
                                <h4>1989 (Taylor's Version)</h4>
                                <img src={Image} className='albumpick' alt='' />
                                <marquee><h4>All You Had To Do Was Stay</h4></marquee>
                                <h5 className='artista'>Taylor Swift</h5>

                                <Card style={{ width: '18rem' }} className='cardsMusic'>
                                    <Card.Img variant="top" src={bannerArtista} />
                                    <Card.Body>
                                        <Card.Title>Taylor swift</Card.Title>
                                        <h6>104.989.209M de ouvintes mensais</h6>
                                        <button type="button" className="button">Seguir Artista</button>
                                        <Card.Text>
                                            Taylor Swift foi a artista mais ouvida no mundo em 2023, no Spotify. A informação foi passada pela empresa sueca em seu tradicional balanço de fim de ano.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                                <Card style={{ width: '18rem', borderRadius: '7rem' }} className='cardsMusic'>
                                    <Card.Body>
                                        <Card.Title>Créditos</Card.Title>
                                        <h6>Taylor Swift</h6>
                                        <p className='subTitle'>Artitsa Principal, Compositor, Produtor</p>
                                        <h6>Jack Antonoff</h6>
                                        <p className='subTitle'>Compositor, Produtor</p>
                                        <h6>Cautios Clay</h6>
                                        <p className='subTitle'>Compositor</p>
                                    </Card.Body>
                                </Card>


                                <Card style={{ width: '18rem', borderRadius: '7rem' }} className='cardsMusic espacoRodape'>
                                    <Card.Body>
                                        <Card.Title>Merchandise</Card.Title>
                                        <Row className='espacoMerch'>
                                            <Col lg={5}>
                                                <img src={Image2} className='merch' alt='' />
                                            </Col>
                                            <Col lg={7}>
                                                <Card.Text>
                                                    The Tortured Poets Department Vinyl
                                                </Card.Text>
                                            </Col>
                                        </Row>

                                        <Row className='espacoMerch'>
                                            <Col lg={5}>
                                                <img src={Image3} className='merch' alt='' />
                                            </Col>
                                            <Col lg={7}>
                                                <Card.Text>
                                                    The Tortured Poets Department Cd
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </div>
                </Col>

            </Row>

        </Container >
    );
}