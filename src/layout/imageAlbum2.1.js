import { Container, Row, Col } from 'react-bootstrap';
import '../css/layout/imageAlbum2.1.css';
import React, { useState } from 'react';

function BasicExample() {
    const [cards, setCards] = useState([

        {
            capaMusica: require("../imagens/album5.webp"),
            texto: 'Folklore',
            ano: '2020'
        },
        {
            capaMusica: require("../imagens/album6.jpg"),
            texto: '1989 Live Sydney',
            ano: '2014'
        },
        {
            capaMusica: require("../imagens/album7.jpg"),
            texto: 'Holiday Collection',
            ano: '2007'
        },
        {
            capaMusica: require("../imagens/album8.jpg"),
            texto: 'Lover Live From Paris',
            ano: '2019'
        },
       
        
    

    ])
    return (
        <Container >
            <Row className='center'>
                <p className='moreTaylor'></p>
                {cards.map((card, index) => (
                    <Col lg={2} md={2} sm={2} className='playlists1'>
                        <img src={card.capaMusica} className='imageAlbum imageAlbumEspaco' alt='' />
                        <p className='infoAlbum'>{card.texto}</p>
                        <p className='infoAlbum2'>{card.ano}</p>

                    </Col>
                    
                ))}
            </Row >
        </Container>

    )
}

export default BasicExample;