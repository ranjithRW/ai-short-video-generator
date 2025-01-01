"use client"
import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Emptystate from './_components/emptystate';
import Link from 'next/link'
function Dashboard() {
  const [videoList,setVideoList] = useState([]);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-2xl text-primary'>Dashboard</h1>
        <Link href={'/dashboard/create-new'}>
            <Button>+ create new</Button>
            </Link>
      </div>


      {/* {empty.List} */}
       {videoList.length ==0 && <div>
        <Emptystate/>
        </div>
        }



    </div>
  )
}

export default Dashboard