import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/layout/cardDireita.css';
import Aparelhos from '../imagens/aparelhos.png';


export default function CardDireita2(props) {
    return (
        <>
            <Container className="beneficioEsquerdaDireita">
                <Row>
                    <Col lg={6}>
                        <h1>{props.tituloDI}</h1>
                        <p>{props.subtituloDI}
                        </p>
                        <button type="button">{props.btnTextDI}</button>
                    </Col>
                    <Col lg={6}>
                    <img src={Aparelhos} className="imageAparelhos"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

// import React from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import '../components/css/layout/cardDireita.css';
// import Aparelhos from '../components/imagens/aparelhos.png';


// export default function CardDireita2(props) {
//     return (
//         <>
//             <Container className="beneficioEsquerdaDireita">
//                 <Row>
//                     <Col lg={6}>
//                         <h1>{props.tituloDI}</h1>
//                         <p>{props.subtituloDI}
//                         </p>
//                         <button type="button">{props.btnTextDI}</button>
//                     </Col>
//                     <Col lg={6}>
//                     <img src={Aparelhos} />
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }
