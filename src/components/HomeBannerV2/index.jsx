import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';

const HomeBannerV2 = () => {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeBannerV2"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className='w-full rounded-md overflow-hidden relative'>
            <img src="/homeBannerV2.jpg" 
              className='object-cover w-full'
            />

            <div className='info absolute top-0 -right-[100%] opacity-0 w-[53%] h-[100%] z-50 p-6 flex 
              flex-col justify-center transition-all duration-600'>
              <h4 className='text-[10px] sm:text-[14px] lg:text-[18px] font-medium mb-1 md:mb-3 relative -right-[100%] opacity-0 transition-all duration-[1.2s]'>Big Saving Days Sale</h4>
              <h2 className='text-[12px] sm:text-[26px] lg:text-[35px] font-bold relative -right-[100%] opacity-0 transition-all duration-[1.5s]'>Women Solid Round Green T-Shirt</h2>
              <h3 className='flex items-center gap-3 text-[10px] sm:text-[14px] lg:text-[18px] font-medium mb-1 md:mb-3 mt-2 md:mt-3 relative -right-[100%] opacity-0 transition-all duration-[1.8s]'>
                Starting At Only <span className='text-[#ff5252] text-[14px] sm:text-[24px] lg:text-[30px] font-semibold'>$59.00</span>
              </h3>
              <div className='btn relative -right-[100%] opacity-0 transition-all duration-[2.1s] w-full'>
                <Button className="bg-[#ff5252]! text-white! px-2! sm:px-4! py-1! sm:py-2! text-[10px]! md:text-[14px]!">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full rounded-md overflow-hidden'>
            <img src="/homeBannerV22.jpg" 
              className='object-cover w-full'
            />
             <div className='info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex 
              flex-col justify-center transition-all duration-700'>
              <h4 className='text-[18px] font-medium mb-3 relative -right-[100%] opacity-0 transition-all duration-[1.2s]'>
                Big Saving Days Sale
              </h4>
              <h2 className='text-[35px] font-bold relative -right-[100%] opacity-0 transition-all duration-[1.5s]'>Buy Symmer Fashion In Best Price</h2>
              <h3 className='flex items-center gap-3 text-[18px] font-medium mb-3 mt-3 relative -right-[100%] opacity-0 transition-all duration-[1.8s]'>
                Starting At Only <span className='text-[#ff5252] text-[30px] font-semibold'>$99.00</span>
              </h3>
              <div className='btn relative -right-[100%] opacity-0 transition-all duration-[2.1s] w-full'>
                <Button className='bg-[#ff5252]! text-white! py-2! px-4!'>SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeBannerV2
