import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { openProductDetail } from '../../features/productDetailModel/productDetailSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/product/${product.id}`}
      className="block productItem shadow-md border border-[rgba(0,0,0,0.1)] rounded-md sm:w-[180px] md:w-[220px] hover:shadow-lg transition"
    >
      {/* Image */}
      <div className="imgWrapper w-full  rounded-t-md overflow-hidden relative group">
        <div className="img md:h-[200px] h-[150px] bg-white flex items-center justify-center overflow-hidden relative">
          <img
            src={product?.images?.[0]}
            alt={product?.title}
            className="w-full h-full object-cover"
          />

          <img
            src={product?.images?.[1]}
            alt={product?.title}
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          />
        </div>

        <span className="discount absolute top-2.5 left-2.5 bg-[#ff5252] text-white rounded-lg p-1 text-[12px]">
          {product.discount}%
        </span>

        <div className="actions absolute -top-50 right-3 flex flex-col gap-2 group-hover:top-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button className="w-8.75! h-8.75! min-w-8.75! rounded-full! bg-white! text-black! hover:bg-[#ff5252]! hover:text-white!"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(openProductDetail());
            }}
          >
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
          {product.brand}
        </h6>

        <h3 className="text-[13px] font-medium truncate">
          {product.title}
        </h3>

        <Rating value={product.rating} size="small" readOnly />

        <div className="flex items-center justify-between">
          <span className="oldPrice line-through text-gray-500">${product.oldPrice}</span>
          <span className="price text-[#ff5252] font-semibold">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;