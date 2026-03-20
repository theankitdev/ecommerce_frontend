import React, { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [timer, setTimer] = useState(30);
    const inputRefs = useRef([]);
    const navigate = useNavigate()

    // Timer countdown
    useEffect(() => {
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    // Handle OTP Change
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Move to next input
        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
        }
    };

    // Handle Backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "") {
            if (e.target.previousSibling) {
                e.target.previousSibling.focus();
            }
        }
    };

    // Verify OTP
    const handleVerify = () => {
        const enteredOtp = otp.join("");

        if (enteredOtp.length < 6) {
            toast.error("Please enter complete OTP");
            return;
        }
        navigate('/forgot-password')
        toast.success("OTP Verified Successfully 🎉");
        console.log("Entered OTP:", enteredOtp);
    };

    // Resend OTP
    const handleResend = () => {
        toast.success("OTP Resent Successfully");
        setTimer(30);
        setOtp(new Array(6).fill(""));
        inputRefs.current[0].focus();
    };

    return (
        <section className='py-10'>
            <div className='container'>
                <div className='card shadow-md sm:w-[400px] m-auto rounded-md bg-white p-5 px-10'>

                    <div className='flex justify-center'>
                        <img src='/security.png' width={80} alt="security" />
                    </div>

                    <h3 className='text-center text-[18px] text-black font-semibold mt-4'>
                        Verify OTP
                    </h3>

                    {/* OTP Inputs */}
                    <div className='flex justify-center gap-2 mt-6'>
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className='w-10 h-10 border rounded text-center text-lg focus:outline-none focus:border-[#ff5252]'
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputRefs.current[index] = el)}
                            />
                        ))}
                    </div>

                    {/* Verify Button */}
                    <div className='mt-6'>
                        <Button
                            onClick={handleVerify}
                            className='bg-[#ff5252]! w-full text-white! hover:bg-black! font-semibold! py-2!'
                        >
                            Verify
                        </Button>
                    </div>

                    {/* Resend OTP */}
                    <div className='text-center mt-4 text-sm'>
                        {timer > 0 ? (
                            <p>Resend OTP in <span className='font-semibold'>{timer}s</span></p>
                        ) : (
                            <button
                                onClick={handleResend}
                                className='text-[#ff5252] font-semibold cursor-pointer'
                            >
                                Resend OTP
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Verify;