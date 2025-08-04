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
            <div className='flex flex-col md:flex-row py-10 p-4 justify-around bg-[#181E4B]'>

                <div className='mb-5 md:mb-0'>
                    <h5 className='text-white text-2xl font-bold font-serif'>Wonderlust Travel<br/>Hub</h5>
                    <p className='text-sm text-[#757095]'>Your journey begins here,<br/> your memories last forever.</p>
                    <span className='flex flex-row mt-2 gap-3'><FaLinkedin className='text-white text-xl'/><FaInstagramSquare className='text-white text-xl'/><FaTwitterSquare className='text-white text-xl'/></span>
                </div>

                <div className='flex flex-col mb-5 md:mb-0'>
                    <h5 className='text-white text-xl font-bold'>Company</h5>
                    <Link href={''} className='text-white'>About Us</Link>
                    <Link href={''} className='text-white'>Career</Link>
                    <Link href={''} className='text-white'>Blog</Link>
                    <Link href={''} className='text-white'>Pricing</Link>
                </div>
                
                <div className='flex flex-col mb-5 md:mb-0'>
                    <h5 className='text-white text-xl font-bold'>Destination</h5>
                    <Link href={''} className='text-white'>Maldives</Link>
                    <Link href={''} className='text-white'>Bali</Link>
                    <Link href={''} className='text-white'>Thailand</Link>
                    <Link href={''} className='text-white'>SriLanka</Link>
                </div>

                <div className='flex flex-col'>
                    <h5 className='text-white text-xl font-bold'>Contact Us</h5>
                    <div className='text-white flex flex-row items-center'><IoLocation className='text-lg mr-2'/><span>Chhatrapati Sambhajinagar.</span></div>
                    <div className='text-white flex flex-row items-center'><FaPhoneAlt className='text-lg mr-2'/><span>+91-XXXXXXXXXX</span></div>
                    <div className='text-white flex flex-row items-center'><IoMail className='text-lg mr-2'/><span>support@wanderlust.com</span></div>
                </div>
                

            </div>
        </footer>
    )
}