import React, { useEffect, useState } from "react";
import '../styles/Imagecard.css';
import axios from "axios";

const Imagecard = (props) => {

    return (
        <div className="image-card">
            <img src={props.imageUrl} alt="Örnek Resim" />
            <button className="favorite-btn"><i className="fas fa-heart" style={{"color": "white"}}></i></button>
          
            <button className="collect-btn"><i className="fas fa-plus" style={{"color": "white"}} ></i></button>
        </div>
    )
}

export default Imagecard;