import React, { Suspense } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HeroSection from './HeroSection';
import ExploreServices from './ExploreServices';
//import TrendingFlight from './TrendingFlight';
import FeatureDeals from './FeatureDeals';
import RecomendedCars from './RecomendedCars';
import PopularAttraction from './PopularAttraction';
import FeatureProperty from './FeatureProperty';
import FeatureDealsBottom from './FeatureDealsBottom';
import SuspenseFallback from '@/components/defaults/SuspenseFallback';
import TrendingFlight2 from './TrendingFlight2';

const page = () => {
  return (
    <main className=' flex p-0 max-w-full transition min-h-screen'>
      <div className=' relative flex-[1_1_auto] max-w-full'>
        <HeroSection />
        <ExploreServices />
        <Suspense fallback={<SuspenseFallback title='trending flights' />}>
          <TrendingFlight2 />
        </Suspense>
        {/* <TrendingFlight /> */}
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
