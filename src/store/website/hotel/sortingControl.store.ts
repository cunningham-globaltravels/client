import { create } from 'zustand';
import { HotelSortByFormSchema } from '@/lib/schemas/website/hotel-page.schema';

interface SortByFormState {
  data: Partial<HotelSortByFormSchema>;
  setFormData: (values: Partial<HotelSortByFormSchema>) => void;
  resetForm: () => void;

  // generic setter for any field
  setField: <K extends keyof HotelSortByFormSchema>(field: K, value: HotelSortByFormSchema[K]) => void;
}

export const useSortByFormStore = create<SortByFormState>((set) => ({
  data: {},
  setFormData: (values) => set((state) => ({ data: { ...state.data, ...values } })),
  resetForm: () => set({ data: {} }),
  setField: (field, value) =>
    set((state) => ({
      data: { ...state.data, [field]: value },
    })),
}));
