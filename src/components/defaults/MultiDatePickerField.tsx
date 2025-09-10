import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { format } from 'date-fns';
import { CalendarCheck } from 'lucide-react';

interface MultiDatePickerFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  className?: string;
}
export default function MultiDatePickerField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = 'Pick dates',
  className,
}: MultiDatePickerFieldProps<T>) {
  return (
    // <div className='flex flex-col gap-2 w-[180px]'>
    <div className={'flex flex-col gap-2 w-full'}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          const { value = [], onChange } = field;

          return (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  role='combobox'
                  variant='ghost'
                  className={`w-full px-6 border cursor-pointer border-none justify-start text-left font-normal shadow-none bg-transparent hover:bg-transparent ${className} ${
                    !value ? 'text-muted-foreground' : ''
                  }`}
                >
                  <CalendarCheck className='mr-1 h-2 w-2' />
                  <div className='flex flex-col gap-0'>
                    {label && <span className='text-xs font-medium text-gray-500'>{label}</span>}
                    <div className='text-sm p-1 h-auto'>
                      {value.length > 0 ? (
                        <span className='text-sm text-gray-700 font-semibold'>
                          {value.map((d: Date) => format(d, 'MMM d')).join(' - ')}
                        </span>
                      ) : (
                        <span className='text-xs text-gray-400 leading-normal'>{placeholder}</span>
                      )}
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-2'>
                <Calendar
                  mode='multiple'
                  selected={value}
                  onSelect={(dates) => onChange(dates ?? [])}
                  numberOfMonths={2}
                  // 🚫 disable all days before today
                  disabled={{ before: new Date() }}
                />
              </PopoverContent>
            </Popover>
          );
        }}
      />
    </div>
  );
}
