import './login.css'
function Login(){
    return(
        <div className='login mx-auto'>
            <div className='login-image-section'>
                <img className='mx-auto' src="../../public/images/loginEntryPointPost.webp" alt="" />
                <h5 className='text-center mt-2'>Helps us become one of the safest places to buy an sell</h5>
            </div>
            <div className='login-form'>
                <form>
                    <input className='input-login mt-8' type="text" placeholder='Email' />
                    <input className='input-login mt-3' type="text" placeholder='Password' />
                    <button className='login-btn mx-auto mt-5'>Login</button>
                </form>
                <hr className='mt-6 mb-2 hr-line'></hr>
                <button className='create-account-btn'>Create New Account</button>
            </div>
        </div>
    )
}

export default Login;