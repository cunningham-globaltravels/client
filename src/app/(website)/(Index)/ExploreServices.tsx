'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const cgtServiceList = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  title: `Visa Assistance ${i + 1}`,
  content: `All-inclusive visa assistance in a timely, and secure manner. ${i + 1}`,
  image_reference: '/images/main/visa_assistance.png',
}));

const ExploreServices = () => {
  const [currentIndex] = useState(0);

  const sliderRef = useRef<Slider>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  //const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef(new Map());

  //const visibleCards = 3; // Total cards shown per view including extras
  const cardWidth = 300; // You can adjust this

  const scrollToIndex = (i: number) => {
    const offset = i * cardWidth;
    containerRef.current?.scrollTo({
      left: offset,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  const setRef = (el: unknown, index: number) => {
    if (el) {
      cardsRef.current.set(index, el);
    } else {
      cardsRef.current.delete(index);
    }
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className='w-full max-w-[62rem] mx-auto overflow-hidden mt-48 mb-12'>
      <div className={`p-8 bg-white slide-container`}>
        <Slider ref={sliderRef} {...settings}>
          {cgtServiceList.map((card) => (
            <div
              ref={(el) => setRef(el, card.id)}
              key={card.id}
              className='shrink-0 px-2'
              style={{ width: `${cardWidth}px` }}
            >
              <Card className='h-full shadow-lg bg-gray-100 hover:bg-gray-200 transition-transform duration-300'>
                <CardContent className='p-4'>
                  <div ref={containerRef} className='flex flex-row'>
                    <div className='basis-1/3'>
                      <Image src={card.image_reference} alt={card.title} width={52} height={100} />
                    </div>
                    <div className='basis-2/3 flex flex-col items-start'>
                      <h3 className='text-base md:text-lg font-semibold'>{card.title}</h3>
                      <p className='text-sm md:text-base mt-2 text-muted-foreground'>{card.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ExploreServices;
