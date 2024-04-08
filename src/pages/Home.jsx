import React from 'react';
import AboutUs from '../components/AboutUs';
import FeaturedListings from '../components/FeaturedListings';
import Header from '../components/Header';
import HeaderTop from '../components/HeaderTop';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import SearchBox from '../components/SearchBox';
import Stats from '../components/Stats';
import TodaysSells from '../components/TodaysSells';

const Home = () => {
    return (
        <>
            <HeaderTop />
            <Header />
            <Hero />
            <SearchBox />
            <AboutUs />
            <Stats />
            <TodaysSells />
            <OurServices />
            <FeaturedListings />
        </>
    );
};

export default Home;