import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { Input } from '../ui/input';

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  control: Control<T>;
  type?: string;
  className?: string;
  important?: boolean;
  placeholder?: string;
}

export default function InputField<T extends FieldValues>({
  name,
  label,
  control,
  type = 'text',
  className,
  important,
  placeholder = '',
}: InputFieldProps<T>) {
  return (
    <div className='w-full'>
      {label && (
        <div className='flex items-start gap-1'>
          <label className='text-sm'>{label}</label>
          {important && <span className='text-[#D60000] font-black'>*</span>}
        </div>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Input {...field} type={type} className={`border rounded p-2 ${className}`} placeholder={placeholder} />
            {fieldState.error && <p className='text-red-500 text-sm'>{fieldState.error.message}</p>}
          </>
        )}
      />
    </div>
  );
}
