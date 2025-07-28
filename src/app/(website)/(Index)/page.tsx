import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HeroSection from './HeroSection';
import ExploreServices from './ExploreServices';
import TrendingFlight from './TrendingFlight';
import FeatureDeals from './FeatureDeals';
import RecomendedCars from './RecomendedCars';
import PopularAttraction from './PopularAttraction';
import FeatureProperty from './FeatureProperty';
import FeatureDealsBottom from './FeatureDealsBottom';

const page = () => {
  return (
    <main className=' flex p-0 max-w-full transition min-h-screen'>
      <div className=' relative flex-[1_1_auto] max-w-full'>
        <HeroSection />
        <ExploreServices />
        <TrendingFlight />
        <FeatureDeals />
        <RecomendedCars />
        <FeatureProperty />
        <PopularAttraction />
        <FeatureDealsBottom />
      </div>
    </main>
  );
};

export default page;
