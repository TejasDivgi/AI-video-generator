import React, { useState } from 'react'
import Image from 'next/image'
function SelectStyle({onUserSelect}) {
    const styleOptions=[
        {
          name: 'Realistic',
          image:'/real.jpeg'
        },
        {
          name: 'Cartoon',
          image:'/cartoon.jpeg'
        },
        {
          name: 'Comic',
          image:'/comic.jpeg'
        },
        {
          name: 'Water Color',
          image:'/watercolor.jpeg'
        },
        {
          name: 'GTA',
          image:'/gta.jpeg'
        }
    ]

    const [selectedOption, setSelectedOption] = useState();
  return (
    <div className='mt-7'>
      <h2 className='font-bold text-xl text-primary'>Style</h2>
      <p className='text-gray-500'>Select your video style</p>
      <div className='grid grid-cols-2 md:grid-cols-3 mt-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
        {
          styleOptions.map((item,index)=>(
            
            <div key={index} className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl ${selectedOption==item.name &&'border-2 border-primary' }`}>
              <Image src={item.image} alt={item.name} width={100} height={100} 
              className='h-48 object-cover rounded-lg w-full'
              onClick={()=>{setSelectedOption(item.name)
                onUserSelect('imageStyle',item.name)
              }}/>
              <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>{item.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SelectStyle
