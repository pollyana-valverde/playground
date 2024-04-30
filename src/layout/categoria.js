import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react';
import '../css/layout/categoria.css';

/////////CARD RESPONSIVO///
// import React, { useRef, useState } from 'react';
// Import Swiper React components
// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
// eslint-disable-next-line
import { EffectCoverflow, Pagination } from 'swiper/modules';




function BasicExample() {
  // eslint-disable-next-line
  const [cards, setCards] = useState([
    {
      categoria: "Lançamentos"
    
    },
    {
      categoria: "Verão"
    },
    {
      categoria: "Treino"
 
    },
    {
     categoria: "Relax",
    
    },
    {
      categoria: "Festa"
    
    },
    {
      categoria: "Charts"
    },
    {
      categoria: "Anos 2000"
 
    },
    {
     categoria: "Anos 90",
    
    },
    {
      categoria: "Hip Hop"
    
    },
    {
      categoria: "Lofi"
    },
    {
      categoria: "Em Casa"
 
    },
    {
     categoria: "Durma Bem",

    
    },
    {
      categoria: "Essenciais"
    
    },
    {
      categoria: "Numa Bad"
    },
    {
      categoria: "Kids"
 
    },
    {
     categoria: "Bubble",
    
    },
    {
      categoria: "ENEM"
    
    },
    {
      categoria: "AnimeVerso"
    },
    {
      categoria: "Cultura Queer"
 
    },
    {
     categoria: "Natal",
    
    }
  ])
  return (

    <Container className='categoriaMusica'>
      <Col>
      <h1 className='titulo'>Todos os Canais</h1>
      </Col>
      <Row>
        <h4 className='tituloSub1'>Categorias</h4>
        {cards.map((card, index) => (
          <Col key={index} lg={3} md={4} sm={12}>
              <div className="ag-courses_item1">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">
                    {card.categoria}
                  </div>
                </a>
              </div>
            </Col>
        ))}
      </Row>
    </Container>

  )
}

export default BasicExample;














