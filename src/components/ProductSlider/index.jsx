import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem/index';

const ProductSlider = ({ products }) => {
  return (
    <div className="productSlider py-3 lg:py-6">
      <Swiper
        spaceBetween={12}
        navigation={true}
        slidesPerView="auto"
        modules={[Navigation]}
      >
        {products?.map(product => (
          <SwiperSlide key={product.id} className='w-[160px]! sm:!w-auto'>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;