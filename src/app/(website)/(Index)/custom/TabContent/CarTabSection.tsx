'use client';
import React from 'react';
import LocationDropDownField from '@/components/defaults/LocationDropDownField';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { carTabSchema, TCarTabSchema } from '@/lib/schemas/website/landing-page.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ConstantCountries as countries } from '@/lib/constants/continental.constant';
import MultiDatePickerField from '@/components/defaults/MultiDatePickerField';
import { TimePickerField } from '@/components/defaults/TimePickerField';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const CarTabSection = () => {
  const router = useRouter();
  const carTabForm = useForm<TCarTabSchema>({
    resolver: zodResolver(carTabSchema),
    defaultValues: {
      location: {
        pickupL: '',
        dropOffL: '',
      },
      rentalDate: [],
      rentalTime: {
        pickupT: '',
        dropoffT: '',
      },
    },
  });

  const { handleSubmit, control } = carTabForm;

  const handleCarRentalInit = (data: TCarTabSchema) => {
    //alert('Just Testing');
    //console.log(data);
    localStorage.setItem('serviceprofile', JSON.stringify(data));
    router.push('/car-rentals/profile');
  };
  return (
    <div className='booking-content'>
      <Card className='w-full p-0 shadow-lg'>
        <Form {...carTabForm}>
          <form onSubmit={handleSubmit(handleCarRentalInit)}>
            <div className='flex items-center h-auto divide-x divide-gray-300'>
              <div className='flex items-start gap-1'>
                <LocationDropDownField<TCarTabSchema>
                  label='Pick up'
                  control={control}
                  name='location.pickupL'
                  locations={countries}
                />
                <LocationDropDownField<TCarTabSchema>
                  label='Drop off'
                  control={control}
                  name='location.dropOffL'
                  locations={countries}
                />
              </div>
              <MultiDatePickerField<TCarTabSchema>
                label='Dates'
                control={control}
                name='rentalDate'
                placeholder='Select Date...'
              />

              <div className='flex items-start gap-4'>
                <TimePickerField<TCarTabSchema>
                  control={control}
                  name='rentalTime.pickupT'
                  placeholder='Select Time...'
                  label='Pick-up time'
                />
                <TimePickerField<TCarTabSchema>
                  control={control}
                  name='rentalTime.dropoffT'
                  placeholder='Select Time...'
                  label='Drop-off time'
                />
              </div>

              <Button
                size='sm'
                className='bg-[#E63A24] h-[2.3rem] hover:bg-red-700 text-gray-100 rounded-[4px] shadow-lg transform transition-all hover:scale-105'
                type='submit'
              >
                <Search className='w-5 h-5' />
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default CarTabSection;
