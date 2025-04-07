import React from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "./alert-dialog"
import Image from 'next/image'

function CustomLoading({ loading }) {
  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogContent className='bg-white'>
          {/* Added hidden title for accessibility */}
          <AlertDialogTitle className="sr-only">Generating Video</AlertDialogTitle>
          <div className='flex flex-col items-center my-10 justify-center'>
            <Image src='/progress.gif' alt='Loading...' width={100} height={100} className='w-20 h-20 mx-auto' />
            <h2>Generating your video. Do not refresh.</h2>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default CustomLoading
