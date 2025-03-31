import Link from 'next/link'
import React from 'react'

function EmptyState() {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dotted'>
      <h2>You don't have any short video created</h2>
      <Link href={'/dashboard/create-new'}>
      <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 h-10 flex items-center">Create New Video</button>
      </Link>    
    </div>
  )
}

export default EmptyState
