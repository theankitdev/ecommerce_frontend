import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from '../Navigation';
import Button from '@mui/material/Button'
import { RiMenu2Fill } from "react-icons/ri";
import CategoryPanel from '../Navigation/CategoryPanel.jsx';
import { useDispatch } from 'react-redux';
import { openCart } from '../../features/cart/cartSlice.js';
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { IoBagCheckOutline } from 'react-icons/io5';
import { IoIosLogOut, IoMdHeartEmpty } from 'react-icons/io';
import { logout } from "../../features/auth/authSlice.js"

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
};

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
            <div className='header lg:border-b lg:border-b-gray-300  h-14 lg:h-22 flex items-center'>
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
                        <Link to={"/"}><img src='/logo.png' className='w-full h-11 object-cover ' /></Link>
                    </div>

                    <div className='col2  w-[45%] hidden lg:block'>
                        <Search />
                    </div>

                    <div className='col3 lg:w-[30%]'>
                        <ul className='flex items-center gap-3 justify-end w-full'>
                            <li className='list-none hidden lg:inline'>
                                {
                                    user ? (
                                        <>
                                            <Tooltip title="Profile">
                                                <Button onClick={handleClick}>
                                                <div className="flex items-center justify-center gap-3 cursor-pointer">
                                                        <FaRegUser className='text-[22px] text-gray-500' />
                                                    <div className='flex flex-col justify-center leading-5'>
                                                        <span className='text-[15px] font-semibold text-left text-gray-700 uppercase'>{user?.fullName}</span>
                                                        <span className='text-[14px] text-gray-500 lowercase!'>{user?.email}</span>
                                                    </div>
                                                </div>
                                                </Button>
                                            </Tooltip>

                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                sx={{
                                                    '& .MuiPaper-root':{width: "200px"}
                                                }}
                                                slotProps={{
                                                    paper: {
                                                        elevation: 0,
                                                        sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                width: 32,
                                                                height: 32,
                                                                ml: -0.5,
                                                                mr: 1,
                                                            },
                                                            '&::before': {
                                                                content: '""',
                                                                display: 'block',
                                                                position: 'absolute',
                                                                top: 0,
                                                                right: 14,
                                                                width: 10,
                                                                height: 10,
                                                                bgcolor: 'background.paper',
                                                                transform: 'translateY(-50%) rotate(45deg)',
                                                                zIndex: 0,
                                                            },
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <MenuItem onClick={() => {
                                                    handleClose();
                                                    navigate('/my-aacount')
                                                    }} 
                                                    className="flex gap-2"
                                                >
                                                    <FaRegUser /> My Account
                                                </MenuItem>
                                                <MenuItem onClick={handleClose} className="flex gap-2">
                                                    <IoBagCheckOutline className=''/> Orders
                                                </MenuItem>
                                                <MenuItem onClick={handleClose} className="flex gap-2">
                                                    <IoMdHeartEmpty /> My List
                                                </MenuItem>
                                                <MenuItem onClick={() => {handleClose(); handleLogout();}} className="flex gap-2">
                                                    <IoIosLogOut /> Logout
                                                </MenuItem>
                                            </Menu>
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/login" className='link transition text-[15px] font-medium text-gray-600'>Login</Link> |&nbsp;
                                            <Link to="/register" className='link transition text-[15px] font-medium text-gray-600'>Register</Link>
                                        </>
                                    )
                                }
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
                                    <IconButton aria-label="cart" onClick={() => dispatch(openCart())}>
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
