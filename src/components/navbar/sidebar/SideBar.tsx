import React, { useState } from 'react'
import './SideBar.scss'
interface SideBarProps {
    sidebar: boolean;
    showSidebar: any;
}

const SideBar: React.FC<SideBarProps> = ({ sidebar, showSidebar }) => {

    return (
        <div className='sideBar_box'>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className='sideBar_header'>
                    <img className='sideBar_headerImage' src='https://ik.imagekit.io/dq9uhaniye9/Amazon/SideBar_loginImage_PshuVIhPYR9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646467171690' alt="img"/>
                    <div className='sideBar_headerHello'>Hello,</div>
                    <button onClick={showSidebar} className="sideBar_headerCloseButton">x</button>

                </div>
                
                <div className='sideBar_menuList'>
        
                    <h3 className='sideBar_menuList_Title'>Digital Content & Devices</h3>
                    <div className='sideBar_menuList_item'>Kindle E-readers & Books</div>
                    <div className='sideBar_menuList_item'>Appstore for Android</div>
                    <div className='sideBar_menuList_item'>Shop By Department</div>
                    <div className='sideBar_menuList_item'>Electronics</div>
                    <div className='sideBar_menuList_item'>Computers</div>
                    <div className='sideBar_menuList_item'>Smart Home</div>
                    <div className='sideBar_menuList_item'>Arts & Crafts</div>
                    <div className='sideBar_menuList_item'>See All</div>
                    <hr/>


                    <h3 className='sideBar_menuList_Title'>Programs & Features</h3>
                    <div className='sideBar_menuList_item'>Gift Cards</div>
                    <div className='sideBar_menuList_item'>#FoundItOnAmazon</div>
                    <div className='sideBar_menuList_item'>Amazon Live</div>
                    <div className='sideBar_menuList_item'>International Shopping</div>
                    <div className='sideBar_menuList_item'>See All</div>
                    <hr/>

                    <h3 className='sideBar_menuList_Title'>Help & Settings</h3>
                    <div className='sideBar_menuList_item'>Your Account</div>
                    <div className='sideBar_menuList_item'>English</div>
                    <div className='sideBar_menuList_item'>United States</div>
                    <div className='sideBar_menuList_item'>Customer Service</div>
                    <div className='sideBar_menuList_item'>Sign Out</div>
                    <hr/>
                    
                    











                    
                </div>
            </div>
        </div>
    )
}

export default SideBar