import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileButton from "./ProfileButton";
import { FaUserCircle } from "react-icons/fa";


const SearchHeader = (props) => {

    return (
        <div className="header">
            <div className="search-container">
                <input type="text" className="search-bar" placeholder="Search what you want.." />
                <button className="search-button">Search</button>
            </div>
            <ProfileButton icon={<FaUserCircle size={24} />}
                username="Nicat Guliyev"
                onClick={() => {topRated(props.clientId,  30)}} />
        </div>
    )
}

   async function searchPhotos(accessKey, keyWord, perPage){

    try{
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
                query: keyWord,
                per_page: perPage
            },
            headers: {
                Authorization:  `Client-ID ${accessKey}`
            }
          }
        );
        console.log("COUNT: " + response.data.results);
    }
    catch(e){
        console.log(e);
    }
   }

   async function topRated(accessKey,  perPage){

    try{
        const response = await axios.get(
          "https://api.unsplash.com/photos",
          {
            params: {
                per_page: perPage,
                order_by:"popular"
            },
            headers: {
                Authorization:  `Client-ID ${accessKey}`
            }
          }
        );
        console.log(response.data[0]);
    }
    catch(e){
        console.log(e);
    }
   }
 

export default SearchHeader;

