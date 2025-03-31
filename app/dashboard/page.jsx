'use client'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';

function dashboard() {
  const [videoList, setVideoList] = useState([])
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href={'/dashboard/create-new'}>
      <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 h-10 flex items-center">+ Create New</button>
      </Link>
      </div>
      {/* empty state */}
      {videoList.length === 0&&<div>
        <EmptyState />
        </div> }
    </div>
  )
}

export default dashboard;
