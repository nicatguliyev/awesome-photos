import React from "react";

const SideBar2 = () => {

    return (
        <div className="sidenav">
            <div className="logo">
                <i className="fas fa-camera-retro"></i>
                Awesome Photos
            </div>
            <button><i className="fas fa-home"></i> Home</button>
            <button><i className="fas fa-layer-group"></i> Collections</button>
            <button><i className="fas fa-heart"></i> Favorites</button>
        </div>

    );
}

export default SideBar2;