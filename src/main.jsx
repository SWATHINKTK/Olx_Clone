import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Context, {FirebaseContext} from './Store/Context.jsx'
import { auth, db } from './Config/firebaseConfig.js';
import './index.css';
import ViewPost from './Store/ViewPost.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{auth,db}}>
      <Context>
        <ViewPost>
        <App />
        </ViewPost>
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>,
)
