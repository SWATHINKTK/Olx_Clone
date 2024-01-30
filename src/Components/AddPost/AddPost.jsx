import './addPost.css';

function AddPost(){
    return(
        <div className="mx-auto max-w-screen-md mt-10 ">
            <h1 className='text-center font-bold text-2xl'>POST YOUR AD</h1>
            <div className='form-div'>
                <h1 className='text-xl font-bold'>INCLUDE SOME DETAILS</h1>
                <form action="">
                    <div className='mt-4'>
                        <h6>Brand*</h6>
                        <input type="text" className='input-field'/>
                    </div>
                    <div className='mt-4'>
                        <h6>Ad Title*</h6>
                        <input type="text" className='input-field'/>
                    </div>
                    <div className='mt-4'>
                        <h6>Description*</h6>
                        <textarea name="" id="" cols="47" rows="3"></textarea>
                    </div>
                    <div className='mt-4'>
                        <h6>SET A Price*</h6>
                        <input type="text" className='input-field'/>
                    </div>
                    <div className='mt-4'>
                        <h6>Location*</h6>
                        <input type="text" className='input-field'/>
                    </div>
                    <button className='submit-btn'>POST</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost;