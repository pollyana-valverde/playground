import React from 'react';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../imagens/logog3.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/layout/navbar.css';

export default function Cabecalho() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary cabecalho fixed-top">
      <Container fluid>
      <Link to="/"><img className='logoIcon' src={Logo} alt='' /></Link>
      <Link to="/"><h4 className='logo'>Play <span className='br_logo'>Ground</span></h4></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end navActions'>
          <Nav
            
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to="/">Planos</Link></Nav.Link>
            <Nav.Link ><Link to="/recursos" >Recursos</Link></Nav.Link>
            <Nav.Link ><Link to="/MusicaCategoria" >Música</Link></Nav.Link>
           
          </Nav>
            <Button className='btnAction1'><Link to="/cadastro">Cadastre-se</Link>  </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
