import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const ProductItem = ({ product }) => {
  return (
    <div className="productItem shadow-md border border-[rgba(0,0,0,0.1)] rounded-md w-[160px] sm:w-[180px] md:w-[220px]">
      
      {/* Image */}
      <div className="imgWrapper w-full  rounded-t-md overflow-hidden relative group">
        <div className="img md:h-50 h-[150px] overflow-hidden">
          <img src={product.img1} className="w-full" />
          <img
            src={product.img2}
            className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
          />
        </div>

        <span className="discount absolute top-2.5 left-2.5 bg-[#ff5252] text-white rounded-lg p-1 text-[12px]">
          {product.discount}%
        </span>

        <div className="actions absolute -top-50 right-3 flex flex-col gap-2 group-hover:top-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button className="w-8.75! h-8.75! min-w-8.75! rounded-full! bg-white! text-black! hover:bg-[#ff5252]! hover:text-white!">
            <MdOutlineZoomOutMap />
          </Button>
          <Button className="w-8.75! h-8.75! min-w-8.75! rounded-full! bg-white! text-black! hover:bg-[#ff5252]! hover:text-white!">
            <FaRegHeart />
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="info p-3 py-5">
        <h6 className="text-[13px]">
          <Link to="/" className="link">{product.brand}</Link>
        </h6>

        <h3 className="text-[13px] font-medium truncate">
          <Link to="/" className="link">{product.title}</Link>
        </h3>

        <Rating value={product.rating} size="small" readOnly />

        <div className="flex items-center justify-between">
          <span className="oldPrice line-through text-gray-500">${product.oldPrice}</span>
          <span className="price text-[#ff5252] font-semibold">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
