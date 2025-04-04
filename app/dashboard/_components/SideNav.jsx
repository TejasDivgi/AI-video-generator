'use client'
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SideNav() {
    const MenuOption = [
        {
            id: 1,
            name: "Dashboard",
            path: "/dashboard",
            icon: <PanelsTopLeft aria-label="Dashboard icon" />
        },
        {
            id: 2,
            name: "Create New",
            path: "/dashboard/create-new",
            icon: <FileVideo aria-label="Create New icon" />
        },
        {
            id: 3,
            name: "Upgrade",
            path: "/upgrade",
            icon: <ShieldPlus aria-label="Upgrade icon" />
        },
        {
            id: 4,
            name: "Account",
            path: "/account",
            icon: <CircleUser aria-label="Account icon" />
        }
    ];
    const path=usePathname();
  return (
    <div className='w-64 h-screen shadow-md p-5'>
      <div className='grid gap-3'>
        {MenuOption.map((item, index) => (
            <Link href={item.path} key={index}>
          <div key={item.id} className={`flex items-center gap-3 p-5 
          hover:bg-primary hover:text-white rounded-md cursor-pointer ${path===item.path&&"bg-primary text-white"}`
          }>
            {item.icon}
            <h2>{item.name}</h2>
          </div>
              </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav
