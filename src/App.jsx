import Home from './Pages/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import NewAd from './Pages/NewAd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './Config/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import './index.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Store/Context';
import ProductDetails from './Pages/ProductDetails';

function App() {

    const { setUser } = useContext(AuthContext);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
        });

        return () => {
            unSubscribe();
        }
    },[]);

    return (
        <Router>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/login' Component={Login}/>
                <Route path='/register' Component={Signup}/>
                <Route path='/newAd' Component={NewAd}/>
                <Route path='/view' Component={ProductDetails}/>
            </Routes>
            
        </Router>
    )
}

export default App
