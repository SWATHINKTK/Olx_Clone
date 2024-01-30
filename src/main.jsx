import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import FirebaseContext from './Store/FirebaseContext.jsx'
import { auth, db } from './Config/firebaseConfig.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{auth,db}}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
)
