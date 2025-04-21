import React from "react";

const SearchHeader = () => {

    return (
      
            <div className="header">
                <div className="search-container">
                    <input type="text" className="search-bar" placeholder="Arama yap..." />
                    <button className="search-button">Ara</button>
                </div>
                <button className="login-button">Login</button>
            </div>
       

    )
}

export default SearchHeader;