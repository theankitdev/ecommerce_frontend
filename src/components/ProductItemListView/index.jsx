import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdOutlineShoppingCart, MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const ProductItemListView = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`} 
      className="productItem flex w-full bg-white shadow-sm border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition h-[180px] sm:h-[220px]"
    >
      {/* Image Section */}
      <div className="imgWrapper w-[150px] sm:w-[220px]  relative group overflow-hidden group">
        <img
          src={product.img1}
          className="w-full object-cover"
        />

        <img
          src={product.img2}
          className="w-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-300"
        />

        <div className="actions absolute -top-50 right-3 flex flex-col gap-2 group-hover:top-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button className="!min-w-[36px] !w-[36px] !h-[36px] !rounded-full !bg-gray-100 hover:!bg-[#ff5252] hover:!text-white">
              <MdOutlineZoomOutMap />
            </Button>

            <Button className="!min-w-[36px] !w-[36px] !h-[36px] !rounded-full !bg-gray-100 hover:!bg-[#ff5252] hover:!text-white">
              <FaRegHeart />
            </Button>
          </div>

        <span className="absolute top-3 left-3 bg-[#ff5252] text-white text-xs px-2 py-1 rounded">
          {product.discount}%
        </span>
      </div>

      {/* Info Section */}
      <div className="info flex-1 py-2 px-8 flex flex-col justify-between">
        <div>
          <h6 className="text-sm text-gray-500 mb-1">
            <Link to="/" className="hover:text-[#ff5252]">
              {product.brand}
            </Link>
          </h6>

          <h3 className="text-lg font-semibold mb-1 line-clamp-1">
            <Link to="/" className="hover:text-[#ff5252]">
              {product.title}
            </Link>
          </h3>

          <p className="text-sm text-gray-600 mb-1 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent commodo cursus magna. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio est ex delectus asperiores sed necessitatibus officiis non fuga illo tempora unde quibusdam quis quidem possimus, veritatis nemo similique autem iusto!
          </p>
          <Rating value={product.rating} size="small" readOnly />
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="line-through text-gray-400 mr-2">
              ${product.oldPrice}
            </span>
            <span className="text-[#ff5252] text-lg font-bold">
              ${product.price}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className='mt-3 hidden sm:block'>
          <Button className='bg-[#ff5252]! px-4! py-2! gap-1 text-[12px]! text-white! font-semibold! hover:bg-gray-900!'>
            <MdOutlineShoppingCart className='text-[18px]'/> Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItemListView;