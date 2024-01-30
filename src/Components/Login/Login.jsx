
import { useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';

function Login(){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
    }

    return(
        <div className='login mx-auto'>
            <div className='login-image-section'>
                <img className='mx-auto' src="../../public/images/loginEntryPointPost.webp" alt="" />
                <h5 className='text-center mt-2'>Helps us become one of the safest places to buy an sell</h5>
            </div>
            <div className='login-form'>
                <form onSubmit={(e) => handleLogin(e)}>
                    <input className='input-login mt-8' type="text"  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='input-login mt-3' type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='login-btn mx-auto mt-5'>Login</button>
                </form>
                <hr className='mt-6 mb-2 hr-line'></hr>
                <button className='create-account-btn' onClick={() => navigate('/register')}>Create New Account</button>
            </div>
        </div>
    )
}

export default Login;