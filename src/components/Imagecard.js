import React from "react";
import '../styles/Imagecard.css';

const Imagecard = (props) => {

    return (
        <div class="image-card">
            <img src={props.imageUrl} alt="Örnek Resim" />
            <button class="favorite-btn"><i class="fas fa-heart" style={{"color": "white"}}></i></button>
          
            <button class="collect-btn"><i class="fas fa-plus" style={{"color": "white"}} ></i></button>
        </div>
    )
}

export default Imagecard;