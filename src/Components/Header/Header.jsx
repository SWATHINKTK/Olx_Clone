import Olx_Logo from "../../assets/Olx_Logo";
import Arrow from "../../assets/Arrow";
import Sell from "../../assets/Sell";
import { IoIosSearch } from "react-icons/io";
import { TiPlus } from "react-icons/ti";
import './header.css';
import { useContext } from "react";
import { AuthContext, FirebaseContext } from "../../Store/Context";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



function Header(){

    const { user } = useContext(AuthContext);
    const { auth } = useContext(FirebaseContext);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        signOut(auth)
            .then(() => {
                navigate('/');
                setUser();
            })
    }

    return(
        <>
            <div className='header '>
                <div className="header-sections w-100">
                    <div>
                        <Olx_Logo/>
                    </div>
                    <div className="header-text-section">
                        <div className="select-state">
                            <IoIosSearch/>
                            <input type="text" value='Andaman & Nicobar Islands' />
                            <Arrow />
                        </div>
                        <div className="search-area">
                            <div className="search-section">
                                <input type="text" placeholder="Find Cars, Mobiles Phone and more..." />
                            </div>
                            <button className="text-white"><IoIosSearch/></button>
                        </div>
                        <div className="language-section">
                            <select name="" id="">
                                <option value="English">ENGLISH</option>
                                <option value="hindi">Hindi</option>
                            </select>
                            <Arrow/>
                        </div>
                        <div className="login-sts">
                            { user ? <a href="#" onClick={(e) => handleLogout(e)}>Logout</a> : <a href="#" onClick={() => navigate('/login')}>Login</a>  }
                        </div>
                        <div className="sell-btn-section">
                           <button onClick={() => user ? navigate('/newAd') : navigate('/login')}>
                                <div className="flex items-center">
                                    <TiPlus/> 
                                    <span>SELL</span>
                                </div>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        <div className="category-section ">
           <div className="category-data">
                <div className="all-categories">
                    <span className="mr-2 font-bold">All Categories</span>
                    <Arrow />
                </div>
                <ul className="other-categories">
                    <li>Cars</li>
                    <li>Motorcycles</li>
                    <li>Mobile Phones</li>
                    <li>For Sale: Houses & Apartments</li>
                    <li>Scooters</li>
                    <li>Commercial & Other Vehicles</li>
                    <li>For Rent: Houses & Apartments</li>
                </ul>
           </div>
        </div>
        </>
    )
}

export default Header;