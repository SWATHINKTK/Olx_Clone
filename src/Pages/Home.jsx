import Header from '../Components/Header/Header.jsx';
import Posts from '../Components/Posts/Posts.jsx';
import Banner from '../Components/Banner/Banner.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../Config/firebaseConfig.js';

function Home(){

    const [products , setProduct] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "products"))
                .then(data => {
                   const newData = data.docs.map(product => ({...product.data(),docId:product.id}));
                   setProduct(newData);
                })
               
    },[])

    return(
        <>
            <Header />
            <Posts products={products}/>
            <Banner />
            <Footer />
        </>
    )
}

export default Home;