'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search, Menu, X, UserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/lib/constants/default-layout.constant';
import { LanguagesConstants as languages } from '@/lib/constants/language.constant';
import LanguageSelection from './custom/LanguageSelection';

const TopNavigation = () => {
  const [stickyClass, setStickyClass] = useState<string>('relative');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const authRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      if (windowHeight > 65) setStickyClass('fixed top-0 left-0 z-50');
      else setStickyClass('relative');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation on mount
    tl.from(navRef.current, {
      duration: 0.8,
      y: -100,
      opacity: 0,
      ease: 'power3.out',
    })
      .from(
        logoRef.current,
        {
          duration: 1,
          scale: 0,
          rotation: 180,
          ease: 'back.out(1.7)',
        },
        '-=0.5'
      )
      .from(
        menuRef.current,
        {
          duration: 1,
          y: -30,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.3'
      )
      .from(
        searchRef.current,
        {
          duration: 1,
          width: 0,
          opacity: 0,
          ease: 'power2.out',
        },
        '-=0.4'
      )
      .from(
        authRef.current,
        {
          duration: 0.5,
          x: 50,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.3'
      );
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        duration: 0.3,
        height: 'auto',
        opacity: 1,
        ease: 'power2.out',
      });
      gsap.from(mobileMenuRef.current?.children || [], {
        duration: 0.4,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.1,
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        duration: 0.3,
        height: 0,
        opacity: 0,
        ease: 'power2.in',
      });
    }
  }, [isMenuOpen]);

  const handleLogoHover = () => {
    gsap.to(logoRef.current, {
      duration: 0.3,
      rotation: 360,
      scale: 1.1,
      ease: 'power2.out',
    });
  };
  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {
      duration: 0.3,
      rotation: 0,
      scale: 1,
      ease: 'power2.out',
    });
  };
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    gsap.to(searchRef.current, {
      duration: 0.3,
      scale: 1.05,
      ease: 'power2.out',
    });
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
    gsap.to(searchRef.current, {
      duration: 0.3,
      scale: 1,
      ease: 'power2.out',
    });
  };

  return (
    <header className={`w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 ${stickyClass}`}>
      <div className='px-4 sm:px-6 lg:px-8 w-full lg:max-w-[1440px] mx-auto'>
        <div className='flex justify-between items-center h-16'>
          {/* Company Brand Here */}
          <div
            ref={logoRef}
            className='flex items-center cursor-pointer'
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
          >
            <div className='flex items-center justify-center'>
              <Link href={'/'} scroll={false}>
                <Image src={'/images/logo/brand_banner.png'} alt='Brand Banner' width={65} height={65} />
              </Link>
            </div>
          </div>
          {/* Search Bar */}
          <div ref={searchRef} className='hidden lg:flex items-center relative'>
            <div className={`relative flex transition-all duration-300 ${isSearchFocused ? 'w-[340px]' : 'w-[287px]'}`}>
              <Input
                type='text'
                placeholder='Destination attraction, hotel etc'
                className='w-full max-w-xl rounded-none rounded-l-lg border-1 border-[#EFEFEF] bg-white focus:outline-none focus:ring-1 focus:ring-[#E63A24] focus:border-transparent transition-all duration-300'
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <Button
                onClick={() => alert('Successful Transaction')}
                className='bg-[#E63A24] text-white rounded-none rounded-r-sm border-none hover:bg-[#c42c18]'
              >
                <Search />
              </Button>
            </div>
          </div>
          {/* General Desktop Navigation Links */}
          <nav className='hidden md:flex'>
            <div ref={menuRef} className='flex items-center space-x-8'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.name}
                  className='flex items-center space-x-2 text-gray-700 hover:text-[#E63A24] transition-all duration-300 font-medium group'
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      duration: 0.2,
                      y: -2,
                      ease: 'power2.out',
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      duration: 0.2,
                      y: 0,
                      ease: 'power2.out',
                    });
                  }}
                >
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
            {/* Auth Buttons */}
            <div ref={authRef} className='flex items-center ml-8 space-x-8'>
              {/* Language Dropdown */}
              <LanguageSelection languages={languages} />
              <button className='flex items-center space-x-2 px-3 py-2  text-gray-800 text-base hover:text-[#E63A24] transition-all duration-300 font-medium transform hover:scale-105'>
                <span className=' text-[14px]'>Manage Bookings</span>
              </button>
              <Link
                href={'/authentication'}
                className='flex items-center space-x-2 px-3 py-2 bg-[#E63A24] text-white rounded-lg text-sm hover:bg-[#c12510] transition-all duration-300 font-normal shadow-lg hover:shadow-xl transform hover:scale-105'
              >
                <UserPlus className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />
                <span>Sign In / Register</span>
              </Link>
            </div>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className='w-6 h-6 text-gray-700' /> : <Menu className='w-6 h-6 text-gray-700' />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div ref={mobileMenuRef} className='md:hidden overflow-hidden h-0 opacity-0'>
          <div className='py-4 space-y-4'>
            {/* Mobile Search */}
            <div className='px-4'>
              <div
                className={`relative flex transition-all duration-300 ${isSearchFocused ? 'w-[340px]' : 'w-[287px]'}`}
              >
                <Input
                  type='text'
                  placeholder='Destination attraction, hotel etc'
                  className='w-full max-w-xl rounded-none rounded-l-lg border-1 border-[#EFEFEF] bg-white focus:outline-none focus:ring-1 focus:ring-[#E63A24] focus:border-transparent transition-all duration-300'
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                />
                <Button
                  onClick={() => alert('Successful Transaction')}
                  className='bg-[#E63A24] text-white rounded-none rounded-r-sm border-none hover:bg-[#c42c18]'
                >
                  <Search />
                </Button>
              </div>
            </div>
            {/* Mobile Navigation Links */}
            <div className='space-y-2'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium'
                >
                  <span>{link.name}</span>
                </a>
              ))}
              {/* Language Dropdown */}
              <LanguageSelection languages={languages} />
              <button className='flex items-center space-x-2 px-3 py-2  text-gray-800 text-base hover:text-[#E63A24] transition-all duration-300 font-medium transform hover:scale-105'>
                <span className=' text-[14px]'>Manage Bookings</span>
              </button>
              <Link
                href={'/authentication'}
                className='flex items-center w-1/2 space-x-2 px-3 py-2 bg-[#E63A24] text-white rounded-lg text-sm hover:bg-[#c12510] transition-all duration-300 font-normal shadow-lg hover:shadow-xl transform hover:scale-105'
              >
                <UserPlus className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />
                <span>Sign In / Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
