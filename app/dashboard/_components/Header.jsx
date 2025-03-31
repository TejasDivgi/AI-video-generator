
import { UserButton } from "@clerk/nextjs"; // Adjust path based on folder structure

import React from 'react';
import Image from "next/image";
function Header() {
  return (
    <div className='p-3 px-5 flex justify-between items-center shadow-md'>
        <div className='flex gap-3 items-center'>
            <Image src='/bestlogo.png' alt="logo" width={30} height={30}/>
            <h2 className='font-bold text-xl'>AI Video Creator</h2>
        </div>
        <div className="flex items-center gap-3"> 
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 h-10 flex items-center">Dashboard</button> 
            <div className="h-10 flex items-center"><UserButton /></div> 
        </div>

    </div>
  )
}

export default Header
