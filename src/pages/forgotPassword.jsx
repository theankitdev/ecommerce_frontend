import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowPassword2, setIsShowPassword2] = useState(false)
    const[form, setForm] = useState({
        password:'',
        confirmPassword:''
    })

    const navigate = useNavigate();

    const forgotPassword = () => {
        navigate("/login");
        toast.success("Forgot Password Successfully")
    }

    return (
        <section className='py-10'>
            <div className='container'>
                <div className='card shadow-md sm:w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black font-semibold'>Forgot Password</h3>

                    <form className='w-full mt-5'>

                        <div className='form-group mb-5 relative'>
                            <TextField
                                type={isShowPassword === false ? "password" : "text"}
                                id="password"
                                label="New Password"
                                variant="standard"
                                className='w-full'
                            />
                            <Button className="absolute! top-[10px] right-[10px] z-50 w-[35px]! h-[35px]! min-w-[35px]! rounded-full!"
                                onClick={() => setIsShowPassword(!isShowPassword)}>
                                {isShowPassword === true ?
                                    <IoMdEye className='text-[20px] text-black opacity-75' />
                                    : <IoMdEyeOff className='text-[20px] text-black opacity-75' />
                                }
                            </Button>
                        </div>

                        <div className='form-group mb-5 relative'>
                            <TextField
                                type={isShowPassword2 === false ? "password" : "text"}
                                id="confirmPassword"
                                label="Confirm Password"
                                variant="standard"
                                className='w-full'
                            />
                            <Button className="absolute! top-[10px] right-[10px] z-50 w-[35px]! h-[35px]! min-w-[35px]! rounded-full!"
                                onClick={() => setIsShowPassword2(!isShowPassword2)}>
                                {isShowPassword2 === true ?
                                    <IoMdEye className='text-[20px] text-black opacity-75' />
                                    : <IoMdEyeOff className='text-[20px] text-black opacity-75' />
                                }
                            </Button>
                        </div>

                        <div className='flex items-center w-full mt-4'>
                            <Button className='bg-[#ff5252]! w-full text-white! hover:bg-black! font-semibold! py-2!'
                              onClick={forgotPassword}
                            >
                                Change Password
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;
