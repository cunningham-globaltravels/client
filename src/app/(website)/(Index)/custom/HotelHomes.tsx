import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { zodResolver } from '@hookform/resolvers/zod';
//import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Calendar1Icon, MapPin, ChevronDown, Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';

const bookingFormSchema = z.object({
  destinationSearch: z.string(),
  checkInDate: z.date(),
  checkOutDate: z.date(),
  guestNumbers: z.object({
    adult: z.number(),
    child: z.number(),
    room: z.number(),
    isPet: z.boolean(),
  }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const HotelHomes = () => {
  const router = useRouter();

  const bookingForm = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      destinationSearch: '',
      checkInDate: undefined,
      checkOutDate: undefined,
      guestNumbers: { adult: 0, child: 0, room: 0, isPet: false },
    },
  });

  const { handleSubmit, control, setValue, getValues } = bookingForm;

  const handleHotelHomeInit = (data: BookingFormValues) => {
    localStorage.setItem('serviceprofile', JSON.stringify(data));
    router.push('/hotelhome/profile');
  };

  const handleAdultUpdate = (isAddition: boolean) => {
    const current = getValues('guestNumbers.adult');
    if (isAddition) {
      setValue('guestNumbers.adult', current + 1);
    } else {
      setValue('guestNumbers.adult', current - 1);
    }
  };
  const handleChildUpdate = (isAddition: boolean) => {
    const current = getValues('guestNumbers.child');
    if (isAddition) {
      setValue('guestNumbers.child', current + 1);
    } else {
      setValue('guestNumbers.child', current - 1);
    }
  };
  const handleRoomUpdate = (isAddition: boolean) => {
    const current = getValues('guestNumbers.room');
    if (isAddition) {
      setValue('guestNumbers.room', current + 1);
    } else {
      setValue('guestNumbers.room', current - 1);
    }
  };
  return (
    <div className='booking-content'>
      <Card className='w-full p-0 shadow-lg'>
        <Form {...bookingForm}>
          <form onSubmit={handleSubmit(handleHotelHomeInit)}>
            <div className='flex items-center h-24 divide-x divide-gray-300'>
              <FormField
                control={control}
                name='destinationSearch'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex-1 relative w-full max-w-sm'>
                        <MapPin className='absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground' />
                        <Input
                          {...field}
                          placeholder='Where are you going?'
                          className='pl-10 w-full border-0 shadow-none rounded-none focus-visible:ring-0 focus-visible:border-none text-sm'
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={control}
                name='checkInDate'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className='px-6'>
                            <Button
                              variant={'ghost'}
                              className='w-[100px] justify-start text-left font-normal p-0 h-auto shadow-none hover:bg-transparent'
                            >
                              <div className='flex flex-col'>
                                <span className='text-xs font-medium text-gray-500 uppercase'>Check In</span>
                                <span className='text-sm'>
                                  {field.value
                                    ? field.value.toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: '2-digit',
                                      })
                                    : 'Check In'}
                                </span>
                              </div>
                              <Calendar1Icon className='ml-2 h-4 w-4' />
                            </Button>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={control}
                name='checkOutDate'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className='px-6'>
                            <Button
                              variant={'ghost'}
                              className='w-[100px] justify-start text-left font-normal p-0 h-auto shadow-none hover:bg-transparent'
                            >
                              <div className='flex flex-col'>
                                <span className='text-xs font-medium text-gray-500 uppercase'>Check Out</span>
                                <span className='text-sm'>
                                  {field.value
                                    ? field.value.toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: '2-digit',
                                      })
                                    : 'Check Out'}
                                </span>
                              </div>
                              <Calendar1Icon className='ml-2 h-4 w-4' />
                            </Button>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={control}
                name='guestNumbers'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='px-6'>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={'ghost'}
                              className='w-full overflow-x-hidden justify-start text-left font-normal p-0 h-auto shadow-none hover:bg-transparent'
                            >
                              <div className='flex flex-col'>
                                <span className='text-xs font-medium text-gray-500 uppercase'>Guest Profile</span>
                                <span className='text-sm'>
                                  {field
                                    ? `${field.value.adult} adults . ${field.value.child} children. ${field.value.room} room`
                                    : `Select Guest Profile`}
                                </span>
                              </div>
                              <ChevronDown className='ml-2 h-4 w-4' />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className='w-[220px] flex items-center justify-center overflow-hidden p-0'
                            align='start'
                          >
                            <div className='w-full flex flex-col gap-4 px-4 py-6'>
                              <div className='flex items-center justify-center space-x-2'>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-8 w-8 shrink-0 rounded-full text-gray-600 disabled:text-gray-400 cursor-pointer disabled:cursor-default'
                                  onClick={() => handleAdultUpdate(false)}
                                  disabled={field.value.adult <= 0}
                                >
                                  <Minus />
                                  <span className='sr-only'>Reduce Adult</span>
                                </Button>
                                <div className='flex-1 text-center'>
                                  <div className='text-xl font-bold tracking-tighter'>{field.value.adult}</div>
                                  <div className='text-gray-500 text-xs uppercase'>Adults</div>
                                </div>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-8 w-8 shrink-0 rounded-full text-gray-600 disabled:text-gray-300 cursor-pointer disabled:cursor-default'
                                  // onClick={() =>
                                  //   setValue('guestNumbers.adult', alert(""), { shouldValidate: true })
                                  // }
                                  onClick={() => handleAdultUpdate(true)}
                                  disabled={field.value.adult >= 50}
                                >
                                  <Plus />
                                  <span className='sr-only'>Increase Adult</span>
                                </Button>
                              </div>
                              <div className='flex items-center justify-center space-x-2'>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-8 w-8 shrink-0 rounded-full text-gray-600 disabled:text-gray-400 cursor-pointer disabled:cursor-default'
                                  onClick={() => handleChildUpdate(false)}
                                  disabled={field.value.child <= 0}
                                >
                                  <Minus />
                                  <span className='sr-only'>Reduce Child</span>
                                </Button>
                                <div className='flex-1 text-center'>
                                  <div className='text-xl font-bold tracking-tighter'>{field.value.child}</div>
                                  <div className='text-gray-500 text-xs uppercase'>
                                    {field.value.child > 1 ? 'Children' : 'Child'}
                                  </div>
                                </div>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-8 w-8 shrink-0 rounded-full text-gray-600 disabled:text-gray-300 cursor-pointer disabled:cursor-default'
                                  onClick={() => handleChildUpdate(true)}
                                  disabled={field.value.child >= 50}
                                >
                                  <Plus />
                                  <span className='sr-only'>Increase Child</span>
                                </Button>
                              </div>
                              <div className='flex items-center justify-center space-x-2'>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-8 w-8 shrink-0 rounded-full text-gray-600 disabled:text-gray-400 cursor-pointer disabled:cursor-default'
                                  onClick={() => handleRoomUpdate(false)}
                                  disabled={field.value.room <= 0}
                                >
                                  <Minus />
                                  <span className='sr-only'>Reduce Room</span>
                                </Button>
                                <div className='flex-1 text-center'>
                                  <div className='text-xl font-bold tracking-tighter'>{field.value.room}</div>
                                  <div className='text-gray-500 text-xs uppercase'>
                                    {field.value.room > 1 ? 'Rooms' : 'Room'}
                                  </div>
                                </div>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-8 w-8 shrink-0 rounded-full text-gray-600 disabled:text-gray-300 cursor-pointer disabled:cursor-default'
                                  onClick={() => handleRoomUpdate(true)}
                                  disabled={field.value.room >= 50}
                                >
                                  <Plus />
                                  <span className='sr-only'>Increase Room</span>
                                </Button>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default HotelHomes;
