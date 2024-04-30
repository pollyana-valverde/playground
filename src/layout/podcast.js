import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react';
import '../css/layout/podcast.css'




function BasicExample() {
  // eslint-disable-next-line
  const [cards, setCards] = useState([
    {
      categoria: "Charts"
    
    },
    {
      categoria: "Lançamentos"
    },
    {
      categoria: "Saúde Mental"
 
    },
    {
     categoria: "Finanças",
    
    },
    {
      categoria: "Foco e Treino"
    
    },
    {
      categoria: "História"
    },
    {
      categoria: "Para Crianças"
 
    },
    {
     categoria: "Comédia",
    
    },
    {
      categoria: "Cultura"
    
    },
    {
      categoria: "Música"
    },
    {
      categoria: "Negócios"
 
    },
    {
     categoria: "Esportes",
    
    },
    {
      categoria: "Cultura Pop"
    
    },
    {
      categoria: "Autoajuda"
    },
    {
      categoria: "Tecnologia"
 
    },
    {
     categoria: "Ciência",
    
    },
    {
      categoria: "Religião"
    
    },
    {
      categoria: "Futebol"
    },
    {
      categoria: "Depoimentos"
 
    },
    {
     categoria: "Empreender",
    
    },
{
  categoria: "Ambiente"

},
{
  categoria: "Família"
},
{
  categoria: "Elas por Elas"

},
{
 categoria: "Carreira",

},
{
    categoria: "Comida"
  
  },
  {
    categoria: "Viagem"
  },
  {
    categoria: "TV"
  
  },
  {
   categoria: "Horóscopo",
  
  }
    
  ])
  return (

    <Container className='box3'>
      <Row>
        <h4 className='tituloSub3'>Podcasts por Categoria</h4>
        {cards.map((card, index) => (
          <Col key={index} lg={3} md={4} sm={12}>
              <div className="ag-courses_item3">
                <a href="#" className="ag-courses-item_link itemLink1">
                  <div className="ag-courses-item_bg itemBg1"></div>
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









