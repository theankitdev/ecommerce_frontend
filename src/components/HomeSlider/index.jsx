import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className='homeSlider overflow-hidden py-5'>
            <div className='container'>
                <Swiper
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='item rounded-xl overflow-hidden'>
                            <img src='/banner1.jpg' className='w-[100%] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='item rounded-xl overflow-hidden'>
                            <img src='/banner2.jpg' className='w-[100%] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-xl overflow-hidden'>
                            <img src='/banner3.jpg' className='w-[100%] object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-xl overflow-hidden'>
                            <img src='/banner4.jpg' className='w-[100%] object-cover' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}

export default HomeSlider
