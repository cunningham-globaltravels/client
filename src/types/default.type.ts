import React from 'react';
import { IconType } from 'react-icons';

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
