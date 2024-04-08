import React, { useState } from 'react';
import { AiFillCamera, AiOutlineExpandAlt } from 'react-icons/ai';
import { BiBath, BiBed, BiSquare } from 'react-icons/bi';
import { BsFillStarFill, BsHeart, BsStar, BsStarHalf } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { GoArrowSwitch } from 'react-icons/go';
import { LiaTimesSolid } from 'react-icons/lia';
import { MdLocalMovies, MdOutlineAddCircleOutline, MdOutlineLocationOn } from 'react-icons/md';
import AgentPic from '../assets/images/home/agent.jpg';
import HousePic from '../assets/images/home/expand-card-iamge.png';
import Feat1 from '../assets/images/home/feat1.jpg';


const FeaturedListings = () => {
    const [isCardExpanded, setIsCardExpanded] = useState(false);

    const Card = (props) => {
        return (
            <div className="relative bg-gray-50 shadow-lg flex flex-col sm:gap-y-5 gap-y-3">
                <div className="image-area relative">
                    <img src={Feat1} alt="featured image" />
                    <span className='absolute top-0 right-0 bg-lime-500 text-sm uppercase text-gray-50 px-4 py-1 m-5'>For Rent</span>
                    <div className="location absolute bottom-0 left-0 flex items-center justify-between text-gray-50 box-shadow p-5 bg-gradient-to-b from-transparent to-gray-800 w-full">
                        <h6 className='flex items-center gap-x-1'><MdOutlineLocationOn /> Belmont Gardens, Chicago</h6>
                        <div className="action flex items-center text-md text-gray-50 gap-x-2">
                            <button className='px-2 py-1 bg-[#cccccc55] flex items-center gap-x-1 transparency-[80%]'><AiFillCamera /> 4</button>
                            <button className='px-2 py-1 bg-[#cccccc55] flex items-center gap-x-1 transparency-[80%]'><MdLocalMovies /> 2</button>
                        </div>
                    </div>
                </div>
                <div className="text-area px-8 flex flex-col gap-y-3">
                    <div className="heading">
                        <h3 className="price text-[#ff5a3c] text-lg mb-2"><span className='font-bold'>$34,000</span>/month</h3>
                        <h1 className="title text-gray-800 text-xl font-bold">New Apartment Nice View</h1>
                    </div>
                    <p className="txt text-gray-500 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolorem dicta explicabo minus iure.
                    </p>
                    <div className="flex justify-between items-bottom text-gray-500 my-3 gap-y-5">
                        <div className="flex justify-between flex-col items-center gap-y-2">
                            <h6 className='text-xl'><BiBed /></h6>
                            <h6 className='text-sm'>3 Bedrooms</h6>
                        </div>
                        <div className='border-r border-r-gray-300'></div>
                        <div className="flex justify-between flex-col items-center gap-y-2">
                            <h6 className='text-xl'><BiBath /></h6>
                            <h6 className='text-sm'>2 Bathrooms</h6>
                        </div>
                        <div className='border-r border-r-gray-300'></div>
                        <div className="flex justify-between flex-col items-center gap-y-2">
                            <h6 className='text-xl'><BiSquare /></h6>
                            <h6 className='text-sm'>3450 square Ft</h6>
                        </div>
                    </div>
                </div>
                <div className="agent-area px-8 py-6 border-t flex items-center justify-between">
                    <div className="agent flex items-center gap-x-3">
                        <img className='w-[45px] h-[45px] rounded-full' src={AgentPic} alt="Agent Pic" />
                        <div className="name">
                            <h3 className='text-[16px] font-bold text-gray-800'>William Seklo</h3>
                            <h6 className='text-[14px] text-gray-500'>Estate Agents</h6>
                        </div>
                    </div>
                    <div className="action flex items-center text-gray-500 gap-x-2 text-lg">
                        <button
                            className='p-2 bg-gray-200 hover:text-[#ff6c51] transition-all'
                            onClick={() => setIsCardExpanded(true)}
                        ><AiOutlineExpandAlt /></button>
                        <button className='p-2 bg-gray-200 hover:text-[#ff6c51] transition-all'><BsHeart /></button>
                        <button className='p-2 bg-gray-200 hover:text-[#ff6c51] transition-all'><MdOutlineAddCircleOutline /></button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='relative'>
            <div className="container max-w-[1280px] mx-auto px-5 sm:py-[100px] py-[50px]">
                <div className="flex flex-col items-center gap-y-3">
                    <h6 className='w-max text-[#ff5a3c] font-semibold px-5 py-1 bg-[#ffeeeb] rounded-full'>Properties</h6>
                    <h2 className="sm:text-5xl text-4xl sm:leading-[65px] font-[900]">Featured Listings</h2>
                </div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            {isCardExpanded &&
                <div className="fixed top-0 left-0 z-50 bg-[#000000aa] h-screen w-screen flex justify-center items-center transition-all">
                    <div className="relative max-w-[980px] w-max bg-gray-50 p-8">
                        <div className="grid grid-cols-2 gap-10">
                            <div className="left">
                                <img src={HousePic} alt="House Pic" className='' />
                                <h6 className='flex items-center gap-x-1 p-3'><MdOutlineLocationOn /> Belmont Gardens, Chicago</h6>
                            </div>
                            <div className="right flex flex-col justify-between">
                                <div className="top-txt flex flex-col gap-3">
                                    <div className="reviews text-amber-500 flex items-center gap-x-1 text-sm">
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsStarHalf />
                                        <BsStar />
                                        <h6 className='mt-1 ml-2'>(96 Reviews)</h6>
                                    </div>
                                    <h1 className='text-3xl font-bold'>3 Rooms Manhattan</h1>
                                    <h2 className='font-bold'>
                                        <span className='text-5xl text-[#ff6c51]'>$34,900</span>
                                        <del className='text-4xl text-[#ffb6a8] ml-5'>$36,500</del>
                                    </h2>
                                </div>
                                <hr />
                                <div className="middle-txt text-gray-500">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto facilis laboriosam veritatis neque atque non accusantium repellat explicabo voluptates ullam, sed minima vitae odit.
                                    </p>
                                </div>
                                <hr />
                                <div className="bottom-txt text-gray-500 flex items-center gap-5">
                                    <button className='flex items-center gap-1'><FaRegHeart /> Add to Wishlist</button>
                                    <button className='flex items-center gap-1'><GoArrowSwitch /> Compare</button>
                                    <a href="#" className='ml-auto underline'>View Details</a>
                                </div>
                            </div>
                        </div>
                        <button
                            className="absolute top-0 right-0 p-2 m-3 bg-gray-200 text-lg hover:text-rose-500"
                            onClick={() => setIsCardExpanded(false)}
                        >
                            <LiaTimesSolid />
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default FeaturedListings;