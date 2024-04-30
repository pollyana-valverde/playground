import React from "react";
import "../css/layout/cardEfeito.css";
import Img1 from "../imagens/logo.png";
import Img2 from "../imagens/apple-watch.png";


function CardEfeito() {
    return (
    
    <div className="card">
            <div className="circle" style={{color:'red'}}>
        <img src={Img1} alt=''/>
      </div>
      <div className="content">
        <h2>Connaissance Illimitée</h2>
        <p>Libère le superpouvoir de ton cerveau et développe une connaissance illimitée
        </p>
        <a href="#">JE VEUX MON EXEMPLAIRE</a>
      </div>
      <img src={Img2} alt=''/>
    </div>

    );
  }

  export default CardEfeito;


    
