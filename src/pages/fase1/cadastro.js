import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


import Cabecalho from '../../layout/navbar';
import Footer from "../../layout/footer";
import MTnavbar from "../../layout/mtNavbar";
import MgTopFooter from '../../layout/mgTopFooter';



import imagemForm from '../../imagens/playlist4.png';

import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import '../../css/pages/cadastro.css';

export default function Cadastro() {
    const [key, setKey] = useState('home');

    return (
        <>
<Cabecalho />
<MTnavbar />

        <Container className="conteinerCadastro">
            <Row>
                <Col >
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 "
                    >
                        <Tab eventKey="home" title="Cadastrar" className="">
                            <div className="contentCadastro">
                                <div className=""></div>
                                <div className="brand-title">CADASTRO</div>
                                <div className="inputs">
                                    <label>NOME</label>
                                    <input type="email" placeholder="Insira seu nome completo " />
                                    <label>EMAIL</label>
                                    <input type="email" placeholder="Insira seu email" />
                                    <label>SENHA</label>
                                    <input type="password" placeholder="Crie uma senha" />
                                    <Link to="/inicial" ><button type="button">ENTRAR</button></Link>
                                </div>

                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Login">
                            <div className="contentCadastro">
                                <div className=""></div>
                                <div className="brand-title">LOGIN</div>
                                <div className="inputs">
                                    <label>EMAIL</label>
                                    <input type="email" placeholder="Insira seu email" />
                                    <label>SENHA</label>
                                    <input type="password" placeholder="Senha" />
                                    <Link to="/inicial" ><button type="button">LOGIN</button></Link>
                                </div>

                            </div>
                        </Tab>
                    </Tabs>
                   
                </Col>
                <Col lg={4} className='cadastroImagem'> <img src={imagemForm} alt='' /></Col>
            </Row>
        </Container>
        <MgTopFooter />

        <Footer/>
        </>
    );
}
