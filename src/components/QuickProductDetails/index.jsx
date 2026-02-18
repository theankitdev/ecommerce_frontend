import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useSelector, useDispatch } from 'react-redux';
import { closeProductDetail } from "../../features/productDetailModel/productDetailSlice";
import ProductZoom from '../../components/ProductZoom'
import productData from '../../data/product'
import { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const product = productData.find(
  item => item.id === Number(1)
)

const QuickProductdetail = () => {
  const dispatch = useDispatch();
  const { open, } = useSelector((state) => state.productDetail);
  const [fullWidth, setFullWidth] = useState(true)
  const [maxWidth, setMaxWidth] = useState("lg");
  const [selectedSize, setSelectedSize] = useState(null);
  const [wishlist, setWishlist] = useState(false);

  return (
    <Dialog
        open={open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
        <DialogContent>
          <div className="flex items-center w-full gap-6 py-5">
            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full! text-black! absolute! top-[8px] right-[8px]'
              onClick={() => dispatch(closeProductDetail())}
            >
              <IoCloseSharp className='text-[20px]' />
            </Button>

            {/* Image Section */}
            <div className='col1 w-[40%]'>
              <ProductZoom product={product} />
            </div>

            {/* Details Section */}
            <div className='col2 md:w-[60%] px-4'>

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
        </DialogContent>
      </Dialog>
  )
}

export default QuickProductdetail
