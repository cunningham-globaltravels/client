'use client';
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar1Icon, ChevronDown, Minus, Plus, Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { ConstantCountries as countries } from '@/lib/constants/continental.constant';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Separator } from '@/components/ui/separator';
import { X } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select';
import { FlightTypeConstant as typeConst } from '@/lib/constants/default-layout.constant';
import { Switch } from '@/components/ui/switch';

const flightFormSchema = z.object({
  leavingFrom: z.string().min(2),
  goingTo: z.string().min(2),
  departureDate: z.date(),
  returnDate: z.date(),
  guestNumber: z.object({
    adult: z.number(),
    child: z.number(),
    isInfant: z.boolean(),
    type: z.string(),
    totalGuest: z.number(),
  }),
});
type TFlightFormValues = z.infer<typeof flightFormSchema>;

const FlightSession = () => {
  const router = useRouter();
  const [openLeavingFrom, setOpenLeavingFrom] = useState(false);
  const [openGoingTo, setOpenGoingTo] = useState(false);

  const flightForm = useForm<TFlightFormValues>({
    resolver: zodResolver(flightFormSchema),
    defaultValues: {
      leavingFrom: '',
      goingTo: '',
      departureDate: undefined,
      returnDate: undefined,
      guestNumber: {
        adult: 0,
        child: 0,
        isInfant: false,
        type: '',
        totalGuest: 0,
      },
    },
  });

  const { handleSubmit, control, setValue, watch } = flightForm;

  // Group countries by continent
  const grouped = countries.reduce((acc: Record<string, string[]>, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.countryName);
    return acc;
  }, {});

  const continents = Object.keys(grouped);

  const adultNumber = watch('guestNumber.adult');
  const childNumber = watch('guestNumber.child');
  watch('guestNumber.type');
  const totalNumber = watch('guestNumber.totalGuest');

  const handleAdultUpdate = (isAddition: boolean) => {
    if (isAddition) {
      setValue('guestNumber.adult', adultNumber + 1);
      setValue('guestNumber.totalGuest', totalNumber + 1);
    } else {
      setValue('guestNumber.adult', adultNumber - 1);
      setValue('guestNumber.totalGuest', totalNumber - 1);
    }
  };

  const handleChildUpdate = (isAddition: boolean) => {
    if (isAddition) {
      setValue('guestNumber.child', childNumber + 1);
      setValue('guestNumber.totalGuest', totalNumber + 1);
    } else {
      setValue('guestNumber.adult', childNumber - 1);
      setValue('guestNumber.totalGuest', totalNumber - 1);
    }
  };

  const handleFlightInit = (data: TFlightFormValues) => {
    localStorage.setItem('serviceprofile', JSON.stringify(data));
    router.push('/flight/profile');
    //router.push('/flight', { state: { profile: data } });
    //console.log(`Destination Profile recorded: ${JSON.stringify(data)}`);
    // Handle the login logic here (e.g., API call to authenticate)
  };

  return (
    <div className='flex flex-col gap-4 items-start'>
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
      <div className='flight-content'>
        <Card className='w-full p-0 shadow-lg'>
          <Form {...flightForm}>
            <form onSubmit={handleSubmit(handleFlightInit)}>
              <div className='flex items-center h-24 divide-x divide-gray-300'>
                <FormField
                  control={control}
                  name='leavingFrom'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              role='combobox'
                              aria-expanded={openLeavingFrom}
                              variant='ghost'
                              className='w-full lg:w-[200px] justify-start text-left p-0 h-auto shadow-none hover:bg-gray-50 cursor-pointer'
                            >
                              <div className='flex flex-col'>
                                <span className='text-xs font-medium text-gray-500 uppercase mx-2'>Leaving From</span>
                                <div className='flex items-center box-border cursor-pointer text-sm h-12 leading-10 rounded px-4 py-0'>
                                  {countries && field.value ? (
                                    <div className='flex items-start justify-between gap-4 text-ellipsis bg-gray-100 px-4 w-full overflow-hidden whitespace-nowrap font-normal text-[#051a37]'>
                                      {countries.find((country) => country.countryName === field.value)?.countryName}
                                      <div
                                        onClick={() => setValue('leavingFrom', '')}
                                        className='mt-2 rounded-full p-1 bg-gray-300 cursor-pointer hover:bg-gray-400'
                                      >
                                        <X />
                                      </div>
                                    </div>
                                  ) : (
                                    <span className='font-medium text-gray-400 text-xs'>Select Location...</span>
                                  )}
                                </div>
                              </div>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0 overflow-hidden'>
                            <Command>
                              <CommandInput placeholder='Select Country...' className='h-9' />
                              <CommandList>
                                {continents.map((continent, index) => (
                                  <CommandGroup className='px-4 py-2' key={index} heading={continent}>
                                    <div className=' box-border w-full pt-4 rounded-br-lg rounded-bl-lg'>
                                      <div className='box-border h-full overflow-x-hidden overflow-y-auto pt-0 pb-6 px-4'>
                                        <div className='grid grid-cols-[repeat(3,150px)]'>
                                          {grouped[continent].sort().map((country, index) => (
                                            <CommandItem
                                              key={index}
                                              value={country}
                                              onSelect={(currentValue) => {
                                                setValue(
                                                  'leavingFrom',
                                                  currentValue === field.value ? '' : currentValue
                                                );
                                                setOpenLeavingFrom(false);
                                              }}
                                            >
                                              {country}
                                            </CommandItem>
                                          ))}
                                        </div>
                                      </div>
                                    </div>

                                    <Separator className='my-1' />
                                  </CommandGroup>
                                ))}
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={control}
                  name='goingTo'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant='ghost'
                              className='w-full lg:w-[200px] justify-start text-left p-0 h-auto shadow-none hover:bg-gray-50 cursor-pointer'
                              role='combobox'
                              aria-expanded={openGoingTo}
                            >
                              <div className='flex flex-col'>
                                <span className='text-xs font-medium text-gray-500 uppercase mx-2'>Destination</span>
                                <div className='flex items-center box-border cursor-pointer text-sm h-12 leading-10 rounded px-4 py-0'>
                                  {countries && field.value ? (
                                    <div className='flex items-start justify-between gap-4 text-ellipsis bg-gray-100 px-4 w-full overflow-hidden whitespace-nowrap font-normal text-[#051a37]'>
                                      {countries.find((country) => country.countryName === field.value)?.countryName}
                                      <div
                                        onClick={() => setValue('goingTo', '')}
                                        className='mt-2 rounded-full p-1 bg-gray-300 cursor-pointer hover:bg-gray-400'
                                      >
                                        <X />
                                      </div>
                                    </div>
                                  ) : (
                                    <span className='font-medium text-gray-600 text-xs'>Select Location...</span>
                                  )}
                                </div>
                              </div>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0 overflow-hidden'>
                            <Command>
                              <CommandInput placeholder='Select Country...' className='h-9' />
                              <CommandList>
                                {continents.map((continent, index) => (
                                  <CommandGroup className='px-4 py-2' key={index} heading={continent}>
                                    <div className=' box-border w-full pt-4 rounded-br-lg rounded-bl-lg'>
                                      <div className='box-border h-full overflow-x-hidden overflow-y-auto pt-0 pb-6 px-4'>
                                        <div className='grid grid-cols-[repeat(3,150px)]'>
                                          {grouped[continent].sort().map((country, index) => (
                                            <CommandItem
                                              key={index}
                                              value={country}
                                              onSelect={(currentValue) => {
                                                setValue('goingTo', currentValue === field.value ? '' : currentValue);
                                                setOpenGoingTo(false);
                                              }}
                                            >
                                              {country}
                                            </CommandItem>
                                          ))}
                                        </div>
                                      </div>
                                    </div>

                                    <Separator className='my-2' />
                                  </CommandGroup>
                                ))}
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={control}
                  name='departureDate'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={'ghost'}
                              className='w-full justify-start text-left font-normal p-0 h-auto shadow-none hover:bg-gray-50 cursor-pointer'
                            >
                              <div className='flex flex-col'>
                                <span className=' mx-2 text-xs font-medium text-gray-500 uppercase'>
                                  Departure Date
                                </span>
                                <div className='flex items-center box-border cursor-pointer text-sm h-12 leading-10 rounded px-4 py-0'>
                                  {field.value ? (
                                    <span className='w-full overflow-hidden whitespace-nowrap font-normal text-[#051a37]'>
                                      {field.value.toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: '2-digit',
                                      })}
                                    </span>
                                  ) : (
                                    <span className='font-medium text-gray-600 text-xs'>Select Date...</span>
                                  )}
                                  <Calendar1Icon className='ml-2 h-4 w-4' />
                                </div>
                              </div>
                            </Button>
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
                  name='returnDate'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={'ghost'}
                              className='w-full justify-start text-left font-normal p-0 h-auto shadow-none hover:bg-gray-50 cursor-pointer'
                            >
                              <div className='flex flex-col'>
                                <span className=' mx-2 text-xs font-medium text-gray-500 uppercase'>Return Date</span>
                                <div className='flex items-center box-border cursor-pointer text-sm h-12 leading-10 rounded px-4 py-0'>
                                  {field.value ? (
                                    <span className='w-full overflow-hidden whitespace-nowrap font-normal text-[#051a37]'>
                                      {field.value.toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: '2-digit',
                                      })}
                                    </span>
                                  ) : (
                                    <span className='font-medium text-gray-600 text-xs'>Select Date...</span>
                                  )}
                                  <Calendar1Icon className='ml-2 h-4 w-4' />
                                </div>
                              </div>
                            </Button>
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
                  name='guestNumber'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={'ghost'}
                              className='w-full overflow-x-hidden justify-start text-left font-normal p-0 h-auto shadow-none hover:bg-gray-50'
                            >
                              <div className='flex flex-col'>
                                <span className='mx-1 text-xs font-medium text-gray-500 uppercase'>Guest Profile</span>
                                <div className='flex items-center box-border cursor-pointer text-sm h-12 leading-10 rounded px-0 py-0'>
                                  {field.value.totalGuest > 0 ? (
                                    <span className='w-full overflow-hidden whitespace-nowrap font-normal text-[#051a37] text-[9px]'>
                                      {`${field.value.totalGuest} Guest expected, ${field.value.type}`}
                                    </span>
                                  ) : (
                                    <span className='font-medium text-gray-600 text-xs'>Select Profile...</span>
                                  )}
                                </div>
                              </div>
                              <ChevronDown className='ml-2 h-4 w-4' />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-[220px] flex items-center justify-center overflow-hidden p-0'>
                            <div className='w-full flex flex-col gap-4 px-4 py-6'>
                              <div className='flex items-center justify-center space-x-2'>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-6 w-6 shrink-0 rounded-full text-gray-600 disabled:text-gray-400 cursor-pointer disabled:cursor-default'
                                  onClick={() => handleAdultUpdate(false)}
                                  disabled={adultNumber <= 0}
                                >
                                  <Minus />
                                  <span className='sr-only'>Decrease Adult</span>
                                </Button>
                                <div className='flex-1 text-center'>
                                  <div className='text-lg font-bold tracking-tighter'>{adultNumber}</div>
                                  <div className='text-gray-500 text-[10px] uppercase'>Adults</div>
                                </div>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-6 w-6 shrink-0 rounded-full text-gray-600 disabled:text-gray-400 cursor-pointer disabled:cursor-default'
                                  onClick={() => handleAdultUpdate(true)}
                                  disabled={adultNumber >= 50}
                                >
                                  <Plus />
                                  <span className='sr-only'>Increase Adult</span>
                                </Button>
                              </div>
                              <div className='flex items-center justify-center space-x-2'>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-6 w-6 shrink-0 rounded-full text-gray-600 disabled:text-gray-400 cursor-pointer disabled:cursor-default'
                                  onClick={() => handleChildUpdate(false)}
                                  disabled={childNumber <= 0}
                                >
                                  <Minus />
                                  <span className='sr-only'>Decrease Child</span>
                                </Button>
                                <div className='flex-1 text-center'>
                                  <div className='text-lg font-bold tracking-tighter'>{childNumber}</div>
                                  <div className='text-gray-500 text-[10px] uppercase'>Children</div>
                                </div>
                                <Button
                                  variant='outline'
                                  size='icon'
                                  className='h-6 w-6 shrink-0 rounded-full text-gray-600 disabled:text-gray-400 cursor-pointer disabled:cursor-default'
                                  onClick={() => handleChildUpdate(true)}
                                  disabled={childNumber >= 50}
                                >
                                  <Plus />
                                  <span className='sr-only'>Increase Child</span>
                                </Button>
                              </div>
                              <div className='block'>
                                <FormField
                                  control={control}
                                  name='guestNumber.type'
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                          <SelectTrigger className='w-full'>
                                            <SelectValue placeholder='Select a Flight' />
                                          </SelectTrigger>
                                          <SelectContent>
                                            {typeConst.map((item) => (
                                              <SelectItem key={item} value={item}>
                                                {item}
                                              </SelectItem>
                                            ))}
                                          </SelectContent>
                                        </Select>
                                      </FormControl>
                                    </FormItem>
                                  )}
                                ></FormField>
                              </div>
                              <div className='block'>
                                <FormField
                                  control={control}
                                  name='guestNumber.isInfant'
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <div className='flex items-center space-x-2'>
                                          <Switch
                                            id='is-infant-mode'
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked)}
                                          />
                                          <Label htmlFor='is-infant-mode'>Include Infant</Label>
                                        </div>
                                      </FormControl>
                                    </FormItem>
                                  )}
                                ></FormField>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
                <Button
                  size='sm'
                  className='mx-4 bg-[#E63A24] h-[2.3rem] hover:bg-red-700 text-gray-100 rounded-[4px] shadow-lg transform transition-all hover:scale-105'
                  type='submit'
                >
                  <Search className='w-5 h-5' />
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </div>
      {/* <div className=' my-4 box-border'>
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
      </div> */}
    </div>
  );
};

export default FlightSession;
