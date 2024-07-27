import React from 'react'
import Image from 'next/image'
import { assets } from "@/Assets/assets"

const Footer = () => {
  return (
    <div>
      <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        < Image src={assets.logo_light } alt='' width={120}/>
        <p className='text-sm text-white'>All rights reserved. Copyright</p>
        <div className='flex'>
        < Image src={assets.linkedin} alt='' className='w-8 h-8 mx-1 cursor-pointer'/>
        < Image src={assets.instagram } alt='' className='w-8 h-8  mx-1 cursor-pointer'/>
        < Image src={assets.telegram } alt='' className='w-8 h-8  mx-1 cursor-pointer'/>
        </div>
      </div>
    
    </div>
  )
}

export default Footer
