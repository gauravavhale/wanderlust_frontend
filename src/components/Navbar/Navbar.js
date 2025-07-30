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
    <nav className='flex flex-row justify-around items-center py-2 shadow-md bg-white'>
      <div className='flex-shrink-0'>
        <Image src={"/images/wanderlust.png"}  height={50} width={50} alt='wanderlust'/>
      </div>
      <div className='flex gap-4 text-sm font-bold'>
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
    </nav>
  )
}


// <div className=" flex items-center ">
//           <Image src={'/images/wanderlust.png'} width={50} height={50} alt='Wanderlust'/>
//         </div>

{/* <div className="flex gap-6 text-lg font-medium text-purple-950">
            {navLinks.map((link) => (
            <Link
            href={link.href}
            key={link.label}
            className="hover:border-b-[#DF6951] transition"
            >
            {link.label}
            </Link>
             ))}
        </div> */}