import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  hotelMenuFormSchema,
  HotelMenuFormSchema,
  hotelSortByFormSchema,
  HotelSortByFormSchema,
} from '@/lib/schemas/website/hotel-page.schema';
import { useSortByFormStore } from '@/store/website/hotel/sortingControl.store';
import { useHotelMenuFormStore } from '@/store/website/hotel.store';

export const useHotelForm = () => {
  const { data, setFormData } = useHotelMenuFormStore();

  const hotelFormHook = useForm<HotelMenuFormSchema>({
    resolver: zodResolver(hotelMenuFormSchema),
    defaultValues: data,
    mode: 'onChange',
  });

  const onSubmit = (values: HotelMenuFormSchema) => {
    setFormData(values);
    console.log('Final Submit', values);
  };

  return { hotelFormHook, onSubmit };
};

export const useSortByForm = () => {
  const { data, setFormData } = useSortByFormStore();

  const sortByFormHook = useForm<HotelSortByFormSchema>({
    resolver: zodResolver(hotelSortByFormSchema),
    defaultValues: data,
    mode: 'onChange',
  });

  const onSubmit = (values: HotelSortByFormSchema) => {
    setFormData(values);
    console.log('Final Submit', values);
  };

  return { sortByFormHook, onSubmit };
};
