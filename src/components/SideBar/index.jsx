import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import { FaAngleUp } from "react-icons/fa";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';

const SideBar = () => {
    
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailableFilter, setIsOpenAvailableFilter] = useState(true);
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
  return (
    <aside className='sidebar'>
        {/* Shop by Category */}
        <div className='box mt-3'>
            <h3 className='mb-3 text-[16px] font-semibold flex pr-5'>
                Shop By Category 
                <Button onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
                  className="!w-[30px] !h-[30px] min-w-[30px]! !rounded-full ml-auto!"
                >
                    {isOpenCategoryFilter ? (
                        <FaAngleDown className='text-[16px] text-gray-700'/>
                    ): (
                        <FaAngleUp className='text-[16px] text-gray-700'/>
                    )}
                </Button>
            </h3>
            <Collapse isOpened={isOpenCategoryFilter}>
            <div className='scroll px-2 max-h-48 overflow-y-scroll overflow-x-hidden'>
                <FormGroup 
                  sx={{'& .MuiCheckbox-root': {padding: '6px' },
                       '& .Mui-checked': {color: '#ff5252'},}}
                >
                <FormControlLabel control={<Checkbox size='small'/>} label="Fashion" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Electronics" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Bags" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Footwear" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Groceries" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Beauty" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Wellness" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Jewellery" className='w-full'/>
                </FormGroup>
            </div>
            </Collapse>
        </div>

        {/* Availability */}
         <div className='box mt-3'>
            <h3 className='mb-3 text-[16px] font-semibold flex pr-5'>
                Availability
                <Button onClick={() => setIsOpenAvailableFilter(!isOpenAvailableFilter)}
                  className="!w-[30px] !h-[30px] min-w-[30px]! !rounded-full ml-auto!"
                >
                    {isOpenAvailableFilter ? (
                        <FaAngleDown className='text-[16px] text-gray-700'/>
                    ): (
                        <FaAngleUp className='text-[16px] text-gray-700'/>
                    )}
                </Button>
            </h3>
            <Collapse isOpened={isOpenAvailableFilter}>
            <div className='scroll px-2 max-h-48 overflow-y-scroll overflow-x-hidden'>
                <FormGroup 
                  sx={{'& .MuiCheckbox-root': {padding: '6px' },
                       '& .Mui-checked': {color: '#ff5252'},}}
                >
                <FormControlLabel control={<Checkbox size='small'/>} label="Available" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="In stock" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Not Available" className='w-full'/>
                </FormGroup>
            </div>
            </Collapse>
        </div>

        {/* Size */}
        <div className='box mt-3'>
            <h3 className='mb-3 text-[16px] font-semibold flex pr-5'>
                Size
                <Button onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
                  className="!w-[30px] !h-[30px] min-w-[30px]! !rounded-full ml-auto!"
                >
                    {isOpenSizeFilter ? (
                        <FaAngleDown className='text-[16px] text-gray-700'/>
                    ): (
                        <FaAngleUp className='text-[16px] text-gray-700'/>
                    )}
                </Button>
            </h3>
            <Collapse isOpened={isOpenSizeFilter}>
            <div className='scroll px-2 max-h-48 overflow-y-scroll overflow-x-hidden'>
                <FormGroup 
                  sx={{'& .MuiCheckbox-root': {padding: '6px' },
                       '& .Mui-checked': {color: '#ff5252'},}}
                >
                <FormControlLabel control={<Checkbox size='small'/>} label="Small" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Medium" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="Large" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="XL" className='w-full'/>
                <FormControlLabel control={<Checkbox size='small'/>} label="XXL" className='w-full'/>
                </FormGroup>
            </div>
            </Collapse>
        </div>

        {/* Price */}
        <div className='box mt-3'>
            <h3 className='mb-3 text-[16px] font-semibold flex pr-5'>
                Filter By Price
            </h3>
            <RangeSlider />
            <div className='flex pt-4 pb-2 priceRange'>
                <span className='text-[13px]'>
                    From: <strong className='text-dark'>Rs: {100}</strong>
                </span>
                <span className='ml-auto text-[13px]'>
                    From: <strong className='text-dark'>{5000}</strong>
                </span>
            </div>
        </div>

        {/* Rating */}
        <div className='box mt-3'>
            <h3 className='mb-3 text-[16px] font-semibold flex pr-5'>
                Filter By Rating
            </h3>
            <Rating name="size-small" defaultValue={5} />
        </div>
    </aside>
  )
}

export default SideBar
