import React from "react";
import '../css/layout/parteUm.css'

// import FundoWave from '../imagens/ondasFundo.png';
import FundoWaveStart from '../imagens/ondasFundoStart.svg';
import Logo from '../imagens/logog3.png';
import Logo2 from '../imagens/logo.png';


export default function ParteUm() {
    return (
        <>
            <div className="bordao">
                <div className="bordaoTitle-line1">
                    <h1 className="bordaoTitle">
                    mix de emoções
                        <img className='logoIcon' src={Logo} alt='' />

                      <span className="play">  play<span className="ground">ground</span></span>
                        
                        <img className='logoIcon' src={Logo} alt='' />

                        mix de emoções
                        <img className='logoIcon' src={Logo} alt='' />
                    </h1>

                    <span className="bordaoTitle">

                    <span className="play">  play<span className="ground">ground</span></span>

                        <img className='logoIcon' src={Logo2} alt='' />

                        mix de emoções
                        <img className='logoIcon' src={Logo2} alt='' />

                      <span className="play">  play<span className="ground">ground</span></span>

                        <img className='logoIcon' src={Logo2} alt='' />
                    </span>
                </div>

                <div className="bordaoTitle-line2">
                    <h1 className="bordaoTitle">
                    mix de emoções
                        <img className='logoIcon' src={Logo} alt='' />

                        <span className="play">  play<span className="ground">ground</span></span>

                        <img className='logoIcon' src={Logo} alt='' />

                        mix de emoções
                        <img className='logoIcon' src={Logo} alt='' />
                    </h1>

                    <span className="bordaoTitle">
                    <span className="play">  play<span className="ground">ground</span></span>

                        <img className='logoIcon' src={Logo2} alt='' />

                        mix de emoções
                        <img className='logoIcon' src={Logo2} alt='' />

                        <span className="play">  play<span className="ground">ground</span></span>

                        <img className='logoIcon' src={Logo2} alt='' />
                    </span>
                </div>
            </div>

            <img className="fundoWaveStart" src={FundoWaveStart} alt="" />
            
        </>
    )
}