import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import BuyHome from '../assets/images/home/buy-home.png';
import RentHome from '../assets/images/home/rent-home.png';
import SellHome from '../assets/images/home/sell-home.png';

const OurServices = () => {
    const Card = (props) => {
        return (
            <div className="bg-gray-50 px-8 py-10 border-b-[3px] border-b-[#ff5a3c] shadow-lg flex flex-col sm:gap-y-5 gap-y-3 items-center text-center">
                <img src={props.image} alt={props.title} />
                <h2 className='text-2xl font-[900]'>{props.title}</h2>
                <p className='text-sm font-[300]'>
                    over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                </p>
                <a href="#" className='flex items-center gap-x-2 text-gray-500 hover:text-[#ff5a3c] transition-all font-semibold'>Find a Home <BsArrowRight /></a>
            </div>
        );
    }
    return (
        <div className='bg-[#f2f6f7]'>
            <div className="container max-w-[1280px] mx-auto px-5 sm:py-[100px] py-[50px]">
                <div className="flex flex-col items-center gap-y-3">
                    <h6 className='w-max text-[#ff5a3c] font-semibold px-5 py-1 bg-[#ffeeeb] rounded-full'>Our Services</h6>
                    <h2 className="sm:text-5xl text-4xl sm:leading-[65px] font-[900]">Our Main Focus</h2>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10">
                    <Card image={BuyHome} title="Buy a Home" />
                    <Card image={RentHome} title="Rent a Home" />
                    <Card image={SellHome} title="Sell a Home" />
                </div>
            </div>
        </div>
    );
};

export default OurServices;