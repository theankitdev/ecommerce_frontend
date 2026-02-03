import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const categories = [
  { name: "Fashion", img: "/fashion.png", slug: "fashion" },
  { name: "Electronics", img: "/electronics.png", slug: "electronics" },
  { name: "Bags", img: "/bags.png", slug: "bags" },
  { name: "Shoes", img: "/shoes.png", slug: "shoes" },
  { name: "Groceries", img: "/groceries.png", slug: "groceries" },
  { name: "Beauty", img: "/beauty.png", slug: "beauty" },
  { name: "Wellness", img: "/wellness.png", slug: "wellness" },
  { name: "Jewellery", img: "/jewellery.png", slug: "jewellery" }
];

const CatSlider = () => {
  return (
    <div className="catSlider md:pt-4 pb-4 md:pb-8 overflow-hidden">
      <div className="container">
        <Swiper
          spaceBetween={12}
          breakpoints={{
            0: { slidesPerView: 4 },
            480: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 }
          }}
          className="!overflow-visible"
        >
          {categories.map(cat => (
            <SwiperSlide key={cat.slug}>
              <Link to={`/category/${cat.slug}`}>
                <div className="lg:px-3 py-3 lg:py-6 bg-white rounded-sm text-center flex flex-col items-center hover:shadow-md transition">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-[50%] transition-transform hover:scale-110"
                  />
                  <h3 className="lg:text-[18px] text-[90%] font-medium mt-3">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CatSlider;
