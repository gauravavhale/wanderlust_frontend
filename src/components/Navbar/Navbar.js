import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {

    const navLinks = [
        { href:'/', label:'Home' },
        { href:'/destinantion', label:'Destinations' },
        { href:'/packages', label:'Packages '},
        { href:'/blog', label:'Blog'},
        { href:'/login', label:'Login'},
    ]

  return (
    <nav className="py-1 px-8 top-16 left-0 w-full z-1000 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
    
        <div className="text-2xl flex items-center ">
          <Image src={'/images/wanderlust.png'} width={50} height={50} alt='Wanderlust'/>
        </div>

        <div className="flex gap-6 text-lg font-medium text-purple-950">
            {navLinks.map((link) => (
            <Link
            href={link.href}
            key={link.label}
            className="hover:border-b-[#DF6951] transition"
            >
            {link.label}
            </Link>
             ))}
        </div>

        <div>
          <button className="hidden bg-[#DF6951] text-white px-4 py-2 rounded-sm ">
            Get in Touch
          </button>
        </div>
        </div>
    </nav>
  )
}
