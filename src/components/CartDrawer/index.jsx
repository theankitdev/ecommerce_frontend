import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../../features/cart/cartSlice';
import products from "../../data/product.js"
import { MdOutlineDeleteOutline } from 'react-icons/md';

const CartDrawer = () => {
    const isOpen = useSelector((state) => state.cart.isOpen);
    const dispatch = useDispatch();

    return (
        <Drawer
            open={isOpen}
            onClose={() => dispatch(closeCart())}
            anchor="right"
            PaperProps={{ sx: { width:{ xs:300, sm: 400 }} }}
        >
            <div className="flex flex-col h-full">

                {/* Header */}
                <div className="flex items-center justify-between py-3 px-4 border-b">
                    <h4 className="font-semibold">Shopping Cart</h4>
                    <IoCloseSharp
                        className="text-[20px] cursor-pointer"
                        onClick={() => dispatch(closeCart())}
                    />
                </div>

                {/* Scrollable Items */}
                <div className="flex-1 overflow-y-auto py-3 px-4">
                    {products.map(product => (
                        <Link
                            key={product.id}
                            className="flex gap-4 mb-4 border-b pb-3"
                        >
                            <div className="w-20 h-20 group overflow-hidden">
                                <img
                                    src={product?.images[0]}
                                    className="w-full h-full object-cover rounded group-hover:scale-110"
                                    alt={product?.title}
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <h4 className="text-[14px] font-medium line-clamp-2 link">
                                    {product?.title}
                                </h4>

                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-[14px] font-semibold">
                                        Qty: 2
                                    </span>
                                    <span className="text-[#ff5252] text-[14px] font-semibold">
                                        Price: $25
                                    </span>
                                </div>
                            </div>

                            <MdOutlineDeleteOutline className="text-[20px] cursor-pointer hover:text-red-500" />
                        </Link>
                    ))}
                </div>

                {/* Footer (Fixed) */}
                <div className="border-t p-4 space-y-3">

                    <div className="flex justify-between text-sm font-semibold">
                        <span>1 item</span>
                        <span className="text-[#ff5252]">$86.00</span>
                    </div>

                    <div className="flex justify-between text-sm font-semibold">
                        <span>Shipping</span>
                        <span className="text-[#ff5252]">$7.00</span>
                    </div>

                    <div className="flex justify-between font-bold border-t pt-2">
                        <span>Total (tax excl.)</span>
                        <span className="text-[#ff5252]">$93.00</span>
                    </div>

                    <div className="flex gap-4 mt-3">
                        <Button className="w-1/2 bg-[#ff5252]! text-white! hover:bg-black!">
                            View Cart
                        </Button>
                        <Button className="w-1/2 bg-[#ff5252]! text-white! hover:bg-black!">
                            Checkout
                        </Button>
                    </div>

                </div>

            </div>
        </Drawer>
    )
}

export default CartDrawer
