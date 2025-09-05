import { ISelectOption } from '@/types/default.type';
import { TNavigationLinkProps, TFooterNavLinkProps } from '@/types/website-layout.type';
import { Briefcase, BookOpen, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const navLinks: TNavigationLinkProps[] = [
  {
    name: 'Blog',
    icon: BookOpen,
    href: '#blog',
  },
  {
    name: 'Support',
    icon: Briefcase,
    href: '#support',
  },
];

export const footerNavLinks: TFooterNavLinkProps = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Feedback', href: '/feedback' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ],
  services: [{ name: 'Flights' }, { name: 'Hotels' }, { name: 'Visa' }, { name: 'Deals' }, { name: 'Packages' }],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Compliance', href: '/compliance' },
  ],
};

export const socialLinks: TNavigationLinkProps[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: Facebook,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedIn.com',
    icon: Linkedin,
  },
  {
    name: 'YouTube',
    href: 'https://youTube.com',
    icon: Youtube,
  },
];

export const FlightTypeConstant: string[] = ['Economy', 'Premium Economy', 'Business Class', 'First Class'];

export const SortOrderBy: ISelectOption[] = [
  {
    value: 'Generalized',
    label: 'Generalized',
  },
  {
    value: 'Recommended',
    label: 'Recommended',
  },
  {
    value: 'Business',
    label: 'Business',
  },
  {
    value: 'Luxury',
    label: 'Luxury',
  },
] as const;
