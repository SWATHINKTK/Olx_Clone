import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import PostView from "../Components/PostView/PostView";

function ProductDetails(){
    console.log('Post detail page rendered')
    return(
        <>
            <Header/>
            <PostView />
            <Footer/>
        </>
    )
}

export default ProductDetails;