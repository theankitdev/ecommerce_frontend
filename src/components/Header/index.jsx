import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";
import Tooltip from '@mui/material/Tooltip';
import Navigation from '../Navigation';
import Button from '@mui/material/Button'
import { RiMenu2Fill } from "react-icons/ri";
import CategoryPanel from '../Navigation/CategoryPanel.jsx';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
        background: '#f25252'
    },
}));

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            {/* TOP STRIP */}
            <div className='top-strip py-2 mt-1 border border-gray-300 hidden lg:block'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col1 w-[50%]'>
                            <p className='text-[12px] font-medium text-gray-600'>
                                Get up to 50% off new season styles, limited time only
                            </p>
                        </div>

                        <div className='col2 flex items-center justify-end'>
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <Link to="/help-center" className='text-[12px] link font-medium transition text-gray-600'>Help Center</Link>
                                </li>
                                <div className='border h-4 border-gray-300' />
                                <li className='list-none'>
                                    <Link to="/order-tracking" className='text-[12px] link font-medium transition text-gray-600'>Order Tracking</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* HEADER */}
            <div className='header border-b border-b-gray-300 py-1'>
                <div className='container flex items-center justify-between'>

                    {/* Category Hamburger only visible in mobile */}
                    <div className='col_1 lg:hidden flex justify-start'>
                        <Button className='!text-black !min-w-0 !p-0 '
                            onClick={() => setDrawerOpen(true)}
                        >
                            <RiMenu2Fill className='lg:text-[28px] text-[22px]' />
                        </Button>
                        {/* Catefory Panel */}
                        <CategoryPanel
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                        />
                    </div>

                    <div className='col1 w-full lg:w-[25%] flex justify-center lg:justify-start'>
                        <Link to={"/"}><img src='/logo.jpg' className='h-11 lg:h-18 w-29 lg:w-38 object-cover ' /></Link>
                    </div>

                    <div className='col2  w-[45%] hidden lg:block'>
                        <Search />
                    </div>

                    <div className='col3 lg:w-[30%]'>
                        <ul className='flex items-center gap-3 justify-end w-full'>
                            <li className='list-none hidden lg:inline'>
                                <Link to="/login" className='link transition text-[15px] font-medium text-gray-600'>Login</Link> |&nbsp;
                                <Link to="/register" className='link transition text-[15px] font-medium text-gray-600'>Register</Link>
                            </li>

                            <li className='list-none hidden lg:inline'>
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="wishlist">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                            <li className='list-none'>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <Navigation />
        </header>
    )
}

export default Header
