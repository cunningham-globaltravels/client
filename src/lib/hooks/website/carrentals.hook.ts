import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { carRentalMenuFormSchema, TCarRentalMenuFormSchema } from '@/lib/schemas/website/carrental.shema';
import { useCarRentalMenuFormStore } from '@/store/website/carrentals.store';

export const useCarRentalForm = () => {
  const { data, setFormData } = useCarRentalMenuFormStore();

  const carRentalFormHook = useForm<TCarRentalMenuFormSchema>({
    resolver: zodResolver(carRentalMenuFormSchema),
    defaultValues: data,
    mode: 'onChange',
  });

  const onSubmit = (values: TCarRentalMenuFormSchema) => {
    setFormData(values);
    console.log('Final Submit', values);
  };

  return { carRentalFormHook, onSubmit };
};
