import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SugestoesArtistaInfo from "../data/sugestoesArtistaInfo";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import '../css/layout/musicasFavoritas.css';
import '../css/layout/sugestoesArtista.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function SugestoesArtista() {

    function getSugestoesArtistaInfo() {
        return SugestoesArtistaInfo.map((infoSugestoesArtista, index) => {
            return (
                <SwiperSlide className='sugeArtistaBody'>

                    <Col key={index} lg={3}>
                        <img src={infoSugestoesArtista.sugeArtistaImg} alt="" />
                        <h5>{infoSugestoesArtista.sugeArtistaNome}</h5>
                        <p>{infoSugestoesArtista.sugeArtistaFas}</p>
                        <div><Link to="/artista" >{infoSugestoesArtista.sugeArtistaIcons}</Link></div>
                    </Col>

                </SwiperSlide>

            )
        })
    }


    return (
        <>
            <Container className='sugestoesArtistaConteiner'>
            <h5 className='sugestoesArtistaTitulo'>Artistas</h5>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    loop={true}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}

                    pagination={{
                        clickable: true,
                      }}

                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <Row >
                        
                        {getSugestoesArtistaInfo()}
                        </Row>
                </Swiper>
            </Container>
        </>
    );
}