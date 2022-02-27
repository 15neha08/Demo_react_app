import React from 'react';
import { ReactComponent as Logo } from '../../Assests/home/Logo.svg';
import Facebook from '../../Assests/home/facebook.png';
import Github from '../../Assests/home/github.png';
import Instagram from '../../Assests/home/instagram.png';
import Linkedin from '../../Assests/home/linkedin.png';
import Medium from '../../Assests/home/medium.png';
import Twitter from '../../Assests/home/twitter.png';

import { FooterCantainer } from './styleComponent';
//  const SocialMedialList = [Medium,Twitter,Instagram,Facebook,Linkedin,Github]
 const SocialMedialList = [
    {
        img : Medium,
        url : 'https://medium.com/@zeespark/about',
    },
    {
        img : Twitter,
        url : 'https://twitter.com/zeespark',
    },
    {
        img : Instagram,
        url : 'https://www.instagram.com/zcsindia',
    },
    {
        img : Facebook,
        url : 'https://facebook.com/zcsindia',
    },
    {
        img : Linkedin,
        url : 'https://www.linkedin.com/company/zeespark',
    },
    {
        img : Github,
        url : 'https://github.com/zeespark',
    }

 ]
function Footer(props) {
    const  handleClickFooter = (url) =>{
        window.open(url)
    }
    return (
        <FooterCantainer>
            <div className="footer-items">
                <div className="row w-100 no-gutters">
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div className="footer-logo mx-3">
                            <Logo />
                            <div className="footer-logo-containt pt-2 "> Maybe you’ve heard these different marketing terms, maybe you haven’t. Either way, let me help to clarify the difference</div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12 col-md-6">
                        <div className="d-flex justify-content-between flex-wrap mx-3">
                            <div className="product-list">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="">
                                        <a class="nav-link" href="#">Product Features</a>
                                    </li>
                                    <li class="">
                                        <a class="nav-link" href="#">General Requirements</a>
                                    </li>
                                    <li class="">
                                        <a class="nav-link " href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-list">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="">
                                        <a class="nav-link" href="#">Legal Info</a>
                                    </li>
                                    <li class="">
                                        <a class="nav-link" href="#">Support</a>
                                    </li>
                                    <li class="">
                                        <a class="nav-link " href="#">Pricing</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-list">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="">
                                        <a class="nav-link" href="#">Product Documentation</a>
                                    </li>
                                    <li class="">
                                        <a class="nav-link" href="#">App Downloads</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between flex-wrap py-2 policies">
                    <p className="copy-right">Copyright 2021 | Zeespark Consultancy Services Pvt Ltd | All right reserved</p>
                    <div className='d-flex justify-content-between'>
                        <p className="copy-right">Terms of Service</p>
                        <p className="px-3 copy-right">Privacy Policy</p>
                    </div>
                    <div className='d-flex'>
                        {SocialMedialList.map(val => (
                            <div className='px-2'>
                                <img src={val.img} alt={val.img} className="social_media_icons" onClick={() =>handleClickFooter(val.url)}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </FooterCantainer>
    )
}
export default Footer;