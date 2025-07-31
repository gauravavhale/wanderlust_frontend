import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsPersonCircle } from "react-icons/bs";

export const Navbar = () => {

    const navLinks = [
        { href:'/', label:'Home' },
        { href:'/destinantions', label:'Destinations' },
        { href:'/packages', label:'Packages '},
        // { href:'/login', label:'Login'},
    ]

  return (
    <nav className='flex flex-row justify-around items-center py-2 px-2 shadow-md bg-white'>
      <div className='flex-shrink-0'>
        <Image src={"/images/wanderlust.png"}  height={50} width={50} alt='wanderlust'/>
      </div>
      <div className='flex gap-3.5 md:gap-10 text-sm md:text-lg font-bold'>
        {navLinks.map((link) => (
            <Link
            href={link.href}
            key={link.label}
            className="text-[#181E4B] hover:border-b-2 hover:border-b-[#DF6951] transition duration-300"
            >
            {link.label}
            </Link>
             ))}
      </div>
      <div>
        <Link href={'/'} className='text-lg md:text-xl font-bold text-[#181E4B] hover:text-[#DF6951] transition duration-300'><BsPersonCircle /></Link>
      </div>
    </nav>
  )
}

