import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../features/auth/authSlice";

const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            toast.error("All fields required");
            return;
        }

        const res = await dispatch(login(form));

        if (res.meta.requestStatus === "fulfilled") {
            toast.success("Login Successful");
            navigate("/");
        } else {
            toast.error(res.payload?.message || "Login failed");
        }
    };

    const navigate = useNavigate();

    const forgotPassword = () => {
        navigate("/verify");
        toast.success("OTP Send")
    }

    return (
        <section className='py-10'>
            <div className='container'>
                <div className='card shadow-md sm:w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black font-semibold'>Login to your account</h3>

                    <form className='w-full mt-5' onSubmit={handleLogin}>
                        <div className='form-group mb-5'>
                            <TextField
                                type='email'
                                id="email"
                                label="Email *"
                                variant="standard"
                                className='w-full'
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>

                        <div className='form-group mb-5 relative'>
                            <TextField
                                type={isShowPassword === false ? "password" : "text"}
                                id="password"
                                label="Password *"
                                variant="standard"
                                className='w-full'
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                            <Button type='button' className="absolute! top-[10px] right-[10px] z-50 w-[35px]! h-[35px]! min-w-[35px]! rounded-full!"
                                onClick={() => setIsShowPassword(!isShowPassword)}>
                                {isShowPassword === true ?
                                    <IoMdEye className='text-[20px] text-black opacity-75' />
                                    : <IoMdEyeOff className='text-[20px] text-black opacity-75' />
                                }
                            </Button>
                        </div>

                        <a className='link cursor-pointer text-[14px] font-medium' onClick={forgotPassword}>Forget Password?</a>

                        <div className='flex items-center w-full mt-4'>
                            <Button
                                type="submit"
                                className='bg-[#ff5252]! w-full text-white! hover:bg-black! font-semibold! py-2!'
                            >
                                {loading ? "Loading..." : "Login"}
                            </Button>
                        </div>

                        <p className='text-center mt-3'>
                            Not Registered?
                            <Link className="link text-[14px] font-semibold text-[#ff5252]" to={'/register'}>
                                &nbsp; Sign Up
                            </Link>
                        </p>

                        <p className='text-center mt-3 font-medium mb-3'>Or continue with social account</p>

                        <Button className='flex gap-3 w-full border! text-black! py-2! font-semibold! mb-3!'>
                            <FcGoogle className='text-[22px]' /> Login with Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
