import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="mt-8">

            {/* Tabs Header */}
            <div className="flex flex-wrap items-center gap-6 border-b pb-3">

                <span
                    onClick={() => setActiveTab("description")}
                    className={`cursor-pointer text-[17px] font-medium pb-2 transition-all duration-300 ${activeTab === "description"
                            ? "text-[#ff5252] border-b-2 border-[#ff5252]"
                            : "text-gray-600"
                        }`}
                >
                    Description
                </span>

                <span
                    onClick={() => setActiveTab("details")}
                    className={`cursor-pointer text-[17px] font-medium pb-2 transition-all duration-300 ${activeTab === "details"
                            ? "text-[#ff5252] border-b-2 border-[#ff5252]"
                            : "text-gray-600"
                        }`}
                >
                    Product Details
                </span>

                <span
                    onClick={() => setActiveTab("reviews")}
                    className={`cursor-pointer text-[17px] font-medium pb-2 transition-all duration-300 ${activeTab === "reviews"
                            ? "text-[#ff5252] border-b-2 border-[#ff5252]"
                            : "text-gray-600"
                        }`}
                >
                    Reviews (5)
                </span>

            </div>

            {/* Tab Content */}
            <div className="mt-6 text-gray-700 leading-7 px-6 md:px-10 py-5 rounded-md shadow-md bg-white">

                {/* DESCRIPTION */}
                {activeTab === "description" && (
                    <div>
                        <p className="text-[14px] leading-6">
                            {product.description ||
                                "This product is made with premium quality material ensuring comfort and durability. Perfect for daily wear and special occasions."
                            }
                        </p>

                        <h4 className="font-semibold my-2">Lightweight Design</h4>
                        <p className="text-[14px] leading-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus rerum molestiae dolores nam expedita assumenda accusantium.
                        </p>

                        <h4 className="font-semibold my-2">Free Shipping & Return</h4>
                        <p className="text-[14px] leading-6">
                            Id architecto fuga praesentium repudiandae at facere assumenda. Iure eos perferendis cumque quaerat.
                        </p>

                        <h4 className="font-semibold my-2">Money Back Guarantee</h4>
                        <p className="text-[14px] leading-6">
                            Voluptatem modi suscipit magnam fugiat maxime tenetur! Officiis necessitatibus corporis sit ad delectus.
                        </p>

                        <h4 className="font-semibold my-2">Online Support</h4>
                        <p className="text-[14px] leading-6">
                            Sunt dicta incidunt temporibus quos rem soluta magni commodi illum neque minima.
                        </p>
                    </div>
                )}

                {/* DETAILS */}
                {activeTab === "details" && (
                    <div className="relative overflow-x-auto rounded-md">
                        <table className="w-full text-sm text-left text-gray-600 border border-gray-200">
                            <thead className="text-sm uppercase bg-gray-100 border-b">
                                <tr>
                                    <th className="px-6 py-3 font-semibold">Product Name</th>
                                    <th className="px-6 py-3 font-semibold">Color</th>
                                    <th className="px-6 py-3 font-semibold">Category</th>
                                    <th className="px-6 py-3 font-semibold">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-6 py-4 font-medium">
                                        Apple MacBook Pro 17"
                                    </td>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Laptop</td>
                                    <td className="px-6 py-4">$2999</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="px-6 py-4 font-medium">
                                        Microsoft Surface Pro
                                    </td>
                                    <td className="px-6 py-4">White</td>
                                    <td className="px-6 py-4">Laptop PC</td>
                                    <td className="px-6 py-4">$1999</td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 font-medium">
                                        Magic Mouse 2
                                    </td>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">$99</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* REVIEWS */}
                {activeTab === "reviews" && (
                    <div className="w-[80%]">
                        <h2 className="text-[18px] font-semibold mb-4">
                            Customer Questions & Reviews
                        </h2>

                        {/* Posted Reviews */}
                        <div className="reviewScroll max-h-[300px] overflow-y-auto space-y-4 pr-4">
                            <div className="border p-4 rounded-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <img
                                        src="https://thumbs.dreamstime.com/b/head-shot-portrait-handsome-smiling-young-male-looking-camera-shiny-smile-head-shot-photography-portrait-handsome-smiling-young-357008454.jpg"
                                        alt="user"
                                        className="w-[50px] h-[50px] object-cover rounded-full"
                                    />
                                    <div>
                                        <h4 className="text-[15px] font-medium">
                                            Rinku Verma
                                        </h4>
                                        <span className="text-[12px] text-gray-500">
                                            2024-12-01
                                        </span>
                                    </div>
                                </div>

                                <Rating value={4} readOnly size="small" />

                                <p className="text-[14px]">
                                    Very comfortable and good quality. Highly recommended! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi molestiae assumenda minus, error recusandae accusamus saepe officia atque? Error quod et veniam alias rem, laboriosam accusantium ullam nesciunt vitae?
                                </p>
                            </div>

                            <div className="border p-4 rounded-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <img
                                        src="https://thumbs.dreamstime.com/b/head-shot-portrait-handsome-smiling-young-male-looking-camera-shiny-smile-head-shot-photography-portrait-handsome-smiling-young-357008454.jpg"
                                        alt="user"
                                        className="w-[50px] h-[50px] object-cover rounded-full"
                                    />
                                    <div>
                                        <h4 className="text-[15px] font-medium">
                                            Rinku Verma
                                        </h4>
                                        <span className="text-[12px] text-gray-500">
                                            2024-12-01
                                        </span>
                                    </div>
                                </div>

                                <Rating value={4} readOnly size="small" />

                                <p className="text-[14px]">
                                    Very comfortable and good quality. Highly recommended! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi molestiae assumenda minus, error recusandae accusamus saepe officia atque? Error quod et veniam alias rem, laboriosam accusantium ullam nesciunt vitae?
                                </p>
                            </div>
                        </div>

                        <br />
                        {/* Review Form */}
                        <div className="bg-[#fafafa] p-4 rounded-md">
                            <h2 className="text-[18px] mb-5 font-semibold">Add a review</h2>

                            <form className="w-full">
                            <TextField
                                id="outlined-multiline-static"
                                label="Write a review"
                                multiline
                                rows={5}
                                className="w-full"
                            />
                            <Rating name="size-small" defaultValue={4} className="mt-5"/>

                            <div className="mt-5">
                                <Button className="bg-[#ff5252]! text-[12px]! px-4! py-2! text-white! hover:bg-black!">Submit Review</Button>
                            </div>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProductTabs;