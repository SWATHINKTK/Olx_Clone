import { useState, useContext } from 'react';
import './signup.css';
import FirebaseContext from '../../Store/FirebaseContext';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [username, setUsername] = useState('');
    const [phnNumber, setPhnNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError , setUsernameError] = useState('');
    const [phnNumberError, setPhnNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const { auth, db } = useContext(FirebaseContext);
    const navigate = useNavigate();
    
    const handleRegister = (e) => {
        e.preventDefault();
        
        setUsernameError('');
        setPhnNumberError('');
        setEmailError('');
        setPasswordError('');

        let hasError = false;

        if(username.trim() === ''){
            setUsernameError('*username is required.');
            hasError = true;
        }

        if(phnNumber.trim() === ''){
            setPhnNumberError('*phone number is required.');
            hasError = true;
        }

        if(phnNumber.trim() === ''){
            setPhnNumberError('*phone number is required.');
            hasError = true;
        }

        if(email.trim() === ''){
            setEmailError('*email is required.');
            hasError = true;
        }

        if(password.trim() === ''){
            setPasswordError('*password is required.');
            hasError = true;
        }


        if(!hasError){
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential)
                    addDoc(collection(db, "users"),{
                        id:userCredential.user.uid,
                        username,
                        phoneNumber:phnNumber,
                    })
                    .then(() => {
                        navigate('/login');
                    })
                })
        }




    }

    return (
        <div className='signup mx-auto md:mt-16 mt-9'>
            <div className='login-image-section'>
                <img className='mx-auto' src="../../public/images/loginEntryPointPost.webp" alt="" />
                <h5 className='text-center mt-2'>Helps us become one of the safest places to buy an sell</h5>
            </div>
            <div className='login-form' onSubmit={handleRegister}>
                <form>
                    <input className='input-login mt-8' type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    {usernameError && <p className='text-red-500 ml-2 leading-none'>{usernameError}</p>}
                    <input className='input-login mt-3' type="text" placeholder='Enter Phone Number' value={phnNumber} onChange={(e) => setPhnNumber(e.target.value)} />
                    {phnNumberError && <p className='text-red-500 ml-2 leading-none'>{phnNumberError}</p>}
                    <input className='input-login mt-3' type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p className='text-red-500 ml-2 leading-none'>{emailError}</p>}
                    <input className='input-login mt-3' type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <p className='text-red-500 ml-2 leading-none'>{passwordError}</p>}
                    <button className='login-btn mx-auto mt-5'>Register</button>
                </form>
                <hr className='mt-6 mb-2 hr-line'></hr>
                <button className='create-account-btn' onClick={() => navigate('/login')}>Already Have an Account</button>
            </div>
        </div>
    )
}

export default Signup;