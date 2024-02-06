import Header from '../Components/Header/Header.jsx';
import Banner from '../Components/Banner/Banner.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import React, { Suspense, lazy } from 'react';
import Loader from '../Components/Loader/Loader.jsx';
const  Posts = lazy(() => import('../Components/Posts/Posts.jsx'));

function Home(){
    console.log('Home Rendered')

    return(
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Posts />
            </Suspense>
            <Banner />
            <Footer />
        </>
    )
}

export default Home;