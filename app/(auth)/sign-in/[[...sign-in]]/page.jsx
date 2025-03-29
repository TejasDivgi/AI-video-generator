import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Image src={'/logo.jpeg'}
        alt="Login" width={100} height={10}
        className='w-full object-contain'/>
      </div>
      <div className='flex items-center justify-center h-screen'>
        <SignIn/>
      </div>
    </div>
  )
}