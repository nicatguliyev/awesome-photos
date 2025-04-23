import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchHeader from './components/SearchHeader';
import SideBar from './components/SideBar';
import ImageList from './components/ImageList';
import axios from 'axios';

function App() {

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
          <SearchHeader />
          <ImageList />
        </div>
      </div>
    </div>
  );
}

export default App;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CLIENT_ID = "...";
// const CLIENT_SECRET = "...";
// const REDIRECT_URI = "http://localhost:3000/";
// const AUTH_URL = 
//   `https://unsplash.com/oauth/authorize` +
//   `?client_id=${CLIENT_ID}` +
//   `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
//   `&response_type=code` +
//   `&scope=public+read_user`;

// async function fetchToken(code) {
//   const res = await axios.post(
//     'https://unsplash.com/oauth/token',
//     { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, redirect_uri: REDIRECT_URI, code, grant_type: 'authorization_code' },
//     { headers: { 'Content-Type': 'application/json' } }
//   );
//   return res.data.access_token;
// }

// function App() {
//   const [accessToken, setAccessToken] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const url = new URL(window.location.href);
//     const code = url.searchParams.get('code');

//     if (!code) {
//       // yan etki: bir kez yönlendir
//       window.location.href = AUTH_URL;
//       return;
//     }

//     fetchToken(code)
//       .then(token => {
//         setAccessToken(token);
//         window.history.replaceState(null, '', url.pathname);
//       })
//       .catch(err => setError(err.response?.data || err.message));

//   }, []); 

//   return (
//     <div className="App">
//       {}
//     </div>
//   );
// }





