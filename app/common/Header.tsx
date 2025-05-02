'use client';
import React from 'react'
import logo from '../../app/assets/sg_logo.png'
import { usePathname, useRouter } from 'next/navigation';
const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const navItems = [
      { label: 'Home', path: '/' },
      { label: 'Explore', path: '/explore' },
      { label: 'Story', path: '/story' },
    ];
  return (
    <div className="flex w-full items-center justify-between px-52">
       <div className="flex gap-6">
        {navItems.map((item) => (
          <span
            key={item.label}
            className={`text-xl lg:text-base text-text cursor-pointer border-b-2 transition duration-300 ${
              pathname === item.path ? 'border-text' : 'border-transparent'
            }`}
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <img src={logo.src} alt="logo" className="w-32 h-32"/> 
      <button className="text-sm font-semibold bg-accent px-16 rounded-3xl text-white py-2">Book Now</button>
    </div>
  )
}

export default Header