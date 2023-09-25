import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperType } from 'swiper';

// swiper imports
import 'swiper/css';
import 'swiper/css/pagination';

// import components
import Card from './Card.tsx';

// import types
import { ItemType } from '../../types/type.ts';

// prop type
type SliderPropsType = {
    title: string,
    message: string,
    items: ItemType[]
}

const Slider :React.FC<SliderPropsType> = ({title, message, items}) => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className='px-[10rem] py-[2rem]'>
            <div className='mb-[1rem] flex justify-between items-center'>
                <div className='text-[3rem] leading-0'>
                    {title}
                    <span className='text-[#98a39b] text-[2.5rem]'> {message}</span>
                </div>

                <div className='flex gap-[0.5rem]'>
                    <button onClick={() => swiperRef.current && swiperRef.current.slidePrev()} className='h-[3.25rem] w-[3.25rem] grid place-items-center bg-[#e5e5e5] rounded-[0.5rem] hover:bg-[#d4dad5] duration-200'>
                        <i className='fa-solid fa-chevron-left'></i>
                    </button>
                    <button onClick={() => swiperRef.current && swiperRef.current.slideNext()} className='h-[3.25rem] w-[3.25rem] grid place-items-center bg-[#e5e5e5] rounded-[0.5rem] hover:bg-[#d4dad5] duration-200'>
                        <i className='fa-solid fa-chevron-right'></i>
                    </button>
                </div>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                onSwiper={(swiper) => {swiperRef.current = swiper}}
                breakpoints={{
                    576: {slidesPerView: 2, spaceBetween: 5},
                    768: {slidesPerView: 3, spaceBetween: 10},
                    1024: {slidesPerView: 4, spaceBetween: 20},
                }}
            >
                {
                    items.map((item: ItemType, index) => (
                        <SwiperSlide key={index}>
                            <Card item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Slider