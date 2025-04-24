import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchHeader = () => {

    const CLIENT_ID = "2_8aQfmPauzwQ17hVfiQOoCIPN_jt-CExMN7Z56aCko";
    const CLIENT_SECRET = "UDPFKWHOYOWb_1G4McShIcljToQOK19EW5mRtyqPHyc";
    const REDIRECT_URI = "http://localhost:3000/";



    const [accessToken, setAccessToken] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');
        if (!code) return;


        const getToken = async () => {
            try {
                const response = await axios.post(
                    'https://unsplash.com/oauth/token',
                    {
                        client_id: CLIENT_ID,
                        client_secret: CLIENT_SECRET,
                        redirect_uri: REDIRECT_URI,
                        code: code,
                        grant_type: 'authorization_code',
                    },
                    {
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
                console.log(response.data.access_token);
                setAccessToken(response.data.access_token);
                window.history.replaceState(null, '', url.pathname);
            } catch (err) {
                setError(err.response?.data || err.message);
                console.log(error);

            }
        };

        getToken();
    }, []);

    const handleLogin = () => {
        const authUrl =
            `https://unsplash.com/oauth/authorize` +
            `?client_id=${CLIENT_ID}` +
            `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
            `&response_type=code` +
            `&scope=public`;
        window.location.href = authUrl;
    };

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

