import React from 'react'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[45px] bg-[#e5e5e5] rounded-[5px] p-2 relative'>
      <input type='text' placeholder='Search for products...'                  
        className='w-full h-[30px] text-[15px] focus:outline-none bg-inherit  p-2 placeholder-[#373737]'
      />
       <Button className='!absolute top-[5px] right-[5px] z-50 !w-[37px] 
            !min-w-[37px] h-[37px] !rounded-full !text-black'>
        <IoSearch className='text-[#464646] hover:!text-[#ff5252] text-[22px]'/>
       </Button>
    </div>
  )
}

export default Search
