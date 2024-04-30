import React from "react";
import { Link } from "react-router-dom";

//icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FundoWaveFooter from '../imagens/waveRodape.svg';
import Logo from '../imagens/logog3.png';


import '../css/layout/footer.css';

export default function Footer() {
    return (


        <div className="footer">
            <img className="footerWave" src={FundoWaveFooter} alt="" />
            <div className="footerContent">
                <Container fluid>
                    <Row>
                        <Col>
                            <ul>
                                <li className='iconsFooter'><Link to="/"><FaInstagram /><FaFacebookF /><FaXTwitter /><FaYoutubeSquare /></Link> </li>

                                <li className='d-flex'>
                                    <Link to="/"><img className='logoIcon' src={Logo} alt='' /></Link>
                                    <Link to="/"><h4 className='logoFooter'>Play <span className='br_logo'>Ground</span></h4></Link>
                                </li>
                                <li className='atriFooter'>© 2024 PlayGround
                                    Português (br)
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>



    )
}