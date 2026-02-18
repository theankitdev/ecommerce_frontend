import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <section className='py-10'>
            <div className='container'>
                <div className='card shadow-md w-full sm:w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black font-semibold'>Register with a new account</h3>

                    <form className='w-full mt-5'>
                        <div className='form-group mb-5'>
                            <TextField
                                type='text'
                                id="name"
                                label="FullName *"
                                variant="standard"
                                className='w-full'
                            />
                        </div>

                        <div className='form-group mb-5'>
                            <TextField
                                type='email'
                                id="email"
                                label="Email *"
                                variant="standard"
                                className='w-full'
                            />
                        </div>

                        <div className='form-group mb-5 relative'>
                            <TextField
                                type={isShowPassword === false ? "password" : "text"}
                                id="password"
                                label="Password *"
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

                        <a className='link cursor-pointer text-[14px] font-medium'>Forget Password?</a>

                        <div className='flex items-center w-full mt-4'>
                            <Button className='bg-[#ff5252]! w-full text-white! hover:bg-black! font-semibold! py-2!'>
                                Register
                            </Button>
                        </div>

                        <p className='text-center mt-3'>
                            Already have an account?
                            <Link className="link text-[14px] font-semibold text-[#ff5252]" to={'/login'}>
                            &nbsp; Login
                            </Link>
                        </p>

                        <p className='text-center mt-3 font-medium mb-3'>Or continue with social account</p>

                        <Button className='flex gap-3 w-full border! text-black! py-2! font-semibold! mb-3!'>
                            <FcGoogle className='text-[22px]'/> Sign In with Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register
