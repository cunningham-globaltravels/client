import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { Input } from '../ui/input';

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  control: Control<T>;
  type?: string;
}

export default function InputField<T extends FieldValues>({ name, label, control, type = 'text' }: InputFieldProps<T>) {
  return (
    <div className='mb-4'>
      {label ? <label className='block mb-1 font-medium'>{label}</label> : null}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Input {...field} type={type} className='border rounded p-2 w-full' />
            {fieldState.error && <p className='text-red-500 text-sm'>{fieldState.error.message}</p>}
          </>
        )}
      />
    </div>
  );
}
