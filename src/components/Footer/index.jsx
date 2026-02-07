import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
    return (
        <>
            <footer className='py-6'>
                <div className='container'>

                    {/* Website feature label */}
                    <div className='flex justify-center pb-16 pt-8'>
                        <div className='flex items-center justify-between lg:w-[85%] xl:w-[70%] flex-col gap-5 lg:flex-row'>
                            <div className='col flex flex-col items-center justify-center group'>
                                <LiaShippingFastSolid className='text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                                <h3 className='text-[16px] font-semibold mt-3'>Free Shipping</h3>
                                <p className='text-[12px] font-medium'>For all Orders Over $100</p>
                            </div>

                            <div className='col flex flex-col items-center justify-center group'>
                                <PiKeyReturn className='text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                                <h3 className='text-[16px] font-semibold mt-3'>30 Days Returns</h3>
                                <p className='text-[12px] font-medium'>For an Exchange Product</p>
                            </div>

                            <div className='col flex flex-col items-center justify-center group'>
                                <IoWalletOutline className='text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                                <h3 className='text-[16px] font-semibold mt-3'>Secured Payment</h3>
                                <p className='text-[12px] font-medium'>Payment Cards Accepted</p>
                            </div>

                            <div className='col flex flex-col items-center justify-center group'>
                                <LiaGiftSolid className='text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                                <h3 className='text-[16px] font-semibold mt-3'>Special Gifts</h3>
                                <p className='text-[12px] font-medium'>Our First Product Order</p>
                            </div>

                            <div className='col flex flex-col items-center justify-center group'>
                                <BiSupport className='text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                                <h3 className='text-[16px] font-semibold mt-3'>Support 24/7</h3>
                                <p className='text-[12px] font-medium'>Contact us AnyTime</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="footer flex py-8 justify-between lg:px-8 flex-col lg:flex-row gap-5">
                        <div className='part1 lg:border-r lg:w-[25%]'>
                            <h2 className='text-[18px] font-semibold mb-4'>Contact us</h2>
                            <p className='text-[14px] font-[400] pb-4'>
                                Classyshop - Mega Super Store <br /> 507-Union Trade Center France
                            </p>
                            <Link className='link text-[13px]' to="mailto:sales@yourcompany.com">sales@yourcompany.com</Link>
                            <span className='text-[22px] font-[600] block w-full text-[#ff5252] mt-3 mb-5'>(+91) 4375-545-234</span>

                            <div className="flex items-center gap-2">
                                <IoChatboxOutline className='text-[40px] text-[#ff5252]' />
                                <span className='text-[16px] font-semibold'>Online Chat <br /> Get Expert Help</span>
                            </div>
                        </div>

                        <div className='part2 lg:w-[40%] flex lg:pl-8'>
                            <div className='part2_col1 w-[50%]'>
                                <h2 className='text-[18px] font-semibold mb-4'>Products</h2>

                                <ul className='list'>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Prices drop</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>New products</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Best sales</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Contact us</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Sitemap</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Stores</Link></li>
                                </ul>
                            </div>

                            <div className='part2_col2 w-[50%]'>
                                <h2 className='text-[18px] font-semibold mb-4'>Our Company</h2>

                                <ul className='list'>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Delivery</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Legal Notice</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Terms and conditions of use</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>About us</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Secure payment</Link></li>
                                    <li className='list-none text-[14px] w-full mb-2'><Link to={'/'} className='link'>Login</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className='part3 lg:w-[28%] flex flex-col'>
                            <h2 className='text-[18px] font-semibold mb-4'>Subscribe To Newslater</h2>
                            <p className='text-[13px]'>Subscribe to our latest newsletter to get news about special discounts.</p>

                            <form className='mt-5 w-full flex-col'>
                                <input type='text' className='w-full h-[45px] border 
                              outline-none pl-4 pr-4 rounded-sm mb-4'
                                    placeholder='Your Email Address'
                                />
                                <Button className="bg-[#ff5252]! font-medium! text-[14px]! text-white! py-2! px-5!">SUBSCRIBE</Button>
                            </form>
                            <FormControlLabel control={<Checkbox />}
                                    label="I agree to the terms and conditions and the privacy policy"
                                    sx={{
                                        '& .MuiFormControlLabel-label': {
                                            fontSize: '13px',
                                        },
                                        '& .Mui-checked': {
                                            color: '#ff5252'
                                        },
                                    }}
                                />
                        </div>
                    </div>
                </div>
            </footer>

            {/* BottomStrip */}
            <div className='bottomStrip border-t py-3 mx-4 lg:mx-6 '>
                <div className='container flex flex-col lg:flex-row items-center justify-between gap-4'>
                    <ul className='list flex items-center gap-3 pb-2 lg:pb-0'>
                        <li className='list-none'>
                            <Link to='/' className='link'>
                               <CiFacebook className='text-[30px]'/>
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link to='/' className='link'>
                               <CiYoutube className='text-[30px]'/>
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link to='/' className='link'>
                               <AiOutlinePinterest className='text-[30px]'/>
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link to='/' className='link'>
                               <CiInstagram className='text-[29px]'/>
                            </Link>
                        </li>   
                    </ul>

                    <p className='text-[14px] text-center'>&copy; 2026 - Ecommerce Template</p>

                    <div className='flex items-center'>
                        <img src="/carte_bleue.png" alt='image'/>
                        <img src="/visa.png" alt='image'/>
                        <img src="/master_card.png" alt='image'/>
                        <img src="/american_express.png" alt='image'/>
                        <img src="/paypal.png" alt='image'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
