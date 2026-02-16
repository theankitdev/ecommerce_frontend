import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from "../components/ProductItem";
import products from "../data/product.js"
import Button from '@mui/material/Button';
import { IoGrid } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemListView from '../components/ProductItemListView/index.jsx';
import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ProductListing = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [view, setView] = useState('grid');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className='pt-5'>
            {/* BreadCrumb */}
            <div className='container mb-3'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" className='link'>
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        className='link'
                    >
                        Fashion
                    </Link>
                </Breadcrumbs>
            </div>

            {/* Content */}
            <div className='container flex gap-5 bg-white p-2'>
                {/* Left Content */}
                <div className='sidebarWrapper hidden lg:block lg:w-[18%] h-full'>
                    <SideBar />
                </div>

                {/* Right Content */}
                <div className='rightContent w-full lg:w-[80%] py-3'>
                    {/* Top Strip Options */}
                    <div className='bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between'>
                        {/* List View & Grid View Button */}
                        <div className='col1 flex items-center'>
                            <Button className={`w-[40px]! h-[40px]! min-w-[40px]! rounded-full! text-[#000]!
                               ${view === 'list' && 'active'}`}
                                onClick={() => setView('list')}
                            >
                                <LuMenu className={`text-[16px] ${view === 'list' && 'text-[#ff5252]'}`} />
                            </Button>
                            <Button className={`w-[40px]! h-[40px]! min-w-[40px]! rounded-full! text-[#000]!
                                ${view === 'grid' && 'active'}`}
                                onClick={() => setView('grid')}
                            >
                                <IoGrid className={`${view === 'grid' && 'text-[#ff5252]'}`} />
                            </Button>
                            <span className='text-[14px] font-medium text-gray-700 hidden sm:block'>There are 27 products.</span>
                        </div>

                        {/* Sort By Button */}
                        <div className='col2 flex items-center'>
                            <span className='text-[14px] font-medium pr-2 text-gray-700'>
                                Sort By
                            </span>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className='bg-white! text-[12px]! text-[#000]! capitalize! border-2! border-[#000]!'
                            >
                                Dashboard
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                }}
                                className='text-[12px]! '
                            >
                                <MenuItem onClick={handleClose} className='text-[13px]!  '>
                                    Sales, highest to lowest
                                </MenuItem>
                                <MenuItem onClick={handleClose} className='text-[13px]!  '>
                                    Relevance
                                </MenuItem>
                                <MenuItem onClick={handleClose} className='text-[13px]!  '>
                                    Name, A to Z
                                </MenuItem>
                                <MenuItem onClick={handleClose} className='text-[13px]!  '>
                                    Name, Z to A
                                </MenuItem>
                                <MenuItem onClick={handleClose} className='text-[13px]!  '>
                                    Price, low to high
                                </MenuItem>
                                <MenuItem onClick={handleClose} className='text-[13px]!  '>
                                    Price, high to low
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>

                    {/* Products */}
                    <div
                        className={
                            view === 'grid'
                                ? 'grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] px-5 sm:px-0'
                                : 'flex flex-col gap-4'
                        }>
                        {view === 'grid'
                            ? products.map((item, index) => (
                                <ProductItem key={index} product={item} />
                            ))
                            : products.map((item, index) => (
                                <ProductItemListView key={index} product={item} />
                            ))}
                    </div>

                    {/* Pagination */}
                    <div className='flex items-center justify-center mt-10'>
                        <Pagination 
                            count={10}
                            showFirstButton
                            showLastButton
                            siblingCount={isMobile ? 0 : 1}
                            boundaryCount={isMobile ? 1 : 2}
                            sx={{
                                '& .Mui-selected.MuiPaginationItem-page': {
                                    background: '#ff5252',
                                    color: 'white'
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductListing
