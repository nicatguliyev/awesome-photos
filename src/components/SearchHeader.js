import React, { useEffect, useState } from "react";
import axios from "axios";


const SearchHeader = (props) => {

    return (

        <div className="header">
            <div className="search-container">
                <input type="text" className="search-bar" placeholder="Arama yap..." />
                <button className="search-button">Ara</button>
            </div>
            <button className="login-button" onClick={handleLogin}>Login</button>


        </div>

    )
}

export default SearchHeader;

