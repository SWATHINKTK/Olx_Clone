import { useContext } from 'react';
import './postView.css';
import { PostContext } from '../../Store/ViewPost';
import ProductDetails from '../../Pages/ProductDetails';
import { RiArrowRightSLine } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";

function PostView(){

    const {postDetails, setPostDetails} = useContext(PostContext);

    return(
        <div className="mx-auto max-w-screen-xl flex mt-10 mb-10">
            {console.log('sss',postDetails,postDetails.images)}
            <div className="w-[65%]  mr-8 left-side">
                <div className='border-2 rounded-md'>
                    <div className='product-image'>
                        <img src="" alt="" />
                    </div>
                    <div className='p-4 flex '>
                       <div className='mr-4 thumb-img'>
                            {/* <img className='rounded-sm' src={} alt="" /> */}
                       </div>
                       <div className='mr-4 thumb-img'>
                            <img className=' rounded-sm' src="../../public/images/image.jpeg" alt="" />
                       </div>
                       <div className='mr-4 thumb-img'>
                            <img className='rounded-sm' src="../../public/images/image.jpeg" alt="" />
                       </div>
                    </div>
                </div>
                <div className='p-2 pl-4 border-2 details-div-left'>
                    <div className='my-3 mb-4'>
                        <h1 className='mb-3'>Details</h1>
                        <ul className='pl-2'>
                            <li><span className='details'>Title : </span></li>
                            <li><span className='details'>Brand Name : </span></li>
                            <li><span className='details'>Location : </span></li>
                            <li><span className='details'>Ad Posted On : </span></li>
                        </ul>

                    </div>
                    <hr className='hr-line text-xl bg-slate-300' />
                    <div className='mt-4 mb-4'>
                        <h1>Description</h1>
                        <p className='product-description pl-2'>{postDetails.description}</p>
                    </div>
                </div>
                
            </div>
            <div className="w-[32%]">
                <div className='right-product-detail'>
                    <div className='card-data p-5 px-5 '>
                        <div className='flex justify-between'>
                            <span className='price-tag'>₹  {postDetails.price}</span>
                            <div className='flex gap-6'>
                               <FiShare2 size={24}/> 
                               <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-w4DG7" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                            </div>
                        </div>
                        <span className='product-details'>{postDetails.description}</span>
                        <div className='w-100 flex justify-between location-details mt-8'>
                            <span>{postDetails.location}</span>
                            <span>jan 3</span>
                        </div>
                    </div>
                </div>
                <div className='right-user-detail user-account mt-5 p-5 py-5 w-100'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img className='avatar-img'  src="../../public/images/avatar_2.png" alt="loading.." />
                            <h3 className='ml-3 text-lg font-semibold'>Olx User</h3>
                        </div>
                        <div>
                            <RiArrowRightSLine size={32} />
                        </div>
                    </div>
                    <button className='chat-open-btn mt-1'>Chat with Seller</button>
                </div>
                <div className='right-user-detail mt-5 px-1'>
                    <div className='card-data p-4'>
                        <span className='posted-heading'>Posted</span>
                        <span className='posted-location'>{postDetails.location}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostView;