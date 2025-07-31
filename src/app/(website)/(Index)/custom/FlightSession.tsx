'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

const flightSchema = z.object({
  comingFrom: z.string().min(2),
  goingTo: z.string().min(2),
  destination: z.string().min(2),
  return: z.string().min(2),
});
type FlightFormValues = z.infer<typeof flightSchema>;

const FlightSession = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlightFormValues>({
    resolver: zodResolver(flightSchema),
  });

  const onSubmit = (data: FlightFormValues) => {
    localStorage.setItem('flightprofile', JSON.stringify(data));
    router.push('/flight/profile');
    //router.push('/flight', { state: { profile: data } });
    //console.log(`Destination Profile recorded: ${data}`);
    // Handle the login logic here (e.g., API call to authenticate)
  };

  return (
    <div className='flight-content'>
      <div className='flight-select'>
        <RadioGroup defaultValue='option-one' className='flex items-center justify-center'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='return' id='return' checked />
            <Label htmlFor='return'>Return</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='one_way' id='one_way' />
            <Label htmlFor='one_way'>One Way</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='multi_city' id='multi_city' />
            <Label htmlFor='multi_city'>Multi City</Label>
          </div>
        </RadioGroup>
      </div>
      <div className=' my-4 box-border'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className='p-0 border-white border-0 rounded-none'>
            <CardContent className='p-0 border shadow-none flex items-start'>
              <div className=' relative flex gap-0 w-full'>
                <div className='flex flex-col gap-0'>
                  <Input
                    type='text'
                    {...register('comingFrom')}
                    className={`px-4 w-full rounded-none focus-visible:ring-0 focus-visible:ring-white focus-visible:bg-white focus-visible:border-none ${
                      errors.comingFrom ? 'border-red-500' : 'border-white'
                    }`}
                    placeholder='Coming from?'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <Input
                    type='text'
                    {...register('goingTo')}
                    className={`px-4 w-full rounded-none focus-visible:ring-0 focus-visible:ring-white focus-visible:bg-white focus-visible:border-none ${
                      errors.goingTo ? 'border-red-500' : 'border-white'
                    }`}
                    placeholder='Going to?'
                  />
                </div>

                <div className='absolute top-3 left-[11.45rem]'>
                  <FaArrowRightArrowLeft className='text-[#3D3D3D]' size={13} />
                </div>
                <div className=' absolute border-gray-300 border-1 h-4 right-0 top-2 -ml-[3px]'></div>
              </div>
              <div className='relative flex gap-0 w-full'>
                <Input
                  type='text'
                  {...register('destination')}
                  className={`px-4 w-full rounded-none focus-visible:ring-0 focus-visible:ring-white focus-visible:bg-white focus-visible:border-none ${
                    errors.destination ? 'border-red-500' : 'border-white'
                  }`}
                  placeholder='Departure'
                />
                <Input
                  type='text'
                  {...register('return')}
                  className={`px-4 w-full rounded-none focus-visible:ring-0 focus-visible:ring-white focus-visible:bg-white focus-visible:border-none ${
                    errors.return ? 'border-red-500' : 'border-white'
                  }`}
                  placeholder='Return'
                />
                <div className=' absolute border-gray-300 border-1 h-4 left-[12.1rem] top-2 -ml-[3px]'></div>
              </div>
              <Button
                size='sm'
                className='bg-[#E63A24] h-[2.3rem] hover:bg-red-700 text-gray-100 rounded-[4px] shadow-lg transform transition-all hover:scale-105'
                type='submit'
              >
                <Search className='w-5 h-5' />
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default FlightSession;
