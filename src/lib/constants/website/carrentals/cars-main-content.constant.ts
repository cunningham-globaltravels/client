import { TNavigationLinkModel } from '@/types/default.type';
import { ICarProfile } from '@/types/website/carrentals.type';
import { FiUser } from 'react-icons/fi';
import { GiCarDoor } from 'react-icons/gi';
import { TbAirConditioning, TbAutomaticGearboxFilled, TbBus } from 'react-icons/tb';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { LuFuel } from 'react-icons/lu';
import { FaRegCalendarMinus } from 'react-icons/fa6';
import { CiClock2 } from 'react-icons/ci';
import { PiAirplaneTakeoffLight } from 'react-icons/pi';

export const ConstCarDisplayShow: ICarProfile[] = [
  {
    id: 1,
    description: {
      brand: 'Midsize SUV',
      model: 'Nissan Qashqai or similar',
      img_src: '/images/main/cars/img-midsize-suv.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    ratings: {
      amenities: ['Free cancellation', 'Pay at pick-up'],
      classImg: '/images/main/img-enterprise-class.png',
      percentage_rating: 35,
      review: 'Excellent',
      numbers_rated: 373,
    },
    cost: {
      rental_per_day: 113,
      total_amount: 113,
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
  },
  {
    id: 2,
    description: {
      brand: 'Midsize Crossover',
      model: 'Toyota C-HR or similar',
      img_src: '/images/main/cars/img-midsize-crossover.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Counter in terminal, shuttle to car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Pay at pick-up'],
      percentage_rating: 75,
      review: 'Good',
      numbers_rated: 386,
    },
    cost: {
      rental_per_day: 93,
      total_amount: 112,
    },
  },
  {
    id: 3,
    description: {
      brand: 'Economy',
      model: 'MG 3 or similar',
      img_src: '/images/main/cars/img-economy.png',
      engine_type: 'Automatic',
      numberForSale: 4,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Online check-in', 'Pay at pick-up'],
      classImg: '/images/main/img-budget-class.png',
      percentage_rating: 81,
      review: 'Excellent',
      numbers_rated: 436,
    },
    cost: {
      rental_per_day: 57,
      total_amount: 85,
    },
  },
  {
    id: 4,
    description: {
      brand: 'Premium',
      model: 'Mercedes C-Class or similar',
      img_src: '/images/main/cars/img-premium.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Online check-in', 'Pay at pick-up'],
      classImg: '/images/main/img-budget-class.png',
      percentage_rating: 84,
      review: 'Excellent',
      numbers_rated: 735,
    },
    cost: {
      rental_per_day: 117,
      total_amount: 117,
    },
  },
  {
    id: 5,
    description: {
      brand: 'Midsize SUV',
      model: 'Nissan Qashqai or similar',
      img_src: '/images/main/cars/img-midsize-suv.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Pay at pick-up'],
      classImg: '/images/main/img-enterprise-class.png',
      percentage_rating: 35,
      review: 'Excellent',
      numbers_rated: 373,
    },
    cost: {
      rental_per_day: 113,
      total_amount: 113,
    },
  },
  {
    id: 6,
    description: {
      brand: 'Midsize Crossover',
      model: 'Toyota C-HR or similar',
      img_src: '/images/main/cars/img-midsize-crossover.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Counter in terminal, shuttle to car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Pay at pick-up'],
      percentage_rating: 75,
      review: 'Good',
      numbers_rated: 386,
    },
    cost: {
      rental_per_day: 93,
      total_amount: 112,
    },
  },
  {
    id: 7,
    description: {
      brand: 'Economy',
      model: 'MG 3 or similar',
      img_src: '/images/main/cars/img-economy.png',
      engine_type: 'Automatic',
      numberForSale: 4,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Online check-in', 'Pay at pick-up'],
      classImg: '/images/main/img-budget-class.png',
      percentage_rating: 81,
      review: 'Excellent',
      numbers_rated: 436,
    },
    cost: {
      rental_per_day: 57,
      total_amount: 85,
    },
  },
  {
    id: 8,
    description: {
      brand: 'Premium',
      model: 'Mercedes C-Class or similar',
      img_src: '/images/main/cars/img-premium.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Online check-in', 'Pay at pick-up'],
      classImg: '/images/main/img-budget-class.png',
      percentage_rating: 84,
      review: 'Excellent',
      numbers_rated: 735,
    },
    cost: {
      rental_per_day: 117,
      total_amount: 117,
    },
  },
  {
    id: 9,
    description: {
      brand: 'Midsize SUV',
      model: 'Nissan Qashqai or similar',
      img_src: '/images/main/cars/img-midsize-suv.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Pay at pick-up'],
      classImg: '/images/main/img-enterprise-class.png',
      percentage_rating: 35,
      review: 'Excellent',
      numbers_rated: 373,
    },
    cost: {
      rental_per_day: 113,
      total_amount: 113,
    },
  },
  {
    id: 10,
    description: {
      brand: 'Midsize Crossover',
      model: 'Toyota C-HR or similar',
      img_src: '/images/main/cars/img-midsize-crossover.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Counter in terminal, shuttle to car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Pay at pick-up'],
      percentage_rating: 75,
      review: 'Good',
      numbers_rated: 386,
    },
    cost: {
      rental_per_day: 93,
      total_amount: 112,
    },
  },
  {
    id: 11,
    description: {
      brand: 'Economy',
      model: 'MG 3 or similar',
      img_src: '/images/main/cars/img-economy.png',
      engine_type: 'Automatic',
      numberForSale: 4,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Online check-in', 'Pay at pick-up'],
      classImg: '/images/main/img-budget-class.png',
      percentage_rating: 81,
      review: 'Excellent',
      numbers_rated: 436,
    },
    cost: {
      rental_per_day: 57,
      total_amount: 85,
    },
  },
  {
    id: 12,
    description: {
      brand: 'Premium',
      model: 'Mercedes C-Class or similar',
      img_src: '/images/main/cars/img-premium.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Passengers',
          icon: FiUser,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
        {
          label: 'Fuel: full to full',
          icon: LuFuel,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Online check-in', 'Pay at pick-up'],
      classImg: '/images/main/img-budget-class.png',
      percentage_rating: 84,
      review: 'Excellent',
      numbers_rated: 735,
    },
    cost: {
      rental_per_day: 117,
      total_amount: 117,
    },
  },
  {
    id: 13,
    description: {
      brand: 'Midsize SUV',
      model: 'Nissan Qashqai or similar',
      img_src: '/images/main/cars/img-midsize-suv.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Pay at pick-up'],
      classImg: '/images/main/img-enterprise-class.png',
      percentage_rating: 35,
      review: 'Excellent',
      numbers_rated: 373,
    },
    cost: {
      rental_per_day: 113,
      total_amount: 113,
    },
  },
  {
    id: 14,
    description: {
      brand: 'Midsize Crossover',
      model: 'Toyota C-HR or similar',
      img_src: '/images/main/cars/img-midsize-crossover.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Counter in terminal, shuttle to car',
      main_amenitels: [
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Pay at pick-up'],
      percentage_rating: 75,
      review: 'Good',
      numbers_rated: 386,
    },
    cost: {
      rental_per_day: 93,
      total_amount: 112,
    },
  },
  {
    id: 15,
    description: {
      brand: 'Economy',
      model: 'MG 3 or similar',
      img_src: '/images/main/cars/img-economy.png',
      engine_type: 'Automatic',
      numberForSale: 4,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Online check-in', 'Pay at pick-up'],
      classImg: '/images/main/img-budget-class.png',
      percentage_rating: 81,
      review: 'Excellent',
      numbers_rated: 436,
    },
    cost: {
      rental_per_day: 57,
      total_amount: 85,
    },
  },
  {
    id: 16,
    description: {
      brand: 'Premium',
      model: 'Mercedes C-Class or similar',
      img_src: '/images/main/cars/img-premium.png',
      engine_type: 'Automatic',
      numberForSale: 5,
      mileage_form: 'Unlimited mileage',
      evaluation: 'Shuttle to counter and car',
      main_amenitels: [
        {
          value: '5',
          label: 'Doors',
          icon: GiCarDoor,
          includeInfo: false,
        },
        {
          label: 'Air Conditioning',
          icon: TbAirConditioning,
          includeInfo: false,
        },
        {
          label: 'Automatic',
          icon: TbAutomaticGearboxFilled,
          includeInfo: false,
        },
        {
          label: 'Unlimited Mileage',
          icon: AiOutlineFieldTime,
          includeInfo: true,
        },
      ],
    },
    location: [
      {
        title: 'Sun, Aug 24, 10:30am - Mon, Aug 25, 10:30am',
        icon: FaRegCalendarMinus,
      },
      {
        title: 'Hours of operation',
        description: ['Sun 6:00am - 11:59pm', 'Mon 6:00am - 11:59pm'],
        icon: CiClock2,
      },
      {
        title: 'STN Airport',
        description: ['Stansted Airport, London, United Kingdom CM24 1RJ'],
        icon: PiAirplaneTakeoffLight,
      },
      {
        title: 'Counter and car in terminal',
        description: ['Rental car counter and car in the airport.'],
        icon: TbBus,
      },
    ],
    ratings: {
      amenities: ['Free cancellation', 'Online check-in', 'Pay at pick-up'],
      classImg: '/images/main/img-budget-class.png',
      percentage_rating: 84,
      review: 'Excellent',
      numbers_rated: 735,
    },
    cost: {
      rental_per_day: 117,
      total_amount: 117,
    },
  },
] as const;

export const CarRentalProfileLinks: TNavigationLinkModel[] = [
  {
    name: 'Overview',
    hash: 'overview',
  },
  {
    name: 'Location',
    hash: 'location',
  },
  {
    name: 'Insurance',
    hash: 'insurance',
  },
  {
    name: 'Policies',
    hash: 'policies',
  },
  {
    name: 'Extras',
    hash: 'extras',
  },
] as const;
