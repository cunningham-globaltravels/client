import * as React from 'react';
import { Calendar1 } from 'lucide-react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface DatePickerFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  control: Control<T>;
  placeholder?: string;
}

export default function DatePickerField<T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
}: DatePickerFieldProps<T>) {
  return (
    <div className='mb-2'>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const value: Date = (field.value as Date) || undefined;

          const handleChange = (date: Date | undefined) => {
            field.onChange(date);
          };

          return (
            <div className='w-full mt-2'>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant='ghost'
                    className={`w-full px-6 border cursor-pointer border-none justify-start text-left font-normal shadow-none bg-transparent hover:bg-transparent ${
                      !value ? 'text-muted-foreground' : ''
                    }`}
                  >
                    <Calendar1 className='mr-2 h-2 w-2' />
                    <div className='flex flex-col'>
                      <span className='text-xs font-medium text-gray-500'>{label}</span>
                      <div className='text-sm px-2 py-2 h-auto'>
                        {value ? (
                          value.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: '2-digit',
                          })
                        ) : (
                          <span className='text-xs text-gray-400 leading-normal'>{placeholder}</span>
                        )}
                      </div>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar mode='single' selected={value} onSelect={handleChange} />
                </PopoverContent>
              </Popover>

              {fieldState.error && <p className='text-sm text-red-500 mt-1'>{fieldState.error.message}</p>}
            </div>
          );
        }}
      />
    </div>
  );
}
