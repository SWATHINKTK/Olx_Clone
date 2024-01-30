import { TiSocialFacebook } from "react-icons/ti";
import { PiInstagramLogoBold } from "react-icons/pi";
import { TiSocialTwitter } from "react-icons/ti";
import { FaRegCirclePlay } from "react-icons/fa6";
import './footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className='footer_first'>
                <div className='footer-links-div mx-auto'>
                    <div className='popular-location-div'>
                        <ul>
                            <h6 className='link-heading'>POPULAR LOCATIONS</h6>
                            <li>Kolkata</li>
                            <li>Mumbai</li>
                            <li>Chennai</li>
                            <li>Pune</li>
                        </ul>
                    </div>
                    <div className='trending-location-div'>
                        <ul>
                            <h6 className='link-heading'>TRENDING LOCATIONS</h6>
                            <li>Bhubaneshwar</li>
                            <li>Mumbai</li>
                            <li>Chandigarh</li>
                            <li>Nashik</li>
                        </ul>
                    </div>
                    <div className='trending-location-div'>
                        <ul>
                            <h6 className='link-heading'>ABOUT US</h6>
                            <li>Contact Us </li>
                        </ul>
                    </div>
                    <div className='trending-location-div'>
                        <ul>
                            <h6 className='link-heading'>OLX</h6>
                            <li>Help</li>
                            <li>Sitemap</li>
                            <li>Legal & Privacy information</li>
                            <li>Vulnerability Disclosure Program</li>
                        </ul>
                    </div>
                    <div className="link-end-section h-100 ">
                        <h6 className='link-heading'>Follows</h6>
                        <div className='social-media-icon'>
                            <TiSocialFacebook className="mr-2"/>
                            <PiInstagramLogoBold className="mr-2"/>
                            <TiSocialTwitter className="mr-2"/>
                            <FaRegCirclePlay />
                        </div>
                        <div className="download-links mt-10">
                            <img src="/public/images/playstore.webp" alt="" />
                            <img src="/public/images/appstore.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_end" >
                <div className="footer_copyright mx-auto">
                    <div className="left_section">
                        <p>Help - Sitemap</p>
                    </div>
                    <div className="right_section">
                        <p>All rights reserved © 2006-2024 OLX</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;