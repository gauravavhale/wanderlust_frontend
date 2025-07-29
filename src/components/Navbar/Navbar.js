import React from 'react'
import Link from 'next/link'

export const Navbar = () => {

    const navLinks = [
        { href:'/', label:'Home' },
        { href:'/destinantion', label:'Destinations' },
        { href:'/packages', label:'Packages '},
        { href:'/blog', label:'Blog'},
        { href:'/contact', label:'Contact'},
        { href:'/login', label:'Login'},
    ]

  return (
    <nav className="py-4 px-8 top-16 left-0 w-full z-1000 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
    
        <div className="text-2xl font-bold text-purple-950">WanderLust Travel Hub</div>

        <div className="hidden md:flex gap-6 text-lg font-medium text-purple-950">
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
