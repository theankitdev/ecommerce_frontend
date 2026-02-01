import React from 'react'
import HomeSlider from '../components/HomeSlider'
import CartSlider from '../components/CatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBanner from '../components/AdsBanner';

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CartSlider />

      {/* Free Shipping Banner */}
      <section className="py-10 lg:py-16 bg-white flex justify-center">
        <div className="container flex justify-center">
          <div
            className="
              freeShipping
              w-full
              md:w-[80%]
              border-2 border-[#ff5252]
              rounded-md
              flex flex-col
              lg:flex-row lg:items-center lg:justify-between
              p-4 lg:p-6
              text-center lg:text-left
            "
          >
            {/* Left */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <LiaShippingFastSolid className="text-[36px] lg:text-[50px]" />
              <span className="text-[18px] lg:text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            {/* Middle */}
            <div>
              <p className="font-[500] text-[14px] lg:text-[16px]">
                Free delivery now on your first order and over $200
              </p>
            </div>

            {/* Right */}
            <div className="font-bold text-[20px] lg:text-[25px] mt-3 lg:mt-0">
              - Only $200*
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
