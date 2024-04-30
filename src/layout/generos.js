import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react';
import '../css/layout/generos.css'




function BasicExample() {
  // eslint-disable-next-line
  const [cards, setCards] = useState([
    {
      categoria: "Sertanejo"
    
    },
    {
      categoria: "Funk"
    },
    {
      categoria: "Samba"
 
    },
    {
     categoria: "Gospel",
    
    },
    {
      categoria: "MPB"
    
    },
    {
      categoria: "Pagode"
    },
    {
      categoria: "Pop"
 
    },
    {
     categoria: "Rock",
    
    },
    {
      categoria: "Rap"
    
    },
    {
      categoria: "Streaming"
    },
    {
      categoria: "Metal"
 
    },
    {
     categoria: "R&B",
    
    },
    {
      categoria: "Eletrônica"
    
    },
    {
      categoria: "Alternativo"
    },
    {
      categoria: "K-Pop"
 
    },
    {
     categoria: "Folk",

    
    },
    {
      categoria: "Blues"
    
    },
    {
      categoria: "Clássico"
    },
    {
      categoria: "Reggaeton"
 
    },
    {
     categoria: "Latina",
    
    },
    {
        categoria: "Country"
      
      },
      {
        categoria: "Afro"
      },
      {
        categoria: "Flamenco"
   
      },
      {
       categoria: "Salsa",
      
      }
  ])
  return (

    <Container className='box2'>
      <Row>
        <h4 className='tituloSub2'>Gêneros Musicais</h4>
        {cards.map((card, index) => (
          <Col lg={3} md={4} sm={12}>
              <div className="ag-courses_item2">
                <a href="#" className="ag-courses-item_link itemLink2">
                  <div className="ag-courses-item_bg itemBg"></div>
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

