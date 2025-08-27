import { create } from 'zustand';
import { HotelMenuFormSchema } from '@/lib/schemas/website/hotel-page.schema';

interface HotelFormState {
  data: Partial<HotelMenuFormSchema>;
  setFormData: (values: Partial<HotelMenuFormSchema>) => void;
  resetForm: () => void;

  // setPopularFilters: (popular: string[]) => void;
  // setStayOptionFilters: (stayOption: string) => void;
  // setPriceFilters: (price: string[]) => void;
  // setNeighbourhoodFilters: (neigbour: string) => void;
  // setPaymentTypeFilters: (payment: string[]) => void;
  // setPropertyOptionFilters: (property: string[]) => void;
  // setPropertyTypeFilters: (property_type: string[]) => void;
  // setPropertyBrandFilters: (property_brand: string[]) => void;
  // setStarRatingFilters: (star_rating: number) => void;
  // setGuestRatingFilters: (guest_rating: string) => void;
  // setAmenitiesFilters: (amenities: string[]) => void;
}

export const useHotelMenuFormStore = create<HotelFormState>((set) => ({
  data: {},
  setFormData: (values) => set((state) => ({ data: { ...state.data, ...values } })),
  resetForm: () => set({ data: {} }),

  // setPopularFilters: (popular) =>
  //   set((state) => ({
  //     data: { ...state.data, popular },
  //   })),

  // setStayOptionFilters: (stay_options) =>
  //   set((state) => ({
  //     data: { ...state.data, stay_options },
  //   })),

  // setPriceFilters: (price) =>
  //   set((state) => ({
  //     data: { ...state.data, price },
  //   })),

  // setNeighbourhoodFilters: (neigbour) =>
  //   set((state) => ({
  //     data: { ...state.data, neigbour },
  //   })),

  // setPaymentTypeFilters: (payment) =>
  //   set((state) => ({
  //     data: { ...state.data, payment },
  //   })),

  // setPropertyOptionFilters: (property) =>
  //   set((state) => ({
  //     data: { ...state.data, property },
  //   })),

  // setPropertyTypeFilters: (property_type) =>
  //   set((state) => ({
  //     data: { ...state.data, property_type },
  //   })),

  // setPropertyBrandFilters: (property_brand) =>
  //   set((state) => ({
  //     data: { ...state.data, property_brand },
  //   })),

  // setStarRatingFilters: (star_rating) =>
  //   set((state) => ({
  //     data: { ...state.data, star_rating },
  //   })),

  // setGuestRatingFilters: (guest_rating) =>
  //   set((state) => ({
  //     data: { ...state.data, guest_rating },
  //   })),

  // setAmenitiesFilters: (amenities) =>
  //   set((state) => ({
  //     data: { ...state.data, amenities },
  //   })),
}));
