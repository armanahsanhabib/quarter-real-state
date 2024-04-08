import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { ImHome3 } from 'react-icons/im';
import HeroImage from '../assets/images/hero/hero-image.png';

const Hero = () => {
    return (
        <div className='bg-[#f2f6f7]'>
            <div className="container max-w-[1280px] mx-auto px-5 flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:py-[150px] py-[80px] gap-y-[50px] lg:text-left text-center">
                <div className='lg:max-w-[40%] flex flex-col gap-y-5 lg:items-start items-center'>
                    <h6 className="flex items-center gap-x-2"><ImHome3 className='mb-[2px] text-[#ff5a3c]' /> Real Estate Agency</h6>
                    <h1 className='sm:text-6xl text-5xl font-[800] text-gray-800'>Find Your Dream House By Us</h1>
                    <p className='border-l-[3px] sm:pl-5 pl-3 sm:py-2 py-1  text-gray-600'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae tenetur fugit iste eum impedit! Asperiores magni aliquid accusamus sed nam.
                    </p>
                    <div className="buttons mt-3 flex gap-x-5">
                        <button className='px-5 py-3 sm:text-lg text-md font-semibold text-gray-50 bg-[#ff5a3c] hover:bg-[#e52300] transition-all'>Make An Enquiry</button>
                        <button className='px-4 py-4 sm:text-2xl text-xl rounded-full text-[#ff5a3c]' style={{ boxShadow: "0 0 10px #ccc" }}><BsPlayFill /></button>
                    </div>
                </div>
                <div className='lg:max-w-[50%] max-w-[500px] sm:block hidden'>
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;