import React from 'react';
import { BiBath, BiBed, BiCar, BiSquare } from 'react-icons/bi';
import SellLg from '../assets/images/home/sell-lg.png';
import Sell1 from '../assets/images/home/sell1.jpg';
import Sell2 from '../assets/images/home/sell2.jpg';
import Sell3 from '../assets/images/home/sell3.jpg';

const TodaysSells = () => {
    return (
        <div className=''>
            <div className="container max-w-[1280px] mx-auto px-5 sm:py-[100px] py-[50px] flex lg:flex-row flex-col gap-x-10 gap-y-10">
                <div className="left lg:w-1/2 flex flex-col gap-y-5 lg:justify-between lg:items-start items-center lg:text-left text-center">
                    <h6 className='w-max text-[#ff5a3c] font-semibold px-5 py-1 bg-[#ffeeeb] rounded-full'>Todays Sells</h6>
                    <h2 className="sm:text-5xl text-4xl font-[900]">Today Sells Properties</h2>
                    <p className="text-gray-500">
                        Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information
                    </p>
                    <ul className='text-gray-500 flex flex-col gap-y-5 my-5'>
                        <li className='relative'>
                            <span className='w-[16px] h-[2px] bg-[#ff5a3c] absolute top-[50%] -translate-y-[50%]'></span>
                            <span className='ml-[28px]'>Live Music Cocerts at Luviana</span>
                        </li>
                        <li className='relative'>
                            <span className='w-[16px] h-[2px] bg-[#ff5a3c] absolute top-[50%] -translate-y-[50%]'></span>
                            <span className='ml-[28px]'>Our SecretIsland Boat Tour is Just for You</span>
                        </li>
                        <li className='relative'>
                            <span className='w-[16px] h-[2px] bg-[#ff5a3c] absolute top-[50%] -translate-y-[50%]'></span>
                            <span className='ml-[28px]'>Live Music Cocerts at Luviana</span>
                        </li>
                        <li className='relative'>
                            <span className='w-[16px] h-[2px] bg-[#ff5a3c] absolute top-[50%] -translate-y-[50%]'></span>
                            <span className='ml-[28px]'>Live Music Cocerts at Luviana</span>
                        </li>
                    </ul>
                    <div className="flex sm:flex-row flex-col items-bottom text-gray-500 mb-5 gap-y-5">
                        <div className='flex items-bottom'>
                            <div className="sm:w-max w-[100px] flex justify-between flex-col items-center gap-y-2">
                                <h6 className='text-xl'><BiBed /></h6>
                                <h6 className='text-sm'>3 Bedrooms</h6>
                            </div>
                            <div className='border-r border-r-gray-300 mx-5'></div>
                            <div className="sm:w-max w-[100px] flex justify-between flex-col items-center gap-y-2">
                                <h6 className='text-xl'><BiBath /></h6>
                                <h6 className='text-sm'>2 Bathrooms</h6>
                            </div>
                            <div className='sm:block hidden border-r border-r-gray-300 mx-5'></div>
                        </div>
                        <div className='flex items-bottom'>
                            <div className="sm:w-max w-[100px] flex justify-between flex-col items-center gap-y-2">
                                <h6 className='text-xl'><BiCar /></h6>
                                <h6 className='text-sm'>2 Car Parking</h6>
                            </div>
                            <div className='border-r border-r-gray-300 mx-5'></div>
                            <div className="sm:w-max w-[100px] flex justify-between flex-col items-center gap-y-2">
                                <h6 className='text-xl'><BiSquare /></h6>
                                <h6 className='text-sm'>3450 square Ft</h6>
                            </div>
                        </div>
                    </div>
                    <div className="images grid grid-cols-3 gap-5">
                        <img src={Sell1} alt="sell 1" className='w-full' />
                        <img src={Sell2} alt="sell 2" className='w-full' />
                        <img src={Sell3} alt="sell 3" className='w-full' />
                    </div>
                </div>
                <div className="right lg:w-1/2 flex flex-col gap-y-5">
                    <img src={SellLg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TodaysSells;