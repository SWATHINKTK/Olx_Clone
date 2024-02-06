
import { useNavigate } from 'react-router-dom';
import './login.css';
import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseContext } from '../../Store/Context';
import { ToastContainer, toast, Bounce, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(){
    console.log('Login rendered')

    const navigate = useNavigate();
    const {auth} = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const showToast = (message) => {
        toast.error(message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
      };

    const handleLogin = (e) => {
        e.preventDefault();

        let hasError = false;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        setEmailError('');
        setPasswordError('');

        if(email.trim() === ''){
            setEmailError('*email is required.');
            hasError = true;
        }

        if(!emailRegex.test(email)){
            setEmailError('*email is follows the format.');
            hasError = true;
        }

        if(password.trim() == ''){
            setPasswordError('*password is required.');
            hasError = true;
        }

        if(password.length < 6){
            setPasswordError('*password must be 6 charactes.');
            hasError = true;
        }

        if(!hasError){
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigate('/ ')
                })
                .catch((error) => {
                    switch(error.code){
                        case 'auth/invalid-email' : 
                            return showToast('invalid email please check !.');

                        case 'auth/invalid-credential' :
                            return showToast('password and email does not match !.');

                    }
                })
        }

    }

    return(
        <div className='login mx-auto'>
            <ToastContainer/>
            <div className='login-image-section'>
                <img className='mx-auto' src="../../public/images/loginEntryPointPost.webp" alt="" />
                <h5 className='text-center mt-2'>Helps us become one of the safest places to buy an sell</h5>
            </div>
            <div className='login-form'>
                <form onSubmit={(e) => handleLogin(e)}>
                    <input className='input-login mt-8' type="text"  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p className='text-red-500 ml-2 leading-none'>{emailError}</p>}
                    <input className='input-login mt-3' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <p className='text-red-500 ml-2 leading-none'>{passwordError}</p>}
                    <button className='login-btn mx-auto mt-5'>Login</button>
                </form>
                <hr className='mt-6 mb-2 hr-line'></hr>
                <button className='create-account-btn' onClick={() => navigate('/register')}>Create New Account</button>
            </div>
        </div>
    )
}

export default Login;