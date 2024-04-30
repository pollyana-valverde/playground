import '../../components/css/pages/musicPlayerResp.css'
import { FaRegHeart } from "react-icons/fa";
import { FaCompress } from "react-icons/fa";
// import { FaRandom } from "react-icons/fa";
// import { FaStepBackward } from "react-icons/fa";
// import { FaPlay } from "react-icons/fa";
// import { FaStepForward } from "react-icons/fa";
// import { FaUndoAlt } from "react-icons/fa";

// import { FaListUl } from "react-icons/fa";
// import { AiOutlineDesktop } from "react-icons/ai";
// import { IoMdVolumeHigh } from "react-icons/io";
import { Container, Row, Col } from 'react-bootstrap'
import Musica from '../../audio/musica.mp3'




export default function MusicPlayer() {
    return (


        <Container>
            <Row>
                <Col>
                    <div className="music-player1">
                        <div className="song-bar1">
                            <div className="song-infos1">
                                <div className="image-container1">
                                    <img src="https://s2-g1.glbimg.com/9zCWF65LFYstkVCE8IQXSyadIT4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/K/X/lDJpx2RmyBojfGfNBTlA/1989-taylors-version.jpg" alt="" />
                                </div>
                                <div className="song-description1">
                                    <p className="title1">
                                        All You Had To Do Was Stay
                                    </p>
                                    <p className="artist1">Taylor Swift</p>
                                </div>
                            </div>
                            <div className="icons1">
                                <i><FaRegHeart /></i>
                                <i><FaCompress /></i>
                            </div>
                        </div>
                        <div className="progress-controller1">
                            <audio controls>
                                <source src={Musica} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                            {/* </div>
                        <div className="other-features">
                            <i><FaListUl /></i>
                            <i><AiOutlineDesktop /></i>
                            <div className="volume-bar">
                                <i><IoMdVolumeHigh /></i>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>


    );
}



















// import React from 'react'
// import '../../components/css/pages/musicPlayerResp.css'
// import Musica from '../../audio/musica.mp3'
// import { Container, Row, Col } from 'react-bootstrap'
// // import album from '../../components/imagens/album-musicPlayer.webp'



// function MusicPlayerResponsive() {
//     return (
//         <Container>
//             <Row>
//                 <Col lg={12} md={12} sm={12}>
               
//                     <audio controls className='responsive' >
//                         <source src={Musica} type="audio/mp3" />
//                         Your browser does not support the audio element.
//                     </audio>
                 

//                     {/* <video controls src={album}>
//                         <source source src={Musica} type="audio/mp3" />
//                     </video> */}
//                 </Col>
//             </Row>

//         </Container>
//     );
// }
// export default MusicPlayerResponsive;


