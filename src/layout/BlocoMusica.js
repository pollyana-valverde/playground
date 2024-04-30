import '../css/layout/BlocoMusica.css';
import { FaRegHeart } from "react-icons/fa";
// import { FaCompress } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { IoMdVolumeHigh } from "react-icons/io";
import { Container, Row, Col } from 'react-bootstrap'
import { TbMicrophone2 } from "react-icons/tb";
import { BsFilePlay } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CgMiniPlayer } from "react-icons/cg";
import { FiPlusCircle } from "react-icons/fi";

import Musica from '../audio/musica.mp3';







export default function MusicPlayer() {
    return (


        <Container>
            <Row>
                <Col>
                    <div className="music-player">
                        <div className="song-bar">
                            <div className="song-infos">
                                <div className="image-container">
                                    <img src="https://s2-g1.glbimg.com/9zCWF65LFYstkVCE8IQXSyadIT4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/K/X/lDJpx2RmyBojfGfNBTlA/1989-taylors-version.jpg" alt="" />
                                </div>
                                <div className="song-description">
                                    <p className="title">
                                        All You Had To Do Was Stay
                                    </p>
                                    <p className="artist">Taylor Swift</p>
                                </div>
                            </div>
                            <div className="icons">
                                <i><FaRegHeart /></i>
                                <i><FiPlusCircle /></i>
                            </div>
                        </div>
                        <div className="progress-controller">
                            <audio controls>
                                <source src={Musica} type="audio/mp3" />
                                Your browser does not support the audio element.                           </audio>
                        </div>
                        <div className="other-features">
                            <i><TbMicrophone2 /></i>
                            <i> <BsFilePlay /></i>
                            <i><FaListUl /></i>
                            <i><FaComputer /></i>
                            <div className="volume-bar">
                                <i><IoMdVolumeHigh /></i>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                                <i> <CgMiniPlayer /></i>
                                <i> <BsArrowsAngleExpand /></i>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>


    );
}