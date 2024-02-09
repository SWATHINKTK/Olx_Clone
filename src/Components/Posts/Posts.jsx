import { useContext } from 'react';
import './posts.css';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../Store/ViewPost';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Config/firebaseConfig';

function Posts(){
    console.log('Post Section rendered')

    const [products , setProduct] = useState([]);
    const navigate = useNavigate();
    const {setPostDetails} = useContext(PostContext);
    

    useEffect(() => {
        getDocs(collection(db, "products"))
                .then(data => {
                   const newData = data.docs.map(product => ({...product.data(),docId:product.id}));
                   setProduct(newData);
                })
               
    },[]);

    const timestampToDateString = (timestamp) => {
        const date = timestamp.toDate();
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
    }



    return(
        <>
            <div className="mx-auto max-w-screen-xl p-8">
                <h1 className='text-2xl'>Fresh recommendations</h1>
                <div className='flex w-[100%] items-center flex-wrap '>
                    {
                         products && products.map((product) => (

                            <div className='card p-2' key={product.docId} onClick={() => { setPostDetails({...product});  navigate('/view')}}>
                                <div className='wishlist-icon'>
                                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                                </div>
                                <div className='w-[100%] max-h-40 h-40'>
                                    <img src={product.images[0]} className='object-cover h-40 w-[100%]' alt="ad image loading.." />
                                </div>
                                <div className='w-[100%] h-100 p-2 '>
                                    <span className='ad-price-tag'> ₹ &nbsp;{product.price}</span>
                                    <p className='ad-card-description'>{product.description}</p>
                                    <div className='flex justify-between pt-4'>
                                        <span className='post-location'>{product.location}</span>
                                        <span className='post-date'>{timestampToDateString(product.createdAt)}</span>
                                    </div>
                                </div>
                            </div>

                         ))
                    }
                </div>
            </div>
        </>
    )
}

export default Posts;