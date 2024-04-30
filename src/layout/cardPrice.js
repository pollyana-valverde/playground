import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FundoWaveEnd from '../imagens/ondasFundoEnd.svg';

import InfoCardPrice from "../data/cardPriceInfo";

import '../css/layout/cardPrice.css';

export default function CardPrice() {

    function getInfoCardPrice() {
        return InfoCardPrice.map((cardInfo, index) => {
            return (
                <Col lg={6} className={cardInfo.priceConteinerClass}>
                    <div key={index} className={cardInfo.priceClass}>
                        <div className="cardPriceHeader d-flex">
                            <h1>{cardInfo.priceTitle}</h1>
                            <p className="spn">{cardInfo.priceSpan}</p>
                        </div>
                        <div className="cardPriceContent">
                            <h5>{cardInfo.priceTime}</h5>
                            <p>{cardInfo.priceCard}</p>
                        </div>
                        <div className="cardPriceEnd d-block">
                            <button type="button">{cardInfo.priceButton}</button>
                            <p>{cardInfo.priceButtonSpan}</p>
                        </div>

                    </div>
                    <div className={cardInfo.descontoConteinerClass}>
                        <h5>{cardInfo.descontoName}</h5>
                        <span>
                            {cardInfo.descontoPrice}
                        </span>
                    </div>
                    <div className={cardInfo.descontoConteinerClass2}>
                        <h5>{cardInfo.descontoName2}</h5>
                        <span>
                            {cardInfo.descontoPrice2}
                        </span>
                    </div>
                </Col>
            );
        });
    }

    return (
        <>
            <div className="bgPrice">
                <Container fluid>
                    <Row>

                        {getInfoCardPrice()}
                    </Row>
                </Container>

            </div>

            <img className="fundoWaveEnd" src={FundoWaveEnd} alt="" />

        </>
    )
}