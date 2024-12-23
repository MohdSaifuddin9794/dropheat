import React from 'react';
import LiveDrops from '../Common/LiveDrops';
import HomeBanner from '../Common/HomeBanner';
import FeaturedBox from '../Common/FeaturedBox';
import LatestBattels from '../Common/LatestBattels';
import FreshDelivery from '../Common/FreshDelivery';
import Footer from '../Footer/Footer';
import MobileBanner from '../Common/MobileBanner';

const MidContainer = () => {
    return (
        <div className='main-mid-container'>
            <LiveDrops></LiveDrops>
            <HomeBanner></HomeBanner>
            <MobileBanner></MobileBanner>
            <FeaturedBox></FeaturedBox>
            <LatestBattels></LatestBattels>
            <FreshDelivery></FreshDelivery>
            <Footer></Footer>
        </div>
    );
}

export default MidContainer;
