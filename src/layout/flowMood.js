import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//icons
import { AiFillPlayCircle } from "react-icons/ai";
import { IoAirplane } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { LuPartyPopper } from "react-icons/lu";
import { LuPalmtree } from "react-icons/lu";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { BsArrowThroughHeart } from "react-icons/bs";
import { PiFlowerLotusLight } from "react-icons/pi";
import { IoPlanetOutline } from "react-icons/io5";


import '../css/layout/flowMood.css';


export default function FlowMood() {
    return (
        <Container className="flowMoodBody">
            <Row>
                <h4>Flow: toque o que você sente</h4>
                <p>Um mix infinito e personalizado das músicas que você ama e também de novas descobertas.</p>
            </Row>
            <Row className="flowMoodContent">
            <Col lg={1}>
                    <IoAirplane className='flowMood  mood1' />
                    <p>Viagem</p>
                    <AiFillPlayCircle className='playFlowMood' />
                </Col>
                <Col lg={1}>
                    <CgGym className='flowMood  mood2' />
                    <p>Treino</p>
                    <AiFillPlayCircle className='playFlowMood' />
                </Col>

                <Col lg={1}>
                    <LuPartyPopper className='flowMood mood3' />
                    <p>Festa</p>
                    <AiFillPlayCircle className='playFlowMood' />
                </Col>

                <Col lg={1}>
                    <LuPalmtree className='flowMood mood4' />
                    <p>Relax</p>
                    <AiFillPlayCircle className='playFlowMood' />
                </Col>

                <Col lg={1}>
                    <FaRegFaceSadTear className='flowMood mood5' />
                    <p>Na bad</p>
                    <AiFillPlayCircle className='playFlowMood' />
                </Col>

                <Col lg={1}>
                    <BsArrowThroughHeart className='flowMood mood6' />                    
                    <p>Love</p>
                    <AiFillPlayCircle className='playFlowMood' />
                </Col>

                <Col lg={1}>
                    <PiFlowerLotusLight className='flowMood mood7' />
                    <p>Foco</p>
                    <AiFillPlayCircle className='playFlowMood' />
                </Col>
                
                <Col lg={1}>
                    <IoPlanetOutline className='flowMood mood8' />
                    <p>Planetário</p>
                    <AiFillPlayCircle className='playFlowMood' />
                </Col>
            </Row>
        </Container>
    )
}