"use client"
import { CircleUser, FileVideo, PanelsTopLeft, Shield, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import React, { use } from 'react'
import { usePathname } from 'next/navigation'
function Sidebar() {
    const MenuItem = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: PanelsTopLeft
        },
        {
            id: 2,
            name: 'Create New',
            path: '/dashboard/create-new',
            icon: FileVideo
        },
        {
            id: 3,
            name: 'Upgrade',
            path: 'upgrade',
            icon: ShieldPlus
        },
        {
            id: 4,
            name: 'Account',
            path: '/account',
            icon: CircleUser
        }
    ]
    const path = usePathname();
    console.log(path);
    return (
        <div className='w-64 h-screen shadow-md p-5'>
            <div className='grid gap-3'>
                {MenuItem.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <div key={item.id} className={`flex items-center gap-3 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${path == item.path && 'bg-primary text-white'}`}>
                            <item.icon />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar