// src/app/[locale]/(website)/flight-booking/_component/BookingStepper.tsx
'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BOOKING_STEPS as STEPS } from '../_config/booking-steps';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BookingStepper = () => {
  const pathname = usePathname();
  const activeIndex = STEPS.findIndex((step) => pathname.includes(step.path));
  return (
    <div className='w-full overflow-x-auto'>
      <div className='flex flex-col lg:flex-row items-center md:justify-between gap-4 min-w-160'>
        <div className='pr-4 flex flex-wrap items-start gap-3.75'>
          <Button variant={'default'} className='bg-orange-600 hover:bg-orange-800 text-white cursor-pointer' asChild>
            <div className='flex items-start gap-4'>
              <ArrowLeft className='h-4 w-4 mt-1' />
              <span className='text-base leading-[150%] capitalize'>Go Back</span>
            </div>
          </Button>
          <h2 className='text-white pb-0 text-2xl mb-3.75 font-medium'>Customer Booking Profile</h2>
        </div>
        <div className='flex items-end justify-end'>
          {STEPS.map((step, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;

            return (
              <div key={step.key} className='flex items-center flex-1'>
                {/* Step circle */}
                <div
                  className={cn('flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold', {
                    'bg-[#E63A24] text-white border-[#E63A24]': isActive,
                    'bg-green-600 text-white border-green-600': isCompleted,
                    'bg-gray-200 text-muted-foreground': !isActive && !isCompleted,
                  })}
                >
                  {index + 1}
                </div>
                {/* Step label */}
                <div className='ml-3'>
                  <p
                    className={cn('text-sm', {
                      'text-white font-semibold': isActive,
                      'text-green-600 font-bold': isCompleted,
                      'text-gray-200 font-light': !isActive && !isCompleted,
                    })}
                  >
                    {step.label}
                  </p>
                </div>
                {/* Connector */}
                {index < STEPS.length - 1 && (
                  <div className={cn('mx-4 h-px flex-1', isCompleted ? 'bg-green-600' : 'bg-border')} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingStepper;
