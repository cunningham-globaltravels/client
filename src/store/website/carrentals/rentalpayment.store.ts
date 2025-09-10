import { TRentalsPaymentFormSchema } from '@/lib/schemas/website/carrental.shema';
import { create } from 'zustand';

interface RentalPaymentFormState {
  data: Partial<TRentalsPaymentFormSchema>;
  setFormData: (values: Partial<TRentalsPaymentFormSchema>) => void;
}

export const useRentalPaymentMenuFormStore = create<RentalPaymentFormState>((set) => ({
  data: {},
  setFormData: (values) => set((state) => ({ data: { ...state.data, ...values } })),
}));
