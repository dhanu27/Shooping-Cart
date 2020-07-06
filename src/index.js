import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyAXGDbUaDZEXkXFYw6d-Rh29HgL0Cq2TNc",
  authDomain: "cart-ad162.firebaseapp.com",
  databaseURL: "https://cart-ad162.firebaseio.com",
  projectId: "cart-ad162",
  storageBucket: "cart-ad162.appspot.com",
  messagingSenderId: "987705220217",
  appId: "1:987705220217:web:84c647da5df56691cdc8a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


