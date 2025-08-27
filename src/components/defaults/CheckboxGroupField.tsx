import React from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface CheckboxGroupFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  control: Control<T>;
  options: string[];
}

export default function CheckboxGroupField<T extends FieldValues>({
  name,
  label,
  control,
  options,
}: CheckboxGroupFieldProps<T>) {
  return (
    <div className='mb-6'>
      {label ? <Label className='font-normal text-sm mb-2'>{label}</Label> : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const currentValues: string[] = field.value || [];

          const handleToggle = (optionValue: string) => {
            if (currentValues.includes(optionValue)) {
              field.onChange(currentValues.filter((v) => v !== optionValue));
            } else {
              field.onChange([...currentValues, optionValue]);
            }
          };

          return (
            <div className='space-y-2'>
              {options.map((opt) => (
                <div key={opt} className='flex items-center space-x-2'>
                  <Checkbox
                    id={`${name}-${opt}`}
                    checked={currentValues.includes(opt)}
                    onCheckedChange={() => handleToggle(opt)}
                    className='border-gray-400 hover:bg-gray-100 data-[state=checked]:bg-[#c42c18] data-[state=checked]:text-white'
                  />
                  <Label className='text-[13.78px] leading-[18px] font-normal' htmlFor={`${name}-${opt}`}>
                    {opt}
                  </Label>
                </div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
}
