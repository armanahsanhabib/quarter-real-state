import React, { useState } from 'react';
import { BiHeart, BiSearch, BiUser } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/home logo.png';

const Header = () => {
    const [isResponsiveNavOpen, setIsResponsiveNavOpen] = useState(false);

    const handleResponsiveNav = () => {
        setIsResponsiveNavOpen(!isResponsiveNavOpen);
    }

    return (
        <div className='bg-gray-50 shadow-lg sticky top-0 left-0 z-50'>
            <div className="container max-w-[1280px] flex items-center justify-between mx-auto py-5 px-5 text-gray-800">
                <div className="logo">
                    <img src={Logo} alt="logo" className='h-[32px] w-auto' />
                </div>
                <div className="nav flex items-center gap-x-10">
                    <nav className={`${isResponsiveNavOpen ? 'w-screen h-screen fixed top-0 right-0 bg-gray-100 flex flex-col items-center justify-center' : 'hidden'} lg:block`}>
                        <ul className="flex flex-col lg:flex-row gap-y-5 lg:text-md text-lg items-center gap-x-8">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Teams</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">FAQ</a></li>
                            <button
                                className={`absolute lg:hidden text-2xl right-0 top-0 px-5 py-5 text-orange-600`}
                                onClick={() => handleResponsiveNav()}
                            ><FaTimes /></button>
                        </ul>
                    </nav>
                    <div className="buttons flex gap-x-2">
                        <button className="px-2 py-2 shadow text-orange-600 border-[1px] border-gray-100"><BiUser /></button>
                        <button className="px-2 py-2 shadow text-orange-600 border-[1px] border-gray-100"><BiHeart /></button>
                        <button className="px-2 py-2 shadow text-orange-600 border-[1px] border-gray-100"><BiSearch /></button>
                        <button
                            className="lg:hidden visible px-2 py-2 shadow text-orange-600 border-[1px] border-gray-100"
                            onClick={() => handleResponsiveNav()}
                        ><FaBars /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header; 