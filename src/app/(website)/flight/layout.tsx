import React from 'react';
import './flight-profile.css';
import FlightSideSection from './FlightSideSection';
import { heroProfileData } from '@/lib/constants/home.constant';
import { Button } from '@/components/ui/button';
import SVGIcon from '@/components/defaults/SVGIcons';

interface ILayoutProps {
  children: React.ReactNode;
}

const FlightLayout = ({ children }: ILayoutProps) => {
  return (
    <section className='flight-wrapper'>
      <div className='flex flex-col gap-8'>
        <div className='wrapper h-[12rem]'>
          <div className='wrapper-overlay'>
            <div className=' container row-rep py-20 lg:py-12'>
              <div className='pb-0'>
                <div className='w-full flex flex-col justify-center items-center gap-2'>
                  <div className='flex flex-col md:flex-row justify-center md:justify-baseline gap-4 md:gap-12 mt-16 '>
                    {heroProfileData.map((profile) => (
                      <div key={profile.name} className='flex flex-col items-center gap-2 w-full'>
                        <Button
                          variant={'outline'}
                          size={'lg'}
                          className='shadow-2xl border-[1px] w-fit hover:bg-orange-50'
                        >
                          <SVGIcon fileName={profile.fileName} alt={profile.alt} />
                          <span className=' font-light text-gray-600 hover:text-gray-800 text-center text-xs md:text-sm leading-5'>
                            {profile.name}
                          </span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='w-full'>
              <FlightSideSection />
            </div>
            <main className='col-span-3'>{children}</main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightLayout;
