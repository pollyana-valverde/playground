import React from "react";
import Cabecalho from '../../layout/navbar';
import ParteUm from "../../layout/parteUm";
import MTnavbar from "../../layout/mtNavbar";
import CardPrice from "../../layout/cardPrice";
import Footer from "../../layout/footer";
import BeneficioEsquerdo from "../../layout/beneficioEsquerdo";
import BeneficioDireita from "../../layout/beneficioDireita";
import BeneficioHeader from "../../layout/beneficioHeader";
import FAQ from "../../layout/FAQ";

import OndasFAQtop from '../../imagens/ondasFAQtop.svg';
// import OndasFAQbottom from '../../imagens/ondasFAQbottom.svg';
import Imagem from '../../imagens/planos-celular.png';
import Imagem2 from '../../imagens/planos-letra.png';
import Imagem3 from '../../imagens/planos-vision.png';
import Imagem4 from '../../imagens/planos-musica.png';

import '../../css/layout/beneficio.css';
import '../../css/pages/planos.css';


export default function Planos() {
    return (
        <>
            <Cabecalho />
            <MTnavbar />
            <ParteUm />
            <CardPrice />
            <BeneficioHeader />

            <BeneficioEsquerdo
                tituloES="Sua música com qualidade de áudio superior"
                subtituloES=" Aproveite uma experiência de escuta sem igual com Deezer Premium."
                btnTextES="Explorar"
                imagemES={Imagem} />

            <BeneficioDireita
                tituloDI="Suas favoritas inteiramente traduzidas"
                subtituloDI="Cante junto e confira as traduções dos seus hits prediletos no seu idioma"
                btnTextDI="Descubra as letras"
                imagemDI={Imagem2} />


            <div className="endPage">
                <img className="endPageWave" src={OndasFAQtop} />
                <div className="endPageContent">
                    <div className="contentDivider">
                        <span className="divider-line"></span>
                        <h5>O que há de novo?</h5>
                        <span className="divider-line"></span>  

                    </div>
                    <BeneficioEsquerdo className='beneficioFAQ'
                        tituloES="A Deezer tem quizzes musicais!"
                        subtituloES=" Desafie a si mesmo com quizzes musicais temáticos. Jogue no modo solo ou multiplayer."
                        btnTextES="Jogar Quiz Musical"
                        imagemES={Imagem3} />

                    <BeneficioDireita className='beneficioFAQ '
                        tituloDI="Identifique uma música tocando perto de você"
                        subtituloDI=" Abra o SongCatcher, levante o seu telefone ou cantarole a música que você quer descobrir."
                        btnTextDI="Experimente SongCatcher"
                        imagemDI={Imagem4} />

                    <FAQ />

                </div>
                {/* <img src={OndasFAQbottom} /> */}

            </div>

            <Footer />
        </>

    )
}