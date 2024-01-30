import './postView.css';

function PostView(){
    return(
        <div className="mx-auto max-w-screen-xl flex mt-10 mb-10">
            <div className="w-[65%]  mr-8 left-side">
                <div className='border-2 rounded-md'>
                    <div className='product-image'>
                        <img src="../../public/images/image.jpeg" alt="" />
                    </div>
                    <div className='p-4 flex '>
                       <div className='mr-4 thumb-img'>
                            <img className='rounded-sm' src="../../public/images/image.jpeg" alt="" />
                       </div>
                       <div className='mr-4 thumb-img'>
                            <img className=' rounded-sm' src="../../public/images/image.jpeg" alt="" />
                       </div>
                       <div className='mr-4 thumb-img'>
                            <img className='rounded-sm' src="../../public/images/image.jpeg" alt="" />
                       </div>
                    </div>
                </div>
                <div className='p-3 border-2 details-div-left'>
                    <div className='my-3 mb-4'>
                        <h1>Details</h1>

                    </div>
                    <hr className='hr-line text-xl bg-slate-300' />
                    <div className='mt-4 mb-4'>
                        <h1>Description</h1>
                    </div>
                </div>
                
            </div>
            <div className="w-[32%]">
                <div className='right-product-detail'>
                    <div className='card-data p-4'>
                        <span className='price-tag'>₹  1300</span>
                        <span className='product-details'>Lorem ipsum dolor sit,Lorem ipsum dolor sitLorem ipsum dolor sit</span>
                        <div className='w-100 flex justify-between location-details mt-8'>
                            <span>Mahi</span>
                            <span>DEC</span>
                        </div>
                    </div>
                </div>
                <div className='right-user-detail mt-5'>
                    <div className='card-data p-4'>
                        <span className='price-tag'>Posted</span>
                        <span className='product-details'>Lorem ipsum dolor sit,Lorem ipsum dolor sitLorem ipsum dolor sit</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostView;