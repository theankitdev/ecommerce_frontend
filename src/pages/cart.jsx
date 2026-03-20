import React, { useState } from "react";
import products from "../data/product.js";
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Cart = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [selectedSize, setSelectedSize] = useState("S");
    const [quantity, setQuantity] = useState({});

    const open = Boolean(anchorEl);

    const handleClick = (event, productId) => {
        setAnchorEl(event.currentTarget);
        setSelectedProductId(productId);
    };

    const handleClose = (size) => {
        if (size) setSelectedSize(size);
        setAnchorEl(null);
    };

    const increaseQuantity = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

    const decreaseQuantity = (id) => {
        setQuantity(prev => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1
        }));
    };

    return (
        <section className="py-8 bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-[18px] font-semibold mb-1">Your Cart</h2>
                    <p className="mb-6 text-sm text-gray-600">
                        There are{" "}
                        <span className="font-bold text-[#ff5252]">
                            {products.length}
                        </span>{" "}
                        products in your cart
                    </p>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* LEFT SIDE */}
                        <div className="lg:w-3/4">
                            <div className="bg-white rounded-md shadow-md divide-y">

                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-start gap-4 p-4"
                                    >

                                        {/* Image */}
                                        <div className="w-25 sm:w-30 h-30 flex-shrink-0">
                                            <img
                                                src={product?.images[0]}
                                                className="w-full h-full object-cover rounded"
                                                alt={product?.title}
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1">
                                            <span className="text-xs text-gray-500">
                                                {product?.brand}
                                            </span>

                                            <h3 className="text-sm font-medium line-clamp-1">
                                                {product?.title}
                                            </h3>

                                            {/* Size Selector */}
                                            <div className="flex items-center gap-8 mt-3">

                                                {/* Size */}
                                                <Button
                                                    onClick={(e) => handleClick(e, product.id)}
                                                    className="!p-0"
                                                >
                                                    <span className="flex items-center gap-1 bg-gray-200 text-[12px] font-semibold py-1 px-2 rounded-md">
                                                        Size: {selectedSize} <GoTriangleDown />
                                                    </span>
                                                </Button>

                                                {/* Quantity Box */}
                                                <div className="flex items-center">

                                                    <button
                                                        onClick={() => decreaseQuantity(product.id)}
                                                        className="px-1 py-1 bg-gray-200 hover:bg-gray-200 rounded-full"
                                                    >
                                                        <FiMinus />
                                                    </button>

                                                    <input
                                                        type="text"
                                                        value={quantity[product.id] || 1}
                                                        readOnly
                                                        className="w-10 text-center outline-none"
                                                    />

                                                    <button
                                                        onClick={() => increaseQuantity(product.id)}
                                                        className="px-1 py-1 bg-gray-200 hover:bg-gray-200 rounded-full"
                                                    >
                                                        <IoMdAdd />
                                                    </button>

                                                </div>

                                            </div>


                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="text-black text-sm font-semibold">
                                                    ${product?.price}
                                                </span>

                                                <span className="line-through text-gray-400 text-sm">
                                                    ${product?.oldPrice}
                                                </span>

                                                <span className="text-[#ff5252] text-sm font-semibold">
                                                    {product?.discount}% OFF
                                                </span>
                                            </div>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            aria-label="Remove item"
                                            className="self-start text-gray-400 hover:text-red-500 transition"
                                        >
                                            <IoCloseSharp size={18} />
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:w-1/4 bg-white rounded-md shadow-md p-6 h-fit sticky top-24">
                            <h3 className="font-semibold mb-4 text-lg">
                                Order Summary
                            </h3>

                            <div className="flex justify-between text-sm mb-3">
                                <span>Subtotal</span>
                                <span>$172.00</span>
                            </div>

                            <div className="flex justify-between text-sm mb-3">
                                <span>Shipping</span>
                                <span>$10.00</span>
                            </div>

                            <div className="flex justify-between font-semibold border-t pt-3 mt-3">
                                <span>Total</span>
                                <span className="text-[#ff5252]">$182.00</span>
                            </div>

                            <button className="w-full bg-[#ff5252] text-white py-2 mt-5 rounded hover:bg-black transition">
                                Proceed to Checkout
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* GLOBAL MENU (Single Menu Used For All Items) */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
            >
                <MenuItem onClick={() => handleClose("S")}>S</MenuItem>
                <MenuItem onClick={() => handleClose("M")}>M</MenuItem>
                <MenuItem onClick={() => handleClose("L")}>L</MenuItem>
                <MenuItem onClick={() => handleClose("XL")}>XL</MenuItem>
            </Menu>

        </section>
    );
};

export default Cart;