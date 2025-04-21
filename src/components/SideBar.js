import React from "react";

const SideBar2 = () => {

    return (
        <div className="sidenav">
            <div className="logo">
                <i className="fas fa-camera-retro"></i>
                Awesome Photos
            </div>
            <a href="#home"><i className="fas fa-home"></i> Home</a>
            <a href="#collections"><i className="fas fa-layer-group"></i> Collections</a>
            <a href="#favorites"><i className="fas fa-heart"></i> Favorites</a>
        </div>

    );
}

export default SideBar2;