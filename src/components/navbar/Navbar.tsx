import React from 'react'
import "./Navbar.scss"
import { AiOutlineMenu } from 'react-icons/ai';
import SideBar from './sidebar/SideBar';

interface NavbarProps {
    setSidebar: any;
}

const Navbar: React.FC<NavbarProps> = ({setSidebar}) => {
    return (
        <>
            <div className='navbar__component'>
                <div className='navbar_logo'><img src='https://ik.imagekit.io/dq9uhaniye9/Amazon/amazon2_CfP3mnbT4Xm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646413574025' alt="logo" /></div>
                <div className="navbar__locator">
                    <div className="navbar__locatorImage"></div>
                    <div className='navbar_locationpTitleBox'>
                        <div className='navbar_location_title'>Delivery to</div>
                        <div className='navbar_location'>Azerbaijan</div>
                    </div>

                </div>
                <div className='navbar__searchComponent' >
                    <div className='navbar_dropdownBox'>
                        <select className='navbar_dropdown'>
                            <option value="AllDepartments">All</option>
                            <option value="Arts">Arts &amp; Crafts</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty &amp; Personal Care</option>
                            <option value="Books">Books</option>
                            <option value="BoysFashion">Boys' Fashion</option>
                            <option value="Computers">Computers</option>
                            <option value="Deals">Deals</option>
                            <option value="DigitalMusic">Digital Music</option>
                            <option value="Electronics">Electronics</option>
                            <option value="GirlsFashion">Girls' Fashion</option>
                            <option value="Health">Health &amp; Household</option>
                            <option value="Home">Home &amp; Kitchen</option>
                            <option value="Industrial">Industrial &amp; Scientific</option>
                            <option value="KindleStore">Kindle Store</option>
                            <option value="Luggage">Luggage</option>
                            <option value="MenыFashion">Men's Fashion</option>
                            <option value="Movies">Movies &amp; TV</option>
                            <option value="Music">Music, CDs &amp; Vinyl</option>
                            <option value="PetSupplies">Pet Supplies</option>
                            <option value="PrimeVideo">Prime Video</option>
                            <option value="Software">Software</option>
                            <option value="Sports">Sports &amp; Outdoors</option>
                            <option value="Tools">Tools &amp; Home Improvement</option>
                            <option value="Toys">Toys &amp; Games</option>
                            <option value="VideoGames">Video Games</option>
                            <option value="WomenFashion">WomenFashion</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar__searchBox" />
                    </div>
                    <div className='navbar_searchBoxDiv'>
                        <div className="navbar__searchIcon"></div>
                    </div>
                </div>
                <div className="navbar_flag">
                    <img className="navbar_flag_img"src="https://ik.imagekit.io/dq9uhaniye9/Amazon/usaFlag_Qfd36sw43_9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646414788854" alt="usaFlag"/>

                </div>
                <div className='navbar__sighIn'>
                    <div  className='navbar__sighIn_hello'>Hello, Sigh In </div>
                    <div  className='navbar__sighIn_account'>Account & List </div>
                </div>
                <div className='navbar__returns'>
                    <div className='navbar__returns_title'>Return</div>
                    <div  className='navbar__returns_order' > & Order</div>
                </div>
                <div className='navbar__cart'>
                    <div className='cart__image'></div>
                    <div className='cart-item'>0</div>
                    <div style={{ fontWeight: "bold" }} className='navbar_text'>Cart</div>
                </div>
            </div>
            <div className="navbar__footer">
                <div className='menu_iconBox'><AiOutlineMenu className='menu_icon' onClick={setSidebar}/><div>All</div></div>
                <div className="navbar__footer_list">
                    <div> Today's Deals</div>
                    <div> Customer Service</div>
                    <div> Registry</div>
                    <div> Gift Cards</div>
                    <div>Sell</div>

                </div>
            </div>
 
        </>


    )
}

export default Navbar;