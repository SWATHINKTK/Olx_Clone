import { useContext } from 'react';
import './posts.css';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../Store/ViewPost';

function Posts({ products }){

    const navigate = useNavigate();
    const {setPostDetails} = useContext(PostContext);

    return(
        <div class="mx-auto max-w-screen-xl px-8">
           <div className='pl-2 mt-7'>
                <h4 className='product-view-heading '>Fresh Recommendation</h4>
           </div>
           <div className="flex items-center flex-col md:flex-row justify-left flex-wrap mb-20">
                {
                    products && products.map((product) => (
                        <div className='card' key={product.docId} onClick={() => { setPostDetails(product);  navigate('/view')}}>
                            <img src={product.images[0]} alt="Product" />
                            <div className='card-data'>
                                <span className='price-tag'>₹ {product.price}</span>
                                <span className='product-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, recusandae illum! Adipisci accusantium, rerum esse corporis unde harum similique. Autem voluptatibus harum quidem, non placeat maiores vel ex est aut?</span>
                                <div className='w-100 flex justify-between location-details'>
                                    <span>{product.location}</span>
                                    <span>DEC</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Posts;