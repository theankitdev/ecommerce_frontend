import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const ads = [
    { img: "/fashionAds.webp", slug: "fashion" },
    { img: "/snacksAds.webp", slug: "snacks" },
    { img: "/iphoneAds.webp", slug: "iphones" },
    { img: "/smartphoneAds.webp", slug: "smartphones" },
];

const AdsBanner = () => {
    return (
        <div className='md:py-6 py-2  w-full overflow-hidden'>
            <Swiper
                spaceBetween={10}
                navigation={true}
                loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    0: { slidesPerView: 1, },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                }}
                className='overflow-visible smlBtn'
            >
                {ads.map(ad => (
                    <SwiperSlide key={ad.slug}>
                        <Link to={`/category/${ad.slug}`}>
                            <div className='overflow-hidden rounded-md group'>
                                <img src={ad.img} className='w-full transition-all group-hover:scale-105
                                  group-hover:rotate-2' alt={ad.slug} />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AdsBanner
