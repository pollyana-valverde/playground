import { Container, Row, Col } from 'react-bootstrap';
import '../css/layout/imageAlbum2.css';
import React, { useState } from 'react';

function BasicExample() {
    const [cards, setCards] = useState([

        {
            capaMusica: require("../imagens/album1.webp"),
            texto: 'Lover',
            ano: '2019'
        },
        {
            capaMusica: require("../imagens/album2.jpg"),
            texto: 'Speak Now',
            ano: '2023'
        },
        {
            capaMusica: require("../imagens/album3.jpg"),
            texto: 'Reputation',
            ano: '2017'
        },
        {
            capaMusica: require("../imagens/album-musicPlayer.webp"),
            texto: '1989',
            ano: '2023'
        },
        {
            capaMusica: require("../imagens/album1.webp"),
            texto: 'Lover',
            ano: '2019'
        },
        {
            capaMusica: require("../imagens/album2.jpg"),
            texto: 'Speak Now',
            ano: '2023'
        },
        {
            capaMusica: require("../imagens/album3.jpg"),
            texto: 'Reputation',
            ano: '2017'
        },
        {
            capaMusica: require("../imagens/album4.png"),
            texto: 'Midnights',
            ano: '2022'
        },

    ])
    return (
        <Container >
            <Row className='center'>
             
                    <p className='moreTaylor'>Discografia</p>
                
                    {cards.map((card, index) => (
                        
                        <Col lg={2} md={2} sm={2} className='playlists'>
                     
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