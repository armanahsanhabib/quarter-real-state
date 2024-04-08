import React from 'react';
import { BiArea } from 'react-icons/bi';
import { LuSofa } from 'react-icons/lu';
import { MdApartment, MdConstruction } from 'react-icons/md';

const Stats = () => {
    const statsData = [
        {
            icon: BiArea,
            number: "560+",
            title: "Total Area Sq"
        },
        {
            icon: MdApartment,
            number: "197K+",
            title: "Apartments Sold"
        },
        {
            icon: MdConstruction,
            number: "268+",
            title: "Total COnstructions"
        },
        {
            icon: LuSofa,
            number: "340+",
            title: "Apartio Room"
        }
    ];

    const StatsItem = (props) => {
        return (
            <div className="item text-center flex flex-col gap-y-2">
                <div className="icon text-[#ff5a3c] text-6xl flex justify-center"><props.icon /></div>
                <div className="numbers font-[900] text-4xl text-gray-800">{props.number}</div>
                <div className="title text-md font-semibold text-gray-500">{props.title}</div>
            </div>
        );
    }

    return (
        <div className='bg-[#f2f6f7]'>
            <div className="container max-w-[1280px] mx-auto px-5 py-[80px] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-10">
                {statsData.map((data, index) => (
                    <StatsItem
                        key={index}
                        icon={data.icon}
                        number={data.number}
                        title={data.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stats;