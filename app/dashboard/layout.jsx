import React from 'react'
import Header from './_components/header'
import Sidebar from './_components/sidebar'

function DashboardLayout({ children }) {
  return (
    <div>
      <div className='hidden md:block h-screen fixed mt-[65px] bg-white'>
        <Sidebar />
      </div>
      <div>
      <Header />
      <div className='md:ml-64 p-10'>
        {children}
      </div>
      </div>
    </div>
  )
}

export default DashboardLayout