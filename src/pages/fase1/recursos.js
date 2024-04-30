import React from "react";
import Navbar from "../../layout/navbar";
import PageOnda from "../../layout/pageOnda";
import InicioPage from "../../layout/inicioPage";
import Carousel from "../../layout/carousel";
import CardButton from "../../layout/cardButton";
import CardEsquerda from "../../layout/cardEsquerda";
import CardDireita from "../../layout/cardDireita";
import CardEsquerda2 from "../../layout/cardEsquerda2";
import CardDireita2 from "../../layout/cardDireita2";
import CardGaleria from "../../layout/cardGaleria";
import MgTopFooter from '../../layout/mgTopFooter';
import Footer from "../../layout/footer";

import '../../css/pages/recursos.css';


export default function Recursos() {
    return (
        <>
            <Navbar />
            <PageOnda />
            <InicioPage />
            <Carousel />
            <CardButton />

            <CardEsquerda
                tituloES="Seu mix infinito e personalizado!"
                subtituloES="Neste mix, você encontrará uma fusão de estilos e ideias que são cuidadosamente adaptadas aos seus gostos e interesses. Deixe-se envolver por uma sinfonia de palavras, cores e sons, criando um cenário que é verdadeiramente seu."
                btnTextES="Descubra seu Mix" />

            <CardDireita
                tituloDI="Cante junto com as letras das músicas!"
                subtituloDI="Com as letras disponíveis, você pode mergulhar ainda mais fundo na música e se envolver completamente com cada nota e ritmo. Ao cantar junto, permita que as palavras o transportem para um estado de conexão emocional com a música. E para uma compreensão mais profunda do significado por trás das letras, não hesite em explorar nosso recurso de Tradução, que o ajudará a desvendar cada camada de significado e poesia.  E para uma compreensão mais profunda do significado por trás das letras."
                btnTextDI="Explore as letras" />

            <CardEsquerda2
                tituloES="Sem internet? Não se preocupe, apenas relaxe!"
                subtituloES="A função de baixar música oferecida aos assinantes pagos do Playground é uma excelente maneira de garantir que sua experiência auditiva não seja interrompida, mesmo quando você estiver offline ou com uma conexão de internet instável. Com essa funcionalidade, você pode baixar suas músicas e podcasts favoritos diretamente para o seu dispositivo, permitindo que você os ouça quando e onde quiser, sem depender da disponibilidade de conexão com a internet."
                btnTextES="Ouça offline" />

            <CardDireita2
                tituloDI="Escute em todos os dispositivos!"
                subtituloDI="
                Com o Playground, você pode conectar-se facilmente aos seus dispositivos, seja no celular, TV, desktop, alto-falantes e muito mais. Com apenas alguns cliques, você pode sincronizar sua música e podcasts em todos os seus dispositivos, garantindo que você possa desfrutar da sua biblioteca de áudio em qualquer lugar e a qualquer momento. "
                btnTextDI="Descubra Dispositivos" />

            <CardGaleria />
            <MgTopFooter />

            <Footer />
        </>

    )
}