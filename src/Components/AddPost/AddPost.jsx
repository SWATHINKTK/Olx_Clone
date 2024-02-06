import { useContext, useState } from 'react';
import { db, storage } from '../../Config/firebaseConfig.js';
import './addPost.css';
import ImageUpload from '../ImageUpload/ImageUpload.jsx';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { AuthContext } from '../../Store/Context.jsx';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddPost(){

    const [brandName, setBrandName] = useState('');
    const [adTitle, setAdTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [files, setFile] = useState([]);
    const [location, setLocation] = useState('');
    const [brandNameError, setBrandNameError] = useState('');
    const [adTitleError, setAdTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [filesError, setFileError] = useState([]);
    const [locationError, setLocationError] = useState('');

    const [uploadURL, setUploadURL] = useState([]);

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const showToast = () => {
        toast.success('Successfully added.', {
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

    const handlePost = (e) => {
        e.preventDefault();

        let hasError = false;

        setBrandNameError('');
        setAdTitleError('');
        setDescriptionError('');
        setPriceError('');
        setFileError('');
        setLocationError('');

        if(brandName.trim() === ''){
            setBrandNameError('*brand name is required.');
            hasError = true;
        }

        if(adTitle.trim() === ''){
            setAdTitleError('*title is required.');
            hasError = true;
        }

        if(description.trim() === ''){
            setDescriptionError('*description is required.');
            hasError = true;
        }

        if(price.trim() === ''){
            setPriceError('*price is required.');
            hasError = true;
        }

        if(files.length === 0){
            setFileError('*minimum one image is required.')
        }

        if(location.trim() === ''){
            setLocationError('*location is required.');
            hasError = true;
        }

        if(!hasError){
    
            const promises =   files.map(async file => {
                                        const storageRef = ref(storage, `/images/${Date.now() + '-' + file.name }`)
                                        await uploadBytes(storageRef, file);
                                        return await getDownloadURL(storageRef);
                                    })
        
            Promise.all(promises)
                .then((data) => {
                    addDoc(collection(db, "products"), {
                        id:user.uid,
                        brand:brandName,
                        title:adTitle,
                        description,
                        price,
                        images:data,
                        location,
                        createdAt:new Date()
                    })
                })
                .then(() =>{
                    showToast();
                    setTimeout(() => {
                        setBrandName('');
                        setAdTitle('');
                        setDescription('');
                        setPrice('');
                        setFile('');
                        setLocation('');
                        navigate('/');
                    }, 3000);
                })
            
        }

    }

    return(
        <div className="mx-auto max-w-screen-md mt-10 mb-10">
            <h1 className='text-center font-bold text-2xl'>POST YOUR AD</h1>
            <div className='form-div'>
                <h1 className='text-xl font-bold'>INCLUDE SOME DETAILS</h1>
                <form onSubmit={(e) => handlePost(e)}>
                    <div className='mt-4'>
                        <h6>Brand*</h6>
                        <input type="text" className='input-field' value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
                        {brandNameError && <p className='text-red-500 ml-2 leading-none'>{brandNameError}</p>}
                    </div>
                    <div className='mt-4'>
                        <h6>Ad Title*</h6>
                        <input type="text" className='input-field'value={adTitle} onChange={(e) => setAdTitle(e.target.value)}/>
                        {adTitleError && <p className='text-red-500 ml-2 leading-none'>{adTitleError}</p>}
                    </div>
                    <div className='mt-4'>
                        <h6>Description*</h6>
                        <textarea name="" id="" cols="47" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        {descriptionError && <p className='text-red-500 ml-2 leading-none'>{descriptionError}</p>}
                    </div>
                    <div className='mt-4'>
                        <h6>SET A Price*</h6>
                        <input type="text" className='input-field' value={price} onChange={(e) => setPrice(e.target.value)}/>
                        {priceError && <p className='text-red-500 ml-2 leading-none'>{priceError}</p>}
                    </div>
                    <div className='mt-4'>
                        <h6>Images*</h6>
                        <ImageUpload files={files} setFile={setFile} setFileError={setFileError} />
                        {filesError && <p className='text-red-500 ml-2 leading-none'>{filesError}</p>}
                    </div>
                    {/* <div className='mt-4'>
                        <h6>Images*</h6>
                        <input type="file" className='input-image mt-1' onChange={(e) => setFile(e.target.files[0]) }  accept="image/*"/>
                        <img className='w-[30%] mt-2' src={files && URL.createObjectURL(files)} alt="" />
                        {filesError && <p className='text-red-500 ml-2 leading-none'>{filesError}</p>}
                    </div> */}
                    <div className='mt-4'>
                        <h6>Location*</h6>
                        <input type="text" className='input-field' value={location} onChange={(e) => setLocation(e.target.value)}/>
                        {locationError && <p className='text-red-500 ml-2 leading-none'>{locationError}</p>}
                    </div>
                    <button className='submit-btn'>POST</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddPost;


