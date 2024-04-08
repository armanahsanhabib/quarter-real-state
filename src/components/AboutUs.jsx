import React from 'react';
import { FaHeart, FaHome, FaShieldAlt } from 'react-icons/fa';
import { PiMountainsFill } from 'react-icons/pi';
import AboutImage from '../assets/images/home/about-us.png';

const AboutUs = () => {
    return (
        <div className=''>
            <div className="container max-w-[1280px] mx-auto px-5 lg:mt-[50px] lg:py-[100px] pb-[80px] flex lg:flex-row flex-col gap-x-5 gap-y-10">
                <div className="left lg:w-1/2 flex lg:justify-start justify-center">
                    <img src={AboutImage} alt="About Image" />
                </div>
                <div className="right lg:w-1/2 flex flex-col gap-y-5 lg:text-left lg:items-start items-center text-center">
                    <h6 className='w-max text-[#ff5a3c] font-semibold px-5 py-1 bg-[#ffeeeb] rounded-full'>About Us</h6>
                    <h2 className="sm:text-5xl text-4xl sm:leading-[65px] font-[900]">The Leading Real Estate Rental Marketplace.</h2>
                    <p className="text-gray-500">
                        Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services
                    </p>
                    <ul className="sm:my-8 my-3 grid sm:grid-cols-2 grid-cols-1 gap-5">
                        <li className='flex items-center gap-x-3'>
                            <div className="icon rounded-full p-3 bg-[#ffeeeb] text-[#ff5a3c] text-xl"><FaHome /></div>
                            <h3 className="text text-gray-500">Smart Home Design</h3>
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <div className="icon rounded-full p-3 bg-[#ffeeeb] text-[#ff5a3c] text-xl"><PiMountainsFill /></div>
                            <h3 className="text text-gray-500">Beautiful Scene Around</h3>
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <div className="icon rounded-full p-3 bg-[#ffeeeb] text-[#ff5a3c] text-xl"><FaHeart /></div>
                            <h3 className="text text-gray-500">Exceptional Lifestyle</h3>
                        </li>
                        <li className='flex items-center gap-x-3'>
                            <div className="icon rounded-full p-3 bg-[#ffeeeb] text-[#ff5a3c] text-xl"><FaShieldAlt /></div>
                            <h3 className="text text-gray-500">Complete 24/7 Security</h3>
                        </li>
                    </ul>
                    <p className="px-5 py-5 border-l-[3px] border-l-[#ff5a3c] bg-[#ffeeeb] text-gray-500">
                        "Enimad minim veniam quis nostrud exercitation
                        llamco laboris. Lorem ipsum dolor sit amet"
                    </p>
                    <button className='w-max sm:mt-5 mt-3 py-3 px-8 sm:text-lg text-gray-50 bg-[#ff5a3c]'>OUR SERVICES</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;