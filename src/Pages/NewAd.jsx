import AddPost from "../Components/AddPost/AddPost";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function Ad_Post(){
    console.log('add new post rendered')
    return(
       <>
            <Header/>
            <AddPost/>
            <Footer/> 
       </>
    )
}

export default Ad_Post;