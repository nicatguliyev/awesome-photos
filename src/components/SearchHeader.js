import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchHeader = (props) => {

    return (

        <div className="header">
            <div className="search-container">
                <input type="text" className="search-bar" placeholder="Arama yap..." />
                <button className="search-button">Ara</button>
            </div>
            <button className="login-button" >Login</button>
            {props.accessToken && <p>Access Token: {props.accessToken}</p>}
            {props.error && <p style={{ color: "red" }}>Error: {JSON.stringify(props.error)}</p>}
        </div>

    )
}

export default SearchHeader;

