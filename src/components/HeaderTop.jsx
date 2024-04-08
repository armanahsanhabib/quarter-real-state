import React from 'react';
import { BiLogoFacebook, BiLogoPinterest, BiLogoTwitter, BiLogoVimeo } from 'react-icons/bi';
import { CiLocationOn, CiMail } from 'react-icons/ci';

const HeaderTop = () => {
    return (
        <div className='bg-[#0b2c3d]'>
            <div className="container max-w-[1280px] flex items-center md:justify-between justify-center md:py-0 py-2 gap-y-2 flex-col md:flex-row mx-auto sm:px-5 px-0 text-gray-50 sm:text-sm text-[13px]">
                <ul className="left flex items-center">
                    <li><a href="#" className='flex items-center sm:gap-x-2 gap-x-1'><CiLocationOn /> 254 Lillian Blvd, Holbrook </a></li>
                    <span className='text-gray-500 mx-3'>|</span>
                    <li><a href="#" className='flex items-center sm:gap-x-2 gap-x-1'><CiMail /> info@santizex-site.com </a></li>
                </ul>
                <div className="right flex items-center gap-x-3">
                    <ul className='flex items-center gap-x-2'>
                        <li><a href="#"><BiLogoFacebook /></a></li>
                        <li><a href="#"><BiLogoTwitter /></a></li>
                        <li><a href="#"><BiLogoPinterest /></a></li>
                        <li><a href="#"><BiLogoVimeo /></a></li>
                    </ul>
                    <button className='bg-[#ff5a3c] px-3 py-2'>Add Listings</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;