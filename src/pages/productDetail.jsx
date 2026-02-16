import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../components/ProductZoom';
import productData from "../data/product.js";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QtyBox from '../components/QtyBox/index.jsx';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import ProductTabs from '../components/ProductTabs/index.jsx';
import ProductSlider from '../components/ProductSlider/index.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [wishlist, setWishlist] = useState(false);

  // convert id to number (important)
  const product = productData.find(
    item => item.id === Number(id)
  );

  // safety check
  if (!product) {
    return <div className="container py-10">Product Not Found</div>;
  }

  return (
    <>
      <div className='pt-5'>

        {/* BreadCrumb */}
        <div className='container mb-3'>
          <Breadcrumbs>
            <Link to="/" className='link'>Home</Link>
            <Link to="/" className='link'>Fashion</Link>
            <span>{product.title}</span>
          </Breadcrumbs>
        </div>

        <section className='bg-white py-5'>
          <div className='container flex-col flex md:flex-row gap-8 items-center'>

            {/* Left - Image */}
            <div className='productZoomContainer w-full md:w-[35%]'>
              <ProductZoom product={product} />
            </div>

            {/* Right - Info */}
            <div className='md:w-[65%]'>

              <h2 className="text-2xl font-semibold mb-2">
                {product.title}
              </h2>

              <div className='flex items-center gap-3 mb-4'>
                <span className="text-gray-400 text-[14px]">
                  Brand: <span className='font-medium text-black opacity-75'>{product.brand}</span>
                </span>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <span className='text-[14px] cursor-pointer text-gray-500'>Review (5)</span>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <span className="line-through text-gray-500 text-[18px]">
                  ${product.oldPrice}
                </span>
                <span className="text-[#ff5252] text-xl font-bold">
                  ${product.price}
                </span>

                <span className='text-[14px] flex gap-2'>Available In Stock:
                  <span className='text-green-600 text-[14px] font-bold'>147 Items</span>
                </span>
              </div>

              <p className="text-gray-600 mb-5">
                {product.description ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab aliquam et maiores pariatur mollitia cumque velit non molestias rerum eligendi inventore iste deserunt, temporibus modi error aut hic beatae."
                }
              </p>

              {/* Sizes Button */}
              <div className='flex items-center gap-3 mb-5'>
                <span className='text-[16px]'>Size:</span>
                <div className='flex items-center gap-1'>
                  <Button
                    onClick={() => setSelectedSize("S")}
                    className={`!min-w-[40px] !h-[30px] !border ${selectedSize === "S"
                      ? "!bg-[#ff5252] !text-white"
                      : "!border-gray-400 text-gray-700!"
                      }`}
                  >
                    S
                  </Button>
                  <Button
                    onClick={() => setSelectedSize("M")}
                    className={`!min-w-[40px] !h-[30px] !border ${selectedSize === "M"
                      ? "!bg-[#ff5252] !text-white"
                      : "!border-gray-400 text-gray-700!"
                      }`}
                  >
                    M
                  </Button>
                  <Button
                    onClick={() => setSelectedSize("L")}
                    className={`!min-w-[40px] !h-[30px] !border ${selectedSize === "L"
                      ? "!bg-[#ff5252] !text-white"
                      : "!border-gray-400 text-gray-700!"
                      }`}
                  >
                    L
                  </Button>
                  <Button
                    onClick={() => setSelectedSize("XL")}
                    className={`!min-w-[40px] !h-[30px] !border ${selectedSize === "XL"
                      ? "!bg-[#ff5252] !text-white"
                      : "!border-gray-400 text-gray-700!"
                      }`}
                  >
                    XL
                  </Button>
                </div>
              </div>

              <p className='text-[14px] mb-4'>Free Shipping (Est. Delivery Time 2-3 Days)</p>

              {/* Qty & Add to Cart Button */}
              <div className='flex items-center gap-6 mb-4'>
                <div className='qtyBox w-[70px]'>
                  <QtyBox />
                </div>

                <Button className='bg-[#ff5252]! flex gap-2 px-4! py-2! text-[12px]! font-bold! text-white! hover:bg-black!'>
                  <MdOutlineShoppingCart className="text-[22px]" /> Add to Cart
                </Button>
              </div>

              {/* Add to Wishlist Button */}
              <div className='flex items-center'>
                <span
                  onClick={() => setWishlist(!wishlist)}
                  className='flex items-center gap-2 text-[14px] cursor-pointer'
                >
                  <FaHeart className={wishlist ? "text-red-500" : "text-gray-500"} />
                  {wishlist ? "Added to Wishlist" : "Add to Wishlist"}
                </span>
              </div>
            </div>

          </div>

          {/* Description , Details & Review Tabs */}
          <div className='container my-8'>
            <ProductTabs product={product}/>
          </div>

          {/* Related Product */}
          <div className='container'>
          <h2 className='lg:text-[20px] text-[14px] md:text-[16px] font-[600]'>Related Products</h2>
          <ProductSlider />
        </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;