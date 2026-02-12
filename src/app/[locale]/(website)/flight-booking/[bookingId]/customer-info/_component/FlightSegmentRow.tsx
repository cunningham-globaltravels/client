'use client';

import { motion } from 'framer-motion';
import { TConfirmPriceSegment } from '@/lib/schemas/server/tiqwa/response/confirm-price-response.schema';
import { format } from 'date-fns';
import { truncateText } from '@/lib/helper/string-manipulator.helper';
import Image from 'next/image';

const FlightSegmentRow = ({ segment }: { segment: TConfirmPriceSegment }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className='rounded-lg bg-transparent p-4'
    >
      <div className='flex justify-between items-start'>
        <div className='flex items-center gap-3 mb-4'>
          <Image
            src={segment.airline_details.logo}
            alt={segment.airline_details.name}
            className='h-6 w-6 object-contain'
          />
          {/* <img src={segment.airline_details.logo} alt='' className='h-6 w-6 object-contain' /> */}
          <div className='inline-block space-x-1 leading-[150%]'>
            <span className='font-medium text-base text-gray-800'>{segment.airline_details.name}</span>
            <span className='font-extralight text-gray-600'>{`(${segment.flight_number})`}</span>
          </div>
        </div>
        <div className='flex items-end justify-end'>
          <span className='text-blue-600 font-medium'>Economy - Class N</span>
        </div>
      </div>
      <div className='border rounded-sm p-3 bg-gray-100'>
        <div className='grid grid-cols-[80px_1fr_320px] gap-0'>
          {/* Timeline */}
          <div className='flex justify-center pt-2'>
            <VerticalDottedLine />
          </div>
          {/* Times & Locations */}
          <div className='space-y-4'>
            <div className='block space-y-0'>
              <p className='text-lg font-semibold'>{format(new Date(segment.departure_time), 'HH:mm')}</p>
              <div className='flex items-start gap-2'>
                <p className='mt-1.5 font-medium text-sm leading-3'>
                  {truncateText(segment.airport_from_details.city, 12)}
                </p>
                <span className='font-bold text-base'>·</span>
                <p className='mt-1.75 font-normal text-sm leading-2.5'>{segment.airport_from_details.iata_code}</p>
              </div>
              <p className='text-muted-foreground text-sm truncate'>{truncateText(segment.airport_from, 16)}</p>
            </div>
            <p className='text-sm text-orange-600 font-bold'>{segment.duration} min</p>
            <div className='block space-y-0'>
              <p className='text-lg font-semibold'>{format(new Date(segment.arrival_time), 'HH:mm')}</p>
              <div className='flex items-start gap-2'>
                <p className='mt-1.5 font-medium text-sm leading-3'>
                  {truncateText(segment.airport_to_details.city, 12)}
                </p>
                <span className='font-bold text-base'>·</span>
                <p className='text-muted-foreground text-sm truncate'>{segment.airport_to_details.iata_code}</p>
              </div>
              <p className='text-muted-foreground text-sm truncate'>{truncateText(segment.airport_to, 16)}</p>
            </div>
          </div>
          {/* Baggage */}
          <div className='flex items-start gap-2 lg:mt-16'>
            <p className='text-muted-foreground'>BAGGAGE:</p>
            <p className=' font-semibold text-base leading-3.5 mt-0.5'>{segment.baggage}</p>
          </div>
          {/* <div>
          <p className='font-semibold'>{format(new Date(segment.departure_time), 'HH:mm')}</p>
          <p className='text-xs text-muted-foreground'>{segment.airport_from_details.iata_code}</p>
        </div> */}
          {/* <div className='text-center'>
          <p className='text-xs text-muted-foreground'>{segment.duration} min</p>
          <div className='h-px bg-border my-1' />
        </div> */}
          {/* <div>
          <p className='font-semibold'>{format(new Date(segment.arrival_time), 'HH:mm')}</p>
          <p className='text-xs text-muted-foreground'>{segment.airport_to_details.iata_code}</p>
        </div> */}
        </div>
      </div>

      {/* <div className='mt-4 text-sm grid grid-cols-2 gap-4'>
        <div>
          <p className='text-muted-foreground'>From</p>
          <p>{segment.airport_from_details.name}</p>
        </div>
        <div>
          <p className='text-muted-foreground'>To</p>
          <p>{segment.airport_to_details.name}</p>
        </div>
        <div>
          <p className='text-muted-foreground'>Baggage</p>
          <p>{segment.baggage}</p>
        </div>
      </div> */}
    </motion.div>
  );
};

function VerticalDottedLine() {
  return (
    <div className='relative flex flex-col items-center'>
      {/* Top small circle */}
      <div className='h-2 w-2 rounded-full border border-muted-foreground bg-background z-10' />

      {/* Dotted line */}
      <div className='h-full w-px border-l border-dashed border-muted-foreground mt-1' />

      {/* Bottom small circle */}
      <div className='h-2 w-2 rounded-full border border-muted-foreground bg-background mt-1' />
    </div>
  );
}

export default FlightSegmentRow;
