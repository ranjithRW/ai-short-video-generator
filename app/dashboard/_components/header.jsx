import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
function Header() {
  return (
    <div className='flex items-center justify-between shadow-md'>
        <div className='flex gap-2 px-2 p-2 items-center'>
            <Image src={'/black_on_trans.png'} alt='logo' width={40} height={40}/>
           <p className='font-bold'>Obito AI</p>
        </div>
        <div className='flex gap-2 items-center px-2'>
            <Button>Dashboard</Button>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header