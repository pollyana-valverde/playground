import React from "react";
import MusicPLayerCol from "../../layout/musicPlayerCol";
import Playlists from "../../layout/playlists";
import ImageAlbum from "../../layout/imageAlbum";
import BlocoMusica from "../../layout/blocoMusica";
import '../../components/css/pages/fase1/recursos.css';


export default function MusicPlayer() {
    return (
        <>
            <MusicPLayerCol />
            <Playlists />
            <ImageAlbum />
            <BlocoMusica />
        </>

    )
}