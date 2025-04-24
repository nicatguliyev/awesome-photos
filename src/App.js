import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchHeader from './components/SearchHeader';
import SideBar from './components/SideBar';
import ImageList from './components/ImageList';
import axios from 'axios';

function App() {

  const CLIENT_ID = "c6jZTGYTs3uZRhH4KtbDtLEKnDVnFJErSEG6ESDM3Ao";
  const CLIENT_SECRET = "oulAWYEdk6UDZ0txsC4z14qVtLSEsqTGlltIuYV_z7g";
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
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    if (!code) {
      window.location.href = AUTH_URL;

    }

    else {
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
          setAccessToken(response.data.access_token);
          window.history.replaceState(null, '', url.pathname);
        } catch (err) {
          setError(err.response?.data || err.message);
        }
      };
      getToken();
    }
  }, []);

  return (
    <div className="App">
      <div className='body'>
        <SideBar />
        <div className="main">
          <SearchHeader accessToken = {accessToken} error = {error} />
          <ImageList />
        </div>
      </div>
    </div>
  );
}

export default App;






