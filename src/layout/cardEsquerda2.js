import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/layout/cardEsquerda.css';
import Offline from '../imagens/semInternetImg2.png';


export default function CardEsquerda2(props) {
    return (
        <>
            <Container className="beneficioEsquerdaDireita">
                <Row>
                    <Col lg={6}>
                        <img className="image-offline" src={Offline} />
                    </Col>
                    <Col lg={6}>
                        <h1>{props.tituloES}</h1>
                        <p>{props.subtituloES}
                        </p>
                        <button type="button">{props.btnTextES}</button>
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
// import '../components/css/layout/cardEsquerda.css';
// import Offline from '../components/imagens/semInternetImg2.png';

// import '../components/css/layout/recursos.css';


// export default function CardEsquerda2(props) {
//     return (
//         <>
//             <Container className="beneficioEsquerdaDireita">
//                 <Row>
//                     <Col lg={6}>
//                         <img className="image-offline" src={Offline} alt="" />
//                     </Col>
//                     <Col lg={6}>
//                         <h1>{props.tituloES}</h1>
//                         <p>{props.subtituloES}
//                         </p>
//                         <button type="button">{props.btnTextES}</button>
//                     </Col>

//                 </Row>
//             </Container>
//         </>
//     )
// }
