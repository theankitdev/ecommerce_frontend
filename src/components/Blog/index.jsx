import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const BlogSection = () => {
    return (
        <div className='py-2 w-full overflow-hidden'>
            <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600] mb-4'>From the blog</h2>
            <Swiper
                spaceBetween={20}
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
                <SwiperSlide>
                    <div className='overflow-hidden rounded-md'>
                        <div className='imageWrapper w-full overflow-hidden relative group cursor-pointer'>
                            <img src='https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg'
                                className='w-full transition-all group-hover:scale-105 group-hover:rotate-1'
                                alt='blog image'
                            />

                            <span className='flex items-center justify-center text-white absolute bottom-3 
                                right-3 z-50 bg-[#ff5252] rounded-md text-[11px] p-1 font-medium gap-1'>
                                <IoMdTime className='text-[17px]' /> 2026-02-12
                            </span>
                        </div>

                        <div className="info py-4">
                            <h2 className='text-[14px] md:text-[16px] font-[600] text-black'>
                                <Link to={`/`} className='link'>Nullam ullamcorper ornare molestie</Link>
                            </h2>
                            <p className='text-[12px] md:text-[14px] font-[400] text-[600] line-clamp-2 mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam provident quas est error
                                vero distinctio dolores velit aperiam explicabo nesciunt qui rerum autem. Corporis sit quam pariatur consequatur voluptates!
                            </p>

                            <Link to={`/`} className='link font-medium hover:underline text-[14px] md:text-[15px] flex items-center gap-1'>
                                Read More <IoIosArrowForward />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='overflow-hidden rounded-md'>
                        <div className='imageWrapper w-full overflow-hidden relative group cursor-pointer'>
                            <img src='https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg'
                                className='w-full transition-all group-hover:scale-105 group-hover:rotate-1'
                                alt='blog image'
                            />

                            <span className='flex items-center justify-center text-white absolute bottom-3 
                                right-3 z-50 bg-[#ff5252] rounded-md text-[11px] p-1 font-medium gap-1'>
                                <IoMdTime className='text-[17px]' /> 2026-02-12
                            </span>
                        </div>

                        <div className="info py-4">
                            <h2 className='text-[14px] md:text-[16px] font-[600] text-black'>
                                <Link to={`/`} className='link'>Nullam ullamcorper ornare molestie</Link>
                            </h2>
                            <p className='text-[12px] md:text-[14px] font-[400] text-[600] line-clamp-2 mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam provident quas est error
                                vero distinctio dolores velit aperiam explicabo nesciunt qui rerum autem. Corporis sit quam pariatur consequatur voluptates!
                            </p>

                            <Link to={`/`} className='link font-medium hover:underline text-[14px] md:text-[15px] flex items-center gap-1'>
                                Read More <IoIosArrowForward />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='overflow-hidden rounded-md'>
                        <div className='imageWrapper w-full overflow-hidden relative group cursor-pointer'>
                            <img src='https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg'
                                className='w-full transition-all group-hover:scale-105 group-hover:rotate-1'
                                alt='blog image'
                            />

                            <span className='flex items-center justify-center text-white absolute bottom-3 
                                right-3 z-50 bg-[#ff5252] rounded-md text-[11px] p-1 font-medium gap-1'>
                                <IoMdTime className='text-[17px]' /> 2026-02-12
                            </span>
                        </div>

                        <div className="info py-4">
                            <h2 className='text-[14px] md:text-[16px] font-[600] text-black'>
                                <Link to={`/`} className='link'>Nullam ullamcorper ornare molestie</Link>
                            </h2>
                            <p className='text-[12px] md:text-[14px] font-[400] text-[600] line-clamp-2 mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam provident quas est error
                                vero distinctio dolores velit aperiam explicabo nesciunt qui rerum autem. Corporis sit quam pariatur consequatur voluptates!
                            </p>

                            <Link to={`/`} className='link font-medium hover:underline text-[14px] md:text-[15px] flex items-center gap-1'>
                                Read More <IoIosArrowForward />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='overflow-hidden rounded-md'>
                        <div className='imageWrapper w-full overflow-hidden relative group cursor-pointer'>
                            <img src='https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg'
                                className='w-full transition-all group-hover:scale-105 group-hover:rotate-1'
                                alt='blog image'
                            />

                            <span className='flex items-center justify-center text-white absolute bottom-3 
                                right-3 z-50 bg-[#ff5252] rounded-md text-[11px] p-1 font-medium gap-1'>
                                <IoMdTime className='text-[17px]' /> 2026-02-12
                            </span>
                        </div>

                        <div className="info py-4">
                            <h2 className='text-[14px] md:text-[16px] font-[600] text-black'>
                                <Link to={`/`} className='link'>Nullam ullamcorper ornare molestie</Link>
                            </h2>
                            <p className='text-[12px] md:text-[14px] font-[400] text-[600] line-clamp-2 mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam provident quas est error
                                vero distinctio dolores velit aperiam explicabo nesciunt qui rerum autem. Corporis sit quam pariatur consequatur voluptates!
                            </p>

                            <Link to={`/`} className='link font-medium hover:underline text-[14px] md:text-[15px] flex items-center gap-1'>
                                Read More <IoIosArrowForward />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BlogSection
