import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const ads = [
    { img: "/fashionAds.webp", slug: "fashion" },
    { img: "/snacksAds.webp", slug: "snacks" },
    { img: "/iphoneAds.webp", slug: "iphones" },
    { img: "/smartphoneAds.webp", slug: "smartphones" },
];

const AdsBanner = (props) => {
    return (
        <div className='container w-full overflow-hidden'>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                {ads.map(ad => (
                    <SwiperSlide key={ad.slug}>
                        <Link to={`/category/${ad.slug}`}>
                            <div className='rounded-md'>
                                <img src={ad.img} className='w-full' alt='ad'/>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AdsBanner
