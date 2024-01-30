import Home from './Pages/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/login' Component={Login}/>
            <Route path='/register' Component={Signup}/>
        </Routes>
        
    </Router>
  )
}

export default App
