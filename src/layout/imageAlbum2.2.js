import { Container, Row, Col } from 'react-bootstrap';
import '../css/layout/imageAlbum2.2.css';
import React, { useState } from 'react';

function BasicExample() {
    const [cards, setCards] = useState([

        {
            capaMusica: require("../imagens/album9.png"),
            texto: 'Midnights',
            ano: '2022'
        },
        {
            capaMusica: require("../imagens/album10.png"),
            texto: 'Speak Now',
            ano: '2023'
        },
        {
            capaMusica: require("../imagens/album11.png"),
            texto: 'Fearless',
            ano: '2021'
        },
        {
            capaMusica: require("../imagens/album12.webp"),
            texto: 'Evermore',
            ano: '2020'
        },
       
        
    

    ])
    return (
        <Container >
            <Row className='center'>
                <p className='moreTaylor'></p>
                {cards.map((card, index) => (
                    <Col lg={2} md={2} sm={2} className='playlists2'>
                        <img src={card.capaMusica} className='imageAlbum' alt='' />
                        <p className='infoAlbum'>{card.texto}</p>
                        <p className='infoAlbum2'>{card.ano}</p>
                    </Col>
                    
                ))}
            </Row >
        </Container>

    )
}

export default BasicExample;