import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const FeatureDeals = () => {
  return (
    <section className='w-full max-w-[62rem] mx-auto overflow-hidden my-16'>
      <Card className='relative rounded-xl bg-[#E6F5F9] p-0'>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 overflow-hidden scroll-smooth px-4 '>
            <div className='col-span-2 flex flex-col items-start justify-center gap-4 py-4'>
              <h3 className='font-normal text-xl md:text-3xl lg:text-5xl leading-normal lg:leading-[67.2px]'>
                Dont miss a great deal
              </h3>
              <span className='text-sm md:text-base leading-normal text-[#666666]'>
                Sign in, saave money <br /> save 10% when you signin to use the platform.
              </span>
              <div className='flex items-start gap-4'>
                <Button className='bg-orange-600 hover:bg-amber-700 text-gray-50 hover:text-white'>Login</Button>
                <Button
                  variant={'outline'}
                  className=' border-orange-600 hover:border-orange-700 text-orange-600 hover:text-orange-700 font-semibold'
                >
                  Register
                </Button>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1 transform transition duration-500 hover:scale-105 hover:shadow-xl pt-8'>
                <Image src={'/images/main/sky_plane.png'} alt='Flying Plane' width={184.66} height={187.19} />
                <Image src={'/images/main/dinning_table.png'} alt='Dinning Table' width={184.66} height={187.19} />
              </div>
              <div className='flex flex-col gap-1 transform transition duration-500 hover:scale-105 hover:shadow-xl pb-8'>
                <Image src={'/images/main/space_train.png'} alt='Space Train' width={184.66} height={187.19} />
                <Image src={'/images/main/road_car.png'} alt='Road Car' width={184.66} height={187.19} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FeatureDeals;
