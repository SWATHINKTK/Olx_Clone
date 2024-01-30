import './banner.css';

function Banner(){
    return(
        <div className="banner">
            <div className="banner-container mx-auto">
                <img src="../../public/images/phone-app.webp" alt="" srcset="" />
                <div className='banner-heading'>
                    <h1>TRY THE OLX APP</h1>
                    <h3>Buy, sell and find just about anything using the app on your mobile.</h3>

                </div>
                <div className='download-section'>
                    <h4>GET YOUR APP TODAY</h4>
                    <div className="download-links ">
                        <img src="/public/images/playstore.webp" alt="" />
                        <img src="/public/images/appstore.webp" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner;