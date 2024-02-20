import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/MainNavbar.css';

export default function MainNavbar() {
    return (
        // <nav className="flex px-4 border-b md:shadow-lg items-center flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-[#FBFBFB] lg:flex-wrap lg:justify-start">
        //     <div classNameName='navbar_img'>
        //         <img
        //             classNameName="mx-auto h-10 w-auto"
        //             src="./Images/flipkart_icon.png"
        //             alt="Flipkart"
        //             style={{ height:'50px',maxWidth:'150px', borderRadius: '8px' }}
        //         />
        //     </div>
        //     <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        //         <NavLink to={"/"}>
        //             <li>
        //                 <a href='#' className="flex md:inline-flex p-4 items-center hover:bg-gray-50" >
        //                     <span>Home</span>
        //                 </a>
        //             </li>
        //         </NavLink>
        //         <NavLink to={"/products"}>
        //             <li>
        //                 <a href='#' className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
        //                     <span>Products</span>
        //                 </a>
        //             </li>
        //         </NavLink>
        //     </ul>
        // </nav>
        <div className="main_nav" style={{ backgroundColor: "black", zIndex: 2 }}>
            <nav>
                {/* <div className="main_nav"> */}
                <div className='navbar_img' style={{ width: '60px', opacity: 2 }}>
                    <img
                        className="flipkart_logo"
                        src="./Images/flipkart_icon.png"
                        alt="Flipkart"
                        style={{ height: '50px', Width: '60px', borderRadius: '8px' }}
                    />
                </div>
                <ul>
                    <div className="nav_login">
                        <NavLink to={"/login"}>
                            <li>
                                <a href='#' >
                                    Log In
                                </a>
                            </li>
                        </NavLink>
                    </div>
                    <div className="nav_team">
                        <NavLink to={"/team"}>
                            <li>
                                <a href='' >
                                    Team
                                </a>
                            </li>
                        </NavLink>
                    </div>
                    <div className="nav_contact">
                        <NavLink to={"/login"}>
                            <li>
                                <a href='#' >
                                    Contact Us
                                </a>
                            </li>
                        </NavLink>
                    </div>
                    {/* <div className="nav_products">
                        <NavLink to={"/products"}>
                            <li>
                                <a href='#'>
                                    Products
                                </a>
                            </li>
                        </NavLink>
                    </div> */}
                    <div className="nav_home">
                        <NavLink to={"/"}>
                            <li>
                                <a href='#' >
                                    Home
                                </a>
                            </li>
                        </NavLink>
                    </div>
                </ul>
                {/* </div> */}
            </nav>
        </div>
    )
}
