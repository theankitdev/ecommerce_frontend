import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';

const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <>
            <nav className='container flex items-center gap-10 lg:py-2 shadow-md w-full'>
                {/* Shop by Categories */}
                <div className='col_1 hidden lg:flex justify-start xl:w-[23%]'>
                    <Button className='!text-gray-700 gap-3 font-semibold! !font-[500] hover:!text-[#ff5252]'
                        onClick={() => setDrawerOpen(true)}
                    >
                        <RiMenu2Fill className='text-[18px]' />
                        <span className='hidden xl:inline'>Shop by Categories</span>
                        <FaAngleDown className='ml-auto hidden xl:inline' />
                    </Button>

                </div>

                {/* navbar */}
                <div className='col_2 hidden lg:flex xl:justify-start justify-center w-full'>
                    <ul className="flex items-center gap-8 xl:gap-12">

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/"
                                className="!normal-case !text-gray-700 !font-semibold text-[14px]  hover:!text-[#ff5252] transition"
                                sx={{ textTransform: "none" }}
                            >
                                Home
                            </Button>
                        </li>

                        {/* Fashion Menu */}
                        <li className="list-none group relative">
                            <Button
                                component={Link}
                                to="/fashion"
                                className="!normal-case !text-gray-700 font-semibold! hover:!text-[#ff5252] transition"
                                sx={{ textTransform: "none" }}
                            >
                                Fashion
                            </Button>

                            {/* Fashion submenu */}
                            <div className='submenu absolute top-[100%] min-w-[150px] shadow-md bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                                <ul className=''>
                                    <li className='list-none group/sub relative w-full'>
                                        <Button className='!text-gray-900  !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                            component={Link}
                                            to={'/'}
                                        >
                                            Men
                                        </Button>

                                        {/* Fashion InnerSubMenu */}
                                        <div className='submenu absolute top-0 left-full min-w-[150px] shadow-md bg-white opacity-0 invisible group-hover/sub:opacity-100 group-hover:visible transition-all duration-200'>
                                            <ul className=''>
                                                <li className='list-none'>
                                                    <Button className='!text-gray-900 !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                                        component={Link}
                                                        to={'/'}
                                                    >
                                                        T-shirt
                                                    </Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button className='!text-gray-700 !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                                        component={Link}
                                                        to={'/'}
                                                    >
                                                        Jeans
                                                    </Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button className='!text-gray-700 !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                                        component={Link}
                                                        to={'/'}
                                                    >
                                                        Footwear
                                                    </Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button className='!text-gray-700 !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                                        component={Link}
                                                        to={'/'}
                                                    >
                                                        Watch
                                                    </Button>
                                                </li>
                                                <li className='list-none'>
                                                    <Button className='!text-gray-700 !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                                        component={Link}
                                                        to={'/'}
                                                    >
                                                        Pants
                                                    </Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-none'>
                                        <Button className='!text-gray-700 !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                            component={Link}
                                            to={'/'}
                                        >
                                            Women
                                        </Button>
                                    </li>
                                    <li className='list-none'>
                                        <Button className='!text-gray-700 !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                            component={Link}
                                            to={'/'}
                                        >
                                            Kids
                                        </Button>
                                    </li>
                                    <li className='list-none'>
                                        <Button className='!text-gray-700 !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                            component={Link}
                                            to={'/'}
                                        >
                                            Girls
                                        </Button>
                                    </li>
                                    <li className='list-none'>
                                        <Button className='!text-gray-700 !capitalize w-full !justify-start hover:!text-[#ff5252]'
                                            component={Link}
                                            to={'/'}
                                        >
                                            Boys
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/electronics"
                                className="!normal-case !text-gray-700 font-semibold! hover:!text-[#ff5252] transition"
                                sx={{ textTransform: "none" }}
                            >
                                Electronics
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/bags"
                                className="!normal-case !text-gray-700 font-semibold! hover:!text-[#ff5252] transition"
                                sx={{ textTransform: "none" }}
                            >
                                Bags
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/footwear"
                                className="!normal-case !text-gray-700 font-semibold! hover:!text-[#ff5252] transition"
                                sx={{ textTransform: "none" }}
                            >
                                Footwear
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/groceries"
                                className="!normal-case !text-gray-700 font-semibold! hover:!text-[#ff5252] transition"
                                sx={{ textTransform: "none" }}
                            >
                                Groceries
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/beauty"
                                className="!normal-case !text-gray-700 font-semibold! hover:!text-[#ff5252] transition"
                                sx={{ textTransform: "none" }}
                            >
                                Beauty
                            </Button>
                        </li>

                        <li className="list-none">
                            <Button
                                component={Link}
                                to="/wellness"
                                className="!normal-case !text-gray-700 font-semibold! hover:!text-[#ff5252] transition"
                                sx={{ textTransform: "none" }}
                            >
                                Wellness
                            </Button>
                        </li>

                    </ul>

                </div>

            </nav>

            {/* Catefory Panel */}
            <CategoryPanel
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
        </>
    )
}

export default Navigation
