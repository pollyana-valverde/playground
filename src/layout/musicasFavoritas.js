import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MusicasFavoritasInfo from '../data/musicasFavoritasInfo';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import '../css/layout/musicasFavoritas.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function MusicasFavoritas() {


    function getMusicaFavoritaInfo() {
        return MusicasFavoritasInfo.map((infoMusicasFavoritas, index) => {
            return (
                <SwiperSlide className='musicaFavoBody'>
                    <Row key={index}>
                        <Col lg={3}>
                            <img src={infoMusicasFavoritas.imagemMusicaFavo1} alt="" />
                        </Col>

                        <Col className="musicaFavoText">
                            <h5>{infoMusicasFavoritas.tituloMusicaFavo1}</h5>
                            <p>{infoMusicasFavoritas.artistaNomeFavo1}</p>
                            <div>{infoMusicasFavoritas.icone1}</div>
                        </Col>
                    </Row>
                    <Row key={index}>
                        <Col lg={3}>
                            <img src={infoMusicasFavoritas.imagemMusicaFavo2} alt="" />
                        </Col>

                        <Col className="musicaFavoText">
                            <h5>{infoMusicasFavoritas.tituloMusicaFavo2}</h5>
                            <p>{infoMusicasFavoritas.artistaNomeFavo2}</p>
                            <div>{infoMusicasFavoritas.icone2}</div>
                        </Col>
                    </Row>
                    <Row key={index}>
                        <Col lg={3}>
                            <img src={infoMusicasFavoritas.imagemMusicaFavo3} alt="" />
                        </Col>

                        <Col className="musicaFavoText">
                            <h5>{infoMusicasFavoritas.tituloMusicaFavo3}</h5>
                            <p>{infoMusicasFavoritas.artistaNomeFavo3}</p>
                            <div>{infoMusicasFavoritas.icone3}</div>
                        </Col>
                    </Row>
                </SwiperSlide>

            )
        })
    }


    return (
        <>
            <Container className='musicasFavotitasConteiner'>
                <Swiper
                    slidesPerView={3}
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
                    className=" mySwiper"
                >

                    {getMusicaFavoritaInfo()}

                </Swiper>
            </Container>
        </>
    );
}
