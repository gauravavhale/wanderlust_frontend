import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col md:flex-row my-10 p-4 justify-around'>

                <div className='mb-5 md:mb-0'>
                    <h5 className='text-[#181E4B] text-2xl font-bold font-serif'>Wonderlust Travel<br/>Hub</h5>
                    <p className='text-sm text-[#757095]'>Your journey begins here,<br/> your memories last forever.</p>
                    <span className='flex flex-row mt-2 gap-3'><FaLinkedin className='text-[#DF6951] text-xl'/><FaInstagramSquare className='text-[#DF6951] text-xl'/><FaTwitterSquare className='text-[#DF6951] text-xl'/></span>
                </div>

                <div className='flex flex-col mb-5 md:mb-0'>
                    <h5 className='text-[#181433] text-xl font-bold'>Company</h5>
                    <Link href={''} className='text-[#181433]'>About Us</Link>
                    <Link href={''} className='text-[#181433]'>Career</Link>
                    <Link href={''} className='text-[#181433]'>Blog</Link>
                    <Link href={''} className='text-[#181433]'>Pricing</Link>
                </div>
                
                <div className='flex flex-col mb-5 md:mb-0'>
                    <h5 className='text-[#181433] text-xl font-bold'>Destination</h5>
                    <Link href={''} className='text-[#181433]'>Maldives</Link>
                    <Link href={''} className='text-[#181433]'>Bali</Link>
                    <Link href={''} className='text-[#181433]'>Thailand</Link>
                    <Link href={''} className='text-[#181433]'>SriLanka</Link>
                </div>

                <div className='flex flex-col'>
                    <h5 className='text-[#181433] text-xl font-bold'>Contact Us</h5>
                    <div className='text-[#181433] flex flex-row items-center'><IoLocation className='text-lg mr-2'/><span>Chhatrapati Sambhajinagar.</span></div>
                    <div className='text-[#181433] flex flex-row items-center'><FaPhoneAlt className='text-lg mr-2'/><span>+91-XXXXXXXXXX</span></div>
                    <div className='text-[#181433] flex flex-row items-center'><IoMail className='text-lg mr-2'/><span>support@wanderlust.com</span></div>
                </div>
                

            </div>
        </footer>
    )
}