
import { Container, Row, Col } from 'react-bootstrap';
import '../css/layout/albunsFavoritos.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


import { AiFillPlayCircle } from "react-icons/ai";


export default function AlbunsFavoritos() {
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
            texto: '1989 (Taylor Version)',
            ano: '2022'
        },
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
            <Row className='albunsFavoritos'>
                {cards.map((card, index) => (
                    <Col lg={3} >
                        <img src={card.capaMusica} className='imageAlbum' alt='' />
                        <Link to="/albumPage" ><AiFillPlayCircle /></Link>
                        <p className='infoAlbum'>{card.texto}</p>
                        <p className='infoAlbum2'>{card.ano}</p>
                    </Col>
                ))}
            </Row >
        </Container>

    )
}

