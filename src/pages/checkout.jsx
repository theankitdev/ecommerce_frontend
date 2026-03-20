import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import toast from "react-hot-toast";

const cartItems = [
  { id: 1, name: "Shoes", price: 999, qty: 2 },
  { id: 2, name: "T-Shirt", price: 499, qty: 1 },
];

const shipping = 50;

const subtotal = cartItems.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);

const total = subtotal + shipping;

const Checkout = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleOrder = () => {

        const { name, email, phone, address, city, pincode } = form;

        if (!name || !email || !phone || !address || !city || !pincode) {
            toast.error("Please fill all fields");
            return;
        }

        toast.success("Order Placed Successfully 🎉");
        console.log("Order Data:", form);
    };

    return (
        <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">

                <h2 className="text-2xl font-bold mb-6">Checkout</h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* Billing Form */}
                    <div className="md:col-span-2 bg-white p-6 rounded shadow">

                        <h3 className="text-lg font-semibold mb-4">
                            Billing Details
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4">

                            <TextField
                                label="Full Name"
                                variant="standard"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                fullWidth
                            />

                            <TextField
                                label="Email"
                                variant="standard"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                fullWidth
                            />

                            <TextField
                                label="Phone"
                                variant="standard"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                fullWidth
                            />

                            <TextField
                                label="City"
                                variant="standard"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                fullWidth
                            />

                        </div>

                        <div className="mt-4">
                            <TextField
                                label="Address"
                                variant="standard"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>

                        <div className="mt-4">
                            <TextField
                                label="Pincode"
                                variant="standard"
                                name="pincode"
                                value={form.pincode}
                                onChange={handleChange}
                                fullWidth
                            />
                        </div>

                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded shadow h-fit">
                        <h3 className="text-lg font-semibold mb-4">
                            Order Summary
                        </h3>

                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between mb-2">
                                <span>
                                    {item.name} × {item.qty}
                                </span>
                                <span>₹{item.price * item.qty}</span>
                            </div>
                        ))}

                        <div className="flex justify-between mt-3">
                            <span>Subtotal</span>
                            <span>₹{subtotal}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>₹{shipping}</span>
                        </div>

                        <hr className="my-3" />

                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>

                        <Button
                            onClick={handleOrder}
                            className="bg-[#ff5252]! mt-5 w-full text-white! hover:bg-black! py-2! font-semibold!"
                        >
                            Place Order
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Checkout;