import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import products from "../../data/product";
import ProductItem from '../ProductItem/index';

const ProductSlider = () => {
  return (
    <div className="productSlider py-3 lg:py-6 overflow-hidden">
      <Swiper
        spaceBetween={12}
        navigation={true}
        slidesPerView="auto"
        className="!overflow-visible smlBtn"
        modules={[Navigation]}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className='!w-auto'>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
