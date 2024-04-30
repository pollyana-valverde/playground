import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import imagemNovidade from '../imagens/album-musicPlayer.webp';

import NovidadeSliderInfo from '../data/novidadeSliderInfo';

import '../css/layout/novidadeSlider.css';

export default function NovidadesSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    function getNovidadeSliderInfo() {
        return NovidadeSliderInfo.map((infoNovidadesSlider, index) => {
            return (
                <Carousel.Item key={index}>
                    <div className={infoNovidadesSlider.fundoMusicaClasse}>
                        <div className='cardNovidadesContent'>
                            <p>{infoNovidadesSlider.dataNovidade}</p>
                            <div className='cardNoviMusicPart'>
                                <img src={infoNovidadesSlider.imagemMusicaNovi} alt='' />
                                <div className='cardNovidadesText'>
                                    <h1>{infoNovidadesSlider.tituloMusicaNovi}</h1>
                                    <h4>{infoNovidadesSlider.artistaNomeNovi}</h4>
                                    <button type='button'>Ouvir agora</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            )
        })
    }

    return (

        <>
            <div className="novidadesDivider">
                <span className="divider-line"></span>
                <h5>Novidades</h5>
                <span className="divider-line"></span>

            </div>
            <div className='novidades'>
                <Carousel className='cardNovidades' activeIndex={index} onSelect={handleSelect}>
                    {getNovidadeSliderInfo()}
                </Carousel>
            </div></>
    );
}

