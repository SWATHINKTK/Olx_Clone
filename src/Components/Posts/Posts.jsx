import { useContext } from 'react';
import './posts.css';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../Store/ViewPost';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Config/firebaseConfig';

function Posts(){

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
        console.log(timestamp)
        const date = timestamp.toDate();
        console.log('fdd',date)
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
    }



    return(
        <>
            <div className="mx-auto max-w-screen-xl p-8">
                <div className='flex w-[100%] items-center flex-wrap '>
                    {
                         products && products.map((product) => (

                            <div className='card p-2' key={product.docId} onClick={() => { setPostDetails({...product});  navigate('/view')}}>
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