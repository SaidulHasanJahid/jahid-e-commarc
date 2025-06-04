import React from 'react';
import LatestPost from './components/latest-post';
import Tab from './components/tab';
import BestMonthOffer from './components/best-month-offer';
import FirstCard from './components/Catagori';
import HeroCarousel from './components/slider';
import DealOfTheDay from './components/deal-of-the-day';

const Home = () => {
    return (
        <div>
            <HeroCarousel />
            <FirstCard />
            <BestMonthOffer />
            <Tab />
            <DealOfTheDay />
            <LatestPost />
            
        </div>
    );
};

export default Home;