import './signup.css';

function Signup(){
    return(
        <div className='signup mx-auto md:mt-16 mt-9'>
            <div className='login-image-section'>
                <img className='mx-auto' src="../../public/images/loginEntryPointPost.webp" alt="" />
                <h5 className='text-center mt-2'>Helps us become one of the safest places to buy an sell</h5>
            </div>
            <div className='login-form'>
                <form>
                    <input className='input-login mt-8' type="text" placeholder='Enter Username' />
                    <input className='input-login mt-3' type="text" placeholder='Enter Phone Number' />
                    <input className='input-login mt-3' type="text" placeholder='Enter Email' />
                    <input className='input-login mt-3' type="text" placeholder='Enter Password' />
                    <button className='login-btn mx-auto mt-5'>Register</button>
                </form>
                <hr className='mt-6 mb-2 hr-line'></hr>
                <button className='create-account-btn'>Already Have an Account</button>
            </div>
        </div>
    )
}

export default Signup;