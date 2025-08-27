import { ComponentType, SVGProps } from 'react';
import { IconType } from 'react-icons';

export type TDefaultData = {
  id?: number;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color?: string;
};

export type TSVGIconProps = {
  fileName: string; // file name without path, e.g., "my-icon.svg"
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export interface ITabItem {
  value: string;
  label: string;
  icon?: IconType;
  content?: React.ReactNode;
}

export interface ICategoryTabItem extends ITabItem {
  amount?: string;
  timeline?: string;
}

export interface IControlItem {
  value: number;
  name: string;
  component?: React.ReactNode;
}

export type TStarRatingProps = {
  rating: number;
  maxStars?: number;
};

export type TLanguageProps = {
  name: string;
  value: string;
  position?: string;
  transform?: string;
};

export type TCountrySelectProps = {
  categoryId: number;
  category: string;
  countryName: string;
};

export interface ISelectOption {
  label: string;
  value: string;
}

export interface IContextType {
  id: number;
  title: string;
  description: string;
}
