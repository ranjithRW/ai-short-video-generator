import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Emptystate() {
  return (
    <div>
        <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed'>
            <p>U dont have any video</p>
            <Link href={'/dashboard/create-new'}>
            <Button>+ create new video</Button>
            </Link>
        </div>
    </div>
  )
}

export default Emptystate