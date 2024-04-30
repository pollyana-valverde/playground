// import Button from 'react-bootstrap/Button';
import Image from '../imagens/album-musicPlayer.webp';
import bannerArtista from '../imagens/banner-artista.webp';
import Image2 from '../imagens/merch1.webp';
import Image3 from '../imagens/merch2.webp';
import Card from 'react-bootstrap/Card';
import { IoIosArrowDown } from "react-icons/io";
import Musica from '../audio/musica.mp3';

import { Container, Row, Col } from 'react-bootstrap';
import '../css/layout/MusicPlayerColResponsive.css';


export default function Responsive() {
    return (
        <Container className='visibilityResponsive'>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div>
                        <Col lg={12} md={12} sm={12}>
                            <div className='elementoTodo1'>
                                <div className='cabecalho'>
                                    <a src=''> <p><IoIosArrowDown /></p></a>
                                </div>
                                <h4>1989 (Taylor's Version)</h4>
                                <img src={Image} className='albumpick1' />
                                <marquee><h4>All You Had To Do Was Stay</h4></marquee>
                                <h5 className='artista1'>Taylor Swift</h5>
                                <Row>
                                    <Col lg={3}>
                                        <div className="progress-controller espacamentoPlayer">
                                            <audio controls>
                                                <source src={Musica} type="audio/mp3" />
                                                Your browser does not support the audio element.                           </audio>
                                        </div>

                                    </Col>
                                </Row>
                                <hr></hr>
                                <Card style={{ width: '18rem' }} className='cards1'>
                                    <Card.Img variant="top" src={bannerArtista} />
                                    <Card.Body>
                                        <Card.Title>Taylor swift</Card.Title>
                                        <h6>104.989.209M de ouvintes mensais</h6>
                                        <button type="button" className="button1">Seguir Artista</button>
                                        <Card.Text>
                                            Taylor Swift foi a artista mais ouvida no mundo em 2023, no Spotify. A informação foi passada pela empresa sueca em seu tradicional balanço de fim de ano.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                                <Card style={{ width: '18rem', borderRadius: '7rem' }} className='cards1'>
                                    <Card.Body>
                                        <Card.Title>Créditos</Card.Title>
                                        <h6>Taylor Swift</h6>
                                        <p className='subTitle1'>Artitsa Principal, Compositor, Produtor</p>
                                        <h6>Jack Antonoff</h6>
                                        <p className='subTitle1'>Compositor, Produtor</p>
                                        <h6>Cautios Clay</h6>
                                        <p className='subTitle1'>Compositor</p>
                                    </Card.Body>
                                </Card>


                                <Card style={{ width: '18rem', borderRadius: '7rem' }} className='cards1 espacoRodape1'>
                                    <Card.Body>
                                        <Card.Title>Merchandise</Card.Title>
                                        <Row className='espacoMerch1'>
                                            <Col lg={5}>
                                                <img src={Image2} className='merch1' />
                                            </Col>
                                            <Col lg={7}>
                                                <Card.Text>
                                                    The Tortured Poets Department Vinyl
                                                </Card.Text>
                                            </Col>
                                        </Row>

                                        <Row className='espacoMerch1'>
                                            <Col lg={5}>
                                                <img src={Image3} className='merch1' />
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
        </Container>
    );
}



