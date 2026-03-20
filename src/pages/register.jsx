import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../features/auth/authSlice';
import toast from "react-hot-toast"

const Register = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: ''
    })
    const [isShowPassword, setIsShowPassword] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading} = useSelector((state) => state.auth);

    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (!form.fullName || !form.email || !form.password) {
            toast.error("All fields required");
            return;
        }
        const res = await dispatch(register(form));

        if (res.meta.requestStatus === "fulfilled") {
            toast.success("Registration Successful");
            navigate("/login");
        }else {
            toast.error(res.payload?.message || "Registration failed")
        }
    }
    return (
        <section className='py-10'>
            <div className='container'>
                <div className='card shadow-md w-full sm:w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black font-semibold'>Register with a new account</h3>

                    <form className='w-full mt-5' onSubmit={handleRegister}>
                        <div className='form-group mb-5'>
                            <TextField
                                type='text'
                                id="name"
                                label="Full Name *"
                                variant="standard"
                                className='w-full'
                                value={form.fullName}
                                onChange={(e)=> setForm({...form, fullName:e.target.value})}
                            />
                        </div>

                        <div className='form-group mb-5'>
                            <TextField
                                type='email'
                                id="email"
                                label="Email *"
                                variant="standard"
                                className='w-full'
                                value={form.email}
                                onChange={(e)=>setForm({...form, email:e.target.value})}
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
                                onChange={(e)=>setForm({...form, password:e.target.value})}
                            />
                            <Button className="absolute! top-[10px] right-[10px] z-50 w-[35px]! h-[35px]! min-w-[35px]! rounded-full!"
                                type='button'
                                onClick={() => setIsShowPassword(!isShowPassword)}>
                                {isShowPassword === true ?
                                    <IoMdEye className='text-[20px] text-black opacity-75' />
                                    : <IoMdEyeOff className='text-[20px] text-black opacity-75' />
                                }
                            </Button>
                        </div>

                        <a className='link cursor-pointer text-[14px] font-medium'>Forget Password?</a>

                        <div className='flex items-center w-full mt-4'>
                            <Button className='bg-[#ff5252]! w-full text-white! hover:bg-black! font-semibold! py-2!'
                               type='submit'
                            >
                                {loading ? "Loading" : "Register"}
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
