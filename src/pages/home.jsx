import React from 'react'
import HomeSlider from '../components/HomeSlider'
import CartSlider from '../components/CatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBanner from '../components/AdsBanner';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from '../components/ProductSlider';
import BlogSection from '../components/Blog';
import HomeBannerV2 from '../components/HomeBannerV2';
import AdsBannerV2 from '../components/AdsBannerV2';
import products from "../data/product.js"

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <CartSlider />

      {/* Popular Product Section */}
      <section className='bg-white py-3 md:py-8'>
        <div className='pl-[14px] md:pl-[24px]'>
          <div className='flex flex-col lg:flex-row lg:justify-between whitespace-nowrap lg:gap-5'>
            <div className='leftSec'>
              <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Popular Products</h2>
              <p className='lg:text-[14px] text-[12px] md:text-[13px]'>Do not miss the current offers until the end of March.</p>
            </div>

            <div className="rightSec lg:w-[60%] pr-[14px] md:pr-[24px]">
              <Box sx={{ bgcolor: 'background.paper' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#ff5252',
                    },
                    '& .MuiTab-root.Mui-selected': {
                      color: '#ff5252',
                      fontWeight: 600,
                    },
                  }}
                >
                  <Tab label="Fashion" sx={{ fontSize: { xs: '13px', md: '14px' } }} />
                  <Tab label="Electronics" sx={{ fontSize: { xs: '13px', md: '14px' } }} />
                  <Tab label="Bags" sx={{ fontSize: { xs: '13px', md: '14px' } }} />
                  <Tab label="Footwear" sx={{ fontSize: { xs: '13px', md: '14px' } }} />
                  <Tab label="Groceries" sx={{ fontSize: { xs: '13px', md: '14px' } }} />
                  <Tab label="Beauty" sx={{ fontSize: { xs: '13px', md: '14px' } }} />
                  <Tab label="Wellness" sx={{ fontSize: { xs: '13px', md: '14px' } }} />
                  <Tab label="Jewellery" sx={{ fontSize: { xs: '13px', md: '14px' } }} />
                </Tabs>
              </Box>
            </div>
          </div>

          <ProductSlider products={products}/>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="bg-white">
        <div className="container flex justify-center pb-6 pt-3 lg:pt-0">
          <div
            className="
              freeShipping
              w-full
              md:w-[80%]
              lg:w-full
              xl:w-[80%]
              border-2 border-[#ff5252]
              rounded-md
              flex flex-col
              lg:flex-row lg:items-center lg:justify-between
              p-4  lg:p-6
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

      {/* Home Banner V2 */}
      <section className="bg-white py-6 w-full">
  <div
    className="
      container
      grid
      grid-cols-1
      gap-6
      lg:grid-cols-[70%_29%]
      items-center
    "
  >
    {/* PART 1 */}
    <div className="w-full">
      <HomeBannerV2 />
    </div>

    {/* PART 2 */}
    <div className="w-full">
      <AdsBannerV2 />
    </div>
  </div>
</section>


      {/* Latest Product Section */}
      <section className='py-2 bg-white'>
        <div className='pl-[14px] md:pl-[24px]'>
          <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Latest Products</h2>
          <ProductSlider products={products}/>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className='bg-white'>
        <div className='pl-[14px] md:pl-[24px]'>
          <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Featured Products</h2>
          <ProductSlider products={products}/>
        </div>
      </section>

      <div className='container bg-white pb-2'>
        <AdsBanner items={4} />
      </div>

      {/* Jewellery Section */}
      <section className='pb-2 bg-white'>
        <div className='pl-[14px] md:pl-[24px]'>
          <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Jewellery</h2>
          <ProductSlider products={products}/>
        </div>
      </section>

      {/* Wellness Section */}
      <section className='pb-2 bg-white'>
        <div className='pl-[14px] md:pl-[24px]'>
          <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Wellness</h2>
          <ProductSlider products={products}/>
        </div>
      </section>

      {/* Beauty Section */}
      <section className='pb-2 bg-white'>
        <div className='pl-[14px] md:pl-[24px]'>
          <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Beauty</h2>
          <ProductSlider products={products}/>
        </div>
      </section>

      {/* Bags Section */}
      <section className='pb-2 bg-white'>
        <div className='pl-[14px] md:pl-[24px]'>
          <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Bags</h2>
          <ProductSlider products={products}/>
        </div>
      </section>

      {/* Groceries Section */}
      <section className='pb-2 bg-white'>
        <div className='pl-[14px] md:pl-[24px]'>
          <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Groceries</h2>
          <ProductSlider products={products}/>
        </div>
      </section>

      {/* Electronics Section */}
      <section className='pb-2 bg-white'>
        <div className='pl-[14px] md:pl-[24px]'>
          <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Electronics</h2>
          <ProductSlider products={products}/>
        </div>
      </section>

      {/* Blog Section */}
      <section className='bg-white'>
        <div className='container'>
          <ProductSlider products={products}/>
        </div>
      </section>
    </>
  )
}

export default Home
