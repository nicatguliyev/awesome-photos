import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchHeader = () => {

    const CLIENT_ID = "2_8aQfmPauzwQ17hVfiQOoCIPN_jt-CExMN7Z56aCko";
    const CLIENT_SECRET = "UDPFKWHOYOWb_1G4McShIcljToQOK19EW5mRtyqPHyc";
    const REDIRECT_URI = "http://localhost:3000/";

    const AUTH_URL =
        `https://unsplash.com/oauth/authorize` +
        `?client_id=${CLIENT_ID}` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
        `&response_type=code` +
        `&scope=public+read_user`;

    const [accessToken, setAccessToken] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        const url  = new URL(window.location.href);
        const code = url.searchParams.get('code');
        if (!code) return;


        const getToken = async () => {
            try {
              const response = await axios.post(
                'https://unsplash.com/oauth/token',
                {
                  client_id:     CLIENT_ID,
                  client_secret: CLIENT_SECRET,
                  redirect_uri:  REDIRECT_URI,
                  code:          code,
                  grant_type:    'authorization_code',
                },
                {
                  headers: { 'Content-Type': 'application/json' }
                }
              );
              // 3) Gelen access_token’ı state’e kaydet
              setAccessToken(response.data.access_token);
              // 4) URL’den ?code parametresini temizle
              window.history.replaceState(null, '', url.pathname);
            } catch (err) {
              // Hata varsa state’e ata
              setError(err.response?.data || err.message);
              
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
            {accessToken && <p>Access Token: {accessToken}</p>}
            {error       && <p style={{ color: "red" }}>Error: {JSON.stringify(error)}</p>}
        </div>

    )
}

export default SearchHeader;

