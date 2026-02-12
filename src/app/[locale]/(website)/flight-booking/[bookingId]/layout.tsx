import React from 'react';
import BookingStepper from '../_components/BookingStepper';
import 'react-vertical-timeline-component/style.min.css';
import 'react-phone-number-input/style.css';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function FlightBookingLayout({ children }: ILayoutProps) {
  return (
    <main className=' box-border'>
      <div className='flight-wrapper'>
        <section className='wrapper-content relative pt-7 pb-40'>
          <div className='container flex flex-wrap md:flex-nowrap'>
            <BookingStepper />
          </div>
        </section>
      </div>
      <section className='min-h-screen relative z-10 -mt-40 pt-3.75 pb-15 px-8'>
        <div className='container'>{children}</div>
      </section>
      {/* <div className='flight-wrapper min-h-screen'>
        <div className='flex flex-col gap-8 lg:gap-16'>
          <div className='wrapper-content h-auto lg:h-40'>
            <div className='wrapper-overlay min-h-screen'>
              <div className='container py-20 lg:py-12 mt-4'>
                <BookingStepper />
                <div className='w-full mx-auto lg:max-w-[90%] mt-8'>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
