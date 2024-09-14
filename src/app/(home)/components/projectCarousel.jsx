"use client"
import Slider from 'react-slick';
import { useState, useRef } from 'react';
import Image from 'next/image';
const data = Array.from({ length: 3 }, (_, i) => `slide-${i + 1}`)
console.log(data)
export default function ProjectCarousel() {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
        speed: 300,
        dots: false,
        fade: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: 0,
        beforeChange: (current, next) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className='relative'>
            <Slider ref={carouselRef} {...settings}>
                {[...data, ...data].map((item, index) => (
                    <div key={`img-${index}`} className='relative h-[400px] w-[500px] '>
                        <Image src={`/static/images/${item}.svg`} className='object-cover' fill alt={item} />
                    </div>
                ))}
            </Slider>
            <div className="flex justify-center gap-4 absolute -bottom-14 left-[50%] translate-x-[-50%]">
                {[...data, ...data].map((item, index) => (
                    <div
                        onClick={() => carouselRef.current.slickGoTo(index)}
                        key={item.id} className={`w-2 h-2  border-2 border-transparent ${index === currentIndex ? 'bg-white !border-[#101010] ring-2 ring-primary' : 'bg-white'}`} />
                ))}
            </div>
        </div>


    );
}
