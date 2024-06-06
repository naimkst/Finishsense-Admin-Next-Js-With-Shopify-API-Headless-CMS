import React from 'react';
import Link from "next/link";
import Logo from '/public/images/logo.png'
import profile from '/public/images/profile.png'
import Image from 'next/image';


const Header = () => {

    return (
        <header>
            <div className="main-header" id="sticky-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-5">
                            <div className="navbar-header">
                                <Link className="navbar-brand site-logo" href="/"><Image
                                    src={Logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-7">
                            <div className="header-right">
                                <div className="search">
                                    <form>
                                        <input type="text" placeholder="search..." className="form-control input-sm r-10 input-bg-none" />
                                        <button className="search-btn"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="right-info">
                                    <ul>
                                        <li><a href="#"><i className='icon-cart25'></i></a></li>
                                        <li><a href="#"><i className='icon-bell'></i><span>2</span></a></li>
                                        <li><a href="#"><i className='icon-contact'></i></a></li>
                                    </ul>
                                </div>
                                <div className="right-profile">
                                    <div className='profile-img'>
                                        <Image src={profile} alt="" />
                                    </div>
                                    <div className='profile-text'>
                                        <h4>Drew Heemstra</h4>
                                        <span>Area Manager</span>
                                    </div>
                                    <div className="submenu">
                                        <ul>
                                            <li><a href="#">Account Profile</a></li>
                                            <li><a href="#">Sign Out</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;

