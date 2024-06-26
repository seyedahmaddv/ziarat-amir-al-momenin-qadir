import React, { useState } from 'react';
import './App.css';
import MyText from './MyText.jsx';
import haram from './assets/haram-najaf.jpg';
import LoginForm2 from './LoginForm2.jsx';

import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  // پیکربندی Firebase خود را اینجا وارد کنید
  apiKey: "AIzaSyD2la4pheuYgpIFeu2H2CyGuvtm9-TCMwo",
  authDomain: "ziarat-amir-al-momenin.firebaseapp.com",
  projectId: "ziarat-amir-al-momenin",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
});

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  firebase.auth().onAuthStateChanged((user)=> {
    setIsloggedIn(!!user);
  });

  return (
    <>
      <LoginForm2 />     
      <div>
        <img src={haram} alt='حرم امیرالمومنین علی علیه السلام' />
        <h1>زیارت امیرالمومنین علی علیه السلام در روز غدیر</h1>
        <MyText />
        {isLoggedIn && <button>Add Comment</button>}
      </div>
    </>
  )
}

export default App;