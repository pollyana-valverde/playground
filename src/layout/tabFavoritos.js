import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import MgTopFooter from './mgTopFooter';
import MarginPlayFavoTab from './marginPlayFavoTab';


import AlbunsFavoritos from './albunsFavoritos';
import PlaylistPart from './playlistPart';
import SugestoesMusica from './sugestoesMusica';
import SugestoesMusica2 from './sugestoesMusica2';
import SugestoesArtista from './sugestoesArtista';
import MaisQueridas from './maisQueridas';

//icons
import { TbArrowsCross } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/layout/tabFavoritos.css';

export default function TabFavoritos() {
    const [key, setKey] = useState('home');

    return (
        <Container className='tabFavoritosBody'>
            <Row>
                <h1>Favoritos</h1>
                <Col lg={5}>
                    <button className='tabFavoritosBtn' type='button'>
                        <TbArrowsCross /> Minha música - aleatório
                    </button>
                </Col>
            </Row>
            <Row>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 tabFavoritosContent"
                >
                    <Tab eventKey="home" title="Destaques">
                        <SugestoesMusica />
                        <SugestoesMusica2 />
                        <SugestoesArtista />
                        <PlaylistPart />
                    </Tab>
                    <Tab eventKey="queridas" title="Mais queridas">
                        <h5 className='tabQueridasTitulo'>150 mais queridas</h5>
                        <Col lg={5}>
                            <button className='tabFavoritosBtn' type='button'>
                            <FaPlay /> Ouvir
                            </button>
                        </Col>
                        <MaisQueridas />
                    </Tab>
                    <Tab eventKey="playlists" title="Playlists">
                    <h5 className='tabQueridasTitulo'>4 playlists</h5>
                        <PlaylistPart />
                        <MgTopFooter />
                        <MarginPlayFavoTab />
                        

                    </Tab>
                    <Tab eventKey="albuns" title="Álbuns">
                    <h5 className='tabQueridasTitulo'>4 álbuns</h5>
                        <AlbunsFavoritos />
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
}
