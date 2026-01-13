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
import HeroSectionMobile from './(mobile)/_component/HeroSectionMobile';

const page = () => {
  return (
    <main className='p-0 w-full transition min-h-screen'>
      <div className='relative flex-[1_1_auto] max-w-full'>
        <div className='hidden lg:block'>
          <HeroSection />
        </div>
        <div className='flex lg:hidden max-w-full'>
          <HeroSectionMobile />
        </div>
        <ExploreServices />
        <Suspense fallback={<SuspenseFallback title='trending flights' />}>
          <TrendingFlight2 />
        </Suspense>
        <FeatureDeals />
        <RecomendedCars />
        <FeatureProperty />
        <PopularAttraction />
        <div className='hidden lg:block'>
          <FeatureDealsBottom />
        </div>
      </div>
    </main>
  );
};

export default page;
