'use client';
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Minus, Plus, Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { ConstantCountries as countries } from '@/lib/constants/continental.constant';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Separator } from '@/components/ui/separator';
import { X } from 'lucide-react';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select';
import { FlightTypeConstant as typeConst } from '@/lib/constants/default-layout.constant';
import { Switch } from '@/components/ui/switch';
import DatePickerField from '@/components/defaults/DatePickerField';
import RadioGroupField from '@/components/defaults/RadioGroupField';
import { TFlightFormSchema } from '@/lib/hooks/website/landing-page.hook';
import { flightFormSchema } from '@/lib/schemas/website/landing-page.schema';

const flightTypeData = ['Return', 'One Way', 'Multi City'];

const FlightSession = () => {
  const router = useRouter();
  const [openLeavingFrom, setOpenLeavingFrom] = useState(false);
  const [openGoingTo, setOpenGoingTo] = useState(false);

  const flightForm = useForm<TFlightFormSchema>({
    resolver: zodResolver(flightFormSchema),
    defaultValues: {
      flightType: '',
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

  const handleFlightInit = (data: TFlightFormSchema) => {
    //console.log(data);
    localStorage.setItem('serviceprofile', JSON.stringify(data));
    router.push('/flight/profile');
  };

  return (
    <div className='py-2 flex flex-col gap-1 items-start'>
      <div className='block lg:hidden text-base leading-[150%] font-semibold mb-6'>Flight</div>
      <RadioGroupField<TFlightFormSchema>
        name='flightType'
        control={control}
        options={flightTypeData}
        orientation='horizontal'
      />
      <div className='flight-content w-full mt-4'>
        <Card className='w-full p-0 border-none rounded-none shadow-none lg:border lg:rounded-[8px] lg:shadow-lg'>
          <Form {...flightForm}>
            <form onSubmit={handleSubmit(handleFlightInit)}>
              <div className='flex flex-col items-start lg:flex-row lg:items-center gap-6 lg:h-24 lg:divide-x lg:divide-gray-300 w-full'>
                <FormField
                  control={control}
                  name='leavingFrom'
                  render={({ field }) => (
                    <FormItem className='w-full lg:w-fit'>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              role='combobox'
                              aria-expanded={openLeavingFrom}
                              variant='ghost'
                              className='w-full lg:w-[200px] justify-start border-0 border-b-2 rounded-none lg:border-b-0 text-left p-0 shadow-none hover:bg-gray-50 cursor-pointer'
                            >
                              <div className='w-full'>
                                <span className='text-sm lg:text-xs font-medium text-gray-500 mx-2'>Leaving From?</span>
                                <div className='flex items-center box-border cursor-pointer text-sm lg:text-xs h-auto leading-10 rounded px-2 lg:px-4 py-2'>
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
                                    <div className=' box-border w-full pt-2 rounded-br-lg rounded-bl-lg'>
                                      <div className='box-border h-auto overflow-x-hidden overflow-y-auto pt-0 pb-4 px-2 lg:px-4'>
                                        <div className='grid grid-cols-[repeat(1,80px)] lg:grid-cols-[repeat(3,150px)]'>
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
                    <FormItem className='w-full lg:w-fit'>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant='ghost'
                              className='w-full lg:w-[200px] justify-start border-0 border-b-2 rounded-none lg:border-b-0 text-left p-0 shadow-none hover:bg-gray-50 cursor-pointer'
                              role='combobox'
                              aria-expanded={openGoingTo}
                            >
                              <div className='flex flex-col'>
                                <span className='text-sm lg:text-xs font-medium text-gray-500 mx-2'>Going to?</span>
                                <div className='flex items-center box-border cursor-pointer text-sm lg:text-xs h-auto leading-10 rounded px-2 lg:px-4 py-2'>
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
                                        <div className='grid grid-cols-[repeat(1,80px)] lg:grid-cols-[repeat(3,150px)]'>
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
                <div className='flex flex-col gap-2 lg:gap-0 lg:flex-row items-start w-full lg:w-fit'>
                  <DatePickerField<TFlightFormSchema>
                    name='departureDate'
                    label='Departure Date'
                    control={control}
                    placeholder='Select Date...'
                  />
                  <DatePickerField<TFlightFormSchema>
                    name='returnDate'
                    label='Return Date'
                    control={control}
                    placeholder='Select Date...'
                  />
                </div>
                <FormField
                  control={control}
                  name='guestNumber'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={'ghost'}
                              className='w-full flex justify-between overflow-x-hidden border-0 border-b-2 rounded-none lg:border-b-0 text-left font-normal p-0 h-auto shadow-none hover:bg-gray-50'
                            >
                              <div className='flex-1 flex flex-col'>
                                <span className='mx-1 text-sm lg:text-xs font-medium text-gray-500'>Guest Profile</span>
                                <div className='flex items-center box-border cursor-pointer text-sm lg:text-xs h-auto leading-10 rounded px-0 py-0'>
                                  {field.value.totalGuest > 0 ? (
                                    <span className='w-full overflow-hidden whitespace-nowrap font-normal text-[#051a37] text-sm lg:text-[9px]'>
                                      {`${field.value.totalGuest} Guest expected, ${field.value.type}`}
                                    </span>
                                  ) : (
                                    <span className='font-medium text-gray-600 text-sm lg:text-xs'>
                                      Select Profile...
                                    </span>
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
                                  <div className='text-gray-500 text-[10px] uppercase'>
                                    {childNumber > 1 ? 'Children' : 'Child'}
                                  </div>
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
                  className='mx-4 bg-[#E63A24] h-[2.3rem] hover:bg-red-700 text-gray-100 rounded-[4px] shadow-lg transform transition-all hover:scale-105 w-[80%] lg:w-fit'
                  type='submit'
                >
                  <Search className='w-5 h-5' />
                  <span className='block lg:hidden'>Search</span>
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default FlightSession;
