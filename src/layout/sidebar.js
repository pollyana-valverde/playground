import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


//icons
import { AiFillPlayCircle } from "react-icons/ai";
import { BiSolidPlaylist } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { TbLayout2 } from "react-icons/tb";
import { VscHeartFilled } from "react-icons/vsc";
import { HiOutlineLogout } from "react-icons/hi";

import Perfil from '../imagens/perfilPhoto.jpg';

import '../css/layout/sidebar.css';

export default function SideBar() {
    return (
        <Nav variant="pills" defaultActiveKey="/home" className="sideBar">
            <div>
            <Link to="/perfilAccout" ><img src={Perfil} alt=""></img></Link>
            </div>
            <div>
                <Nav.Item>
                    <Nav.Link className="navIcons" eventKey="link-1" ><Link to="/feedNoticia" ><TbLayout2 /></Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className="navIcons"  eventKey="link-2"><Link to="/explorar" ><MdOutlineExplore /></Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/inicial" ><Nav.Link className="navIcons" href="/" ><AiFillPlayCircle /></Nav.Link></Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className="navIcons" eventKey="link-3"><Link to="/favoritos" ><VscHeartFilled /></Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className="navIcons" eventKey="link-4"><Link to="/playlist" ><BiSolidPlaylist /></Link></Nav.Link>
                </Nav.Item>
                
                
            </div>
            <div>
            <Nav.Item>
                    <Nav.Link  className="navIcons" eventKey="link-5"><Link to="/cadastro" ><HiOutlineLogout /></Link></Nav.Link>
                </Nav.Item>
            </div>
        </Nav>

        
    );
}
