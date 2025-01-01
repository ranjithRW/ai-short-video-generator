import React from 'react'
import Image from 'next/image'
function SelectStyle() {
  const styleOption=[
    {
      name:'Cartoon',
      image:"/cartoon.png"
    },
    {
      name:'Realistic',
      image:"/realistics.png"
    },
     {
      name:'Comics',
      image:"/comic.jpg"
    },
    {
      name:'WaterColor',
      image:"/watercolor.png"
    },
    {
      name:'GTA',
      image:"/gta.png"
    },
  ]
  return (
    <div className='mt-10'>
      <h2 className='font-bold text-2xl text-primary'>Select Style</h2>
      <p className='text-gray-500'>select your video style</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-3 mt-2'>
        {styleOption.map((item, index) => (
          <div className='relative transform transition-transform hover:scale-105 cursor-pointer'>
            <Image src={item.image} alt={item.name} width={400} height={400}
            className='object-cover h-56 rounded-lg w-full'/>
            <h2 className='absolute p-1 bg-black text-white bottom-0 w-full rounded-b-lg'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectStyle