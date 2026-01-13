'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { heroProfileData } from '@/lib/constants/home.constant';
import ServiceInstance from './custom/ServiceInstance';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, buttonsRef.current, searchRef.current], {
        opacity: 0,
        y: 50,
      });

      // Animation timeline
      const tl = gsap.timeline();

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: 'power3.out',
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: -10,
            duration: 2,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          searchRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.4'
        );

      // Floating animation for the plane icon
      gsap.to('.floating-plane', {
        y: -10,
        duration: 2.2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className='hero-section'>
      <div className='wrapper-content h-[25rem]'>
        <div className='wrapper-overlay'>
          <div ref={heroRef} className=' container row-rep py-20 lg:py-12'>
            <div className='pb-0'>
              <div className='w-full flex flex-col justify-center items-center gap-1'>
                <div
                  ref={buttonsRef}
                  className='w-full max-w-xl flex flex-col md:flex-row justify-center md:justify-baseline gap-4 md:gap-10 mt-8 '
                >
                  {heroProfileData.map((profile, index) => (
                    <div key={profile.name} className='flex items-center gap-2 w-full'>
                      <Separator orientation='vertical' className={index === 0 ? ' hidden' : ''} />
                      <Link
                        href={profile.link ? profile.link : '#'}
                        className='w-fit hover:bg-transparent cursor-pointer hover:scale-110 px-2 text-gray-100 hover:text-[#E63A24]'
                      >
                        <span className=' font-light  text-center text-sm md:text-base leading-5'>{profile.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
                <h1
                  ref={titleRef}
                  className='mt-4 max-w-3xl lg:max-w-5xl text-xl font-bold text-center text-white md:text-3xl lg:text-5xl md:leading-[62px]'
                >
                  Empowering Global Mobility Through Trusted Travel and Immigration Solutions
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceInstance />
    </section>
  );
};

export default HeroSection;
