import React from 'react';
import { BsSliders } from 'react-icons/bs';

const SearchBox = () => {
    return (
        <div className="relative">
            <div
                className='container max-w-[950px] w-[90%] lg:absolute lg:left-[50%] lg:top-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%] rounded-lg my-[50px] lg:my-0 mx-auto bg-gray-50 px-8 py-8'
                style={{ boxShadow: "0 0 15px #ddd" }}
            >
                <form
                    action="#"
                    className='flex md:flex-row flex-col gap-x-5 gap-y-3 items-center justify-between'
                >
                    <select name="area" id="area" className='w-full lg:px-8 px-3 py-3 border border-[#ff5a3c] appearance-none font-bold focus:outline-none'>
                        <option value="0" selected disabled>Choose Area</option>
                        <option value="0">Chicago</option>
                        <option value="0">London</option>
                        <option value="0">Los Angeles</option>
                        <option value="0">New York</option>
                        <option value="0">New Jersey</option>
                    </select>
                    <select name="status" id="status" className='w-full lg:px-8 px-3 py-3 border border-[#ff5a3c] appearance-none font-bold focus:outline-none'>
                        <option value="0" selected disabled>Property Status</option>
                        <option value="0">Open House</option>
                        <option value="0">Rent</option>
                        <option value="0">Sale</option>
                        <option value="0">Sold</option>
                    </select>
                    <select name="type" id="type" className='w-full lg:px-8 px-3 py-3 border border-[#ff5a3c] appearance-none font-bold focus:outline-none'>
                        <option value="0" selected disabled>Property Type</option>
                        <option value="0">Apartment</option>
                        <option value="0">Co-op</option>
                        <option value="0">Condo</option>
                        <option value="0">Single Family</option>
                    </select>
                    <div className="icon text-[#ff5a3c] text-xl"><BsSliders /></div>
                    <input type="submit" value="Find Now" className='lg:px-10 px-8 py-3 bg-[#ff5a3c] hover:bg-[#e52300] text-gray-50' />
                </form>
            </div>
        </div>
    );
};

export default SearchBox;