import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductZoom = ({ product }) => {
  const zoomSliderBig = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [1,2,3,4,5,6,7];

  const goto = (index) => {
    if (zoomSliderBig.current) {
      zoomSliderBig.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex gap-4 h-[450px] overflow-hidden">

      {/* Thumbnails */}
      <div className=" lg:w-[15%] h-[375px] md:h-[300px] lg:h-[450px] ">
        <Swiper
          direction="vertical"
          slidesPerView='auto'
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductSlider smlBtn h-full!"
        >
          {images.map((_, i) => (
            <SwiperSlide
              key={i}
              className="!h-[90px] cursor-pointer"
              onClick={() => goto(i)}
            >
              <img
                src={product.img1}
                className={`w-full h-full object-cover rounded-md transition-opacity duration-300 ${
                  activeIndex === i ? 'opacity-100' : 'opacity-40'
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Slider */}
      <div className="w-[85%] h-[450px] rounded-md overflow-hidden">
        <Swiper
          slidesPerView={1}
          onSwiper={(swiper) => (zoomSliderBig.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full"
        >
          {images.map((_, i) => (
            <SwiperSlide key={i}>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={product.img1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default ProductZoom;