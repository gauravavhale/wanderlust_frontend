import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiCalendar } from "react-icons/ci";
import { MdPersonOutline } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

const Home = () => {

  const Categoryies = [
    { src: '/assets/001-tour-guide.png', title:'Guided Tour', para:'From iconic landmarks to hidden gems, our guided tours give you the perfect travel experience.' },
    { src: '/assets/002-plane.png', title:'Best Flight Options', para:'From economy to first-class, our best flight options ensure comfort, convenience, and value.' },
    { src: '/assets/003-pray.png', title:'Religious Tour', para:'Journey to sacred places and connect with your inner peace through our guided religious tours.' },
    { src: '/assets/004-health-insurance.png', title:'Medical Insurance', para:'From minor mishaps to emergencies, our travel medical insurance keeps you safe wherever.' },
  ]

  const Trendings = [
    { src:'/assets/Rectangle 19305.png', alt:'switzerlaand' , days:'8',people:'25',destinantion:'Switzerland',country:'Europe',price:'1,000',cutoff:'1200',desc:'Experience the breathtaking beauty of Switzerland where snow-capped Alps meet crystal-clear lakes, charming villages, and vibrant cities. From scenic train rides to world-class skiing' },
    { src:'/assets/Rectangle 19305-1.png', alt:'Amazon' , days:'8',people:'30',destinantion:'Amazon',country:'Brazil',price:'1,223',cutoff:'1200',desc:'Discover the breathtaking beauty of the Amazon, the world’s largest rainforest. Cruise along its mighty river, encounter exotic wildlife, and immerse yourself in vibrant indigenous cultures.' },
    { src:'/assets/Rectangle 19305-2.png', alt:'Giza' , days:'8',people:'155',destinantion:'Giza',country:'Egypt',price:'1,200',cutoff:'1500',desc:'Discover the timeless wonders of Giza, home to the legendary Pyramids and the Great Sphinx. Walk through ancient history, marvel at breathtaking desert landscapes, and experience the magic of Egypt.' },
  ]

  return (
    <div className='h-full w-full mb-[50px] '>

          <div className='w-full h-[90vh] relative'>
            <Image src={'/assets/landing_image1.png'} alt='landing' fill className='object-cover' />
          
              <div className='absolute inset-0 flex flex-col justify-center items-center text-center'>
                <h2 className=' text-white text-2xl md:text:4xl lg:text-5xl font-bold font-serif drop-shadow-lg'>
                  Wanderlust Travel Hub
                </h2>
                <p className=' text-white text-lg md:text-2xl mt-2 font-serif drop-shadow-md'>No matter where <br/>you&apos;re going to, we&apos;ll<br/> take you there</p>
                <div className='flex flex-wrap justify-center gap-6 mt-6'>
                  <Link href={''} className='p-2 px-3 bg-[#DF6951] rounded-md text-white text-sm shadow-md hover:shadow-lg hover:bg-[#c85a44] transition-all duration-300'>Plan Your Trip</Link>
                  <Link href={''} className='p-2 px-3 bg-[#DF6951] rounded-md text-white text-sm shadow-md hover:shadow-lg hover:bg-[#c85a44] transition-all duration-300'>Explore Destinations</Link>
                </div>
              </div>
          </div>

          <div className='flex justify-around p-4 bg-[#dcd9d9] gap-4'>
            <Image src={"/assets/image 909.png"}  alt='Plane' className='w-16 h-8 sm:w-24 sm:h-12 md:w-32 md:h-16' height={75} width={171}></Image>
            <Image src={"/assets/Mask group-1.png"} alt='Luggage' className='w-16 h-8 sm:w-24 sm:h-12 md:w-32 md:h-16' height={75} width={171}></Image>
            <Image src={"/assets/Mask group.png"} alt='hotel' className='w-16 h-8 sm:w-24 sm:h-12 md:w-32 md:h-16' height={75} width={171}></Image>
            <Image src={"/assets/Mask group-2.png"} alt='Airbnb' className='w-16 h-8 sm:w-24 sm:h-12 md:w-32 md:h-16' height={75} width={171}></Image>
          </div>

            <div>
              <div className='text-center my-10'>
                <p className='text-red-500'>Category</p>
                <h1 className='text-2xl text-[#181E4B] font-bold font-serif mt-4'>We offer Best Services</h1>
              </div>
              <div className='flex justify-center gap-10 flex-col md:flex-row flex-wrap'>
                {
                  Categoryies.map((category)=>(
                    <div key={category.title} className='sm:h-[200px] sm:w-full md:h-[275px] md:w-[200px] flex flex-col justify-center items-center p-2'>
                      <div>
                        <Image src={category.src} alt='guide' width={100} height={100}></Image>
                      </div>
                      <div className='text-center mt-2'>
                        <h2 className='font-bold text-[#181E4B]'>{category.title}</h2>
                        <p className='text-[#181E4B] text-sm'>{category.para}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className='w-full h-full flex flex-col md:flex-row items-center mt-10'>
              <div className='w-[70vw] md:w-1/2 flex justify-end'>
                <Image src={'/assets/image 50.png'} className='rounded-t-full' alt='cpl' width={300} height={400} />
              </div>
              <div className='w-[70vw] mt-5 md:mt-0 md:w-1/2 content-center text-center md:ml-4 md:text-left'>
                <p className='text-sm text-[#DF6951] font-bold'>HONEYMOON SPECIAL</p>
                <h2 className='text-2xl font-bold text-[#181E4B]'>Our Romantic Tropical destinantion</h2>
                <p className='text-sm mb-4 mt-2'>Escape to a world where golden sunsets meet crystal-clear waters<br/>
                  and soft white sands.Our handpicked tropical getaway is perfect<br/>
                  for couples seeking romance and serenity. Stroll along <br/>
                  palm-lined beaches, indulge in candlelit dinners by the ocean,<br/>
                  and enjoy luxurious stays surrounded by {`nature’s`} beauty. <br/>
                  Whether {`it’s`} a honeymoon, anniversary, or a spontaneous escape,<br/>
                  this paradise promises memories {`you’ll`} cherish forever. ❤️</p>
                <Link href={''} className='p-2 text-sm text-white bg-[#DF6951] rounded-sm'>View Packages</Link>
              </div>
            </div>

            <div className=' relative h-[120px] md:h-[250px] lg:h-[300px]  mt-10'>
              <Image src={'/assets/Sepratir.png'} alt='Statue' fill className='object-cover' />
            </div>

            <div className='w-full h-full mt-10'>

              <div className='text-center'>
                <p className='text-sm text-[#DF6951] font-bold mb-3'>TRENDY</p>
                <h2 className='text-2xl font-bold text-[#181E4B] px-2'>Our Trending Tour Packages</h2>
              </div>

              <div className='w-full flex flex-col md:flex-row justify-center items-center gap-8 my-5'>

              {
                Trendings.map((Trending)=>(
              <div key={Trending.destinantion} className='w-[300px] flex flex-col  p-2'>
                <div className='rounded-lg shadow-lg'>
                  <Image src={Trending.src} alt={Trending.alt} className='object-cover w-full h-full' width={150} height={100}/>
                </div>
                <div className='mt-4'>
                  <div className='flex flex-row items-center text-[#7D7D7D] text-sm' >
                    <CiCalendar className='text-lg'/><p className='ml-2 mr-5'>{Trending.days} Days</p>
                    <MdPersonOutline className='text-lg'/><p className='ml-2 '>{Trending.people} People Going</p>
                  </div>
                  <div className='flex flex-row items-center mt-2 justify-between' >
                    <p className='text-xl font-bold text-[#181E4B]'>{Trending.destinantion}</p>
                    <span className="text-[#FFBA0A] flex flex-row mr-6">
                    <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
                    </span>
                  </div>
                  <div className='flex flex-col text-[#7D7D7D] mt-1'>
                    <div className='flex items-center text-sm'>
                       <SlLocationPin /><span className='ml-2'>{Trending.country}</span>
                    </div>
                    <div className='flex items-center mt-2 mb-2'>
                       <p className='text-xl mr-4 text-[#DF6951] font-bold'>{Trending.price} $</p><span className='text-[#7D7D7D] line-through'>{Trending.cutoff} $</span>
                    </div>
                    <div>
                       <p className='text-xs text-[#181E4B]'>{Trending.desc}</p>
                    </div>
                    <div className='mt-4'>
                      <Link className='bg-[#DF6951] p-2 text-white rounded-md text-sm' href={'/'}>Explore Now</Link>
                    </div>
                  </div>
                </div>
              </div>

                ))
              }
              

              </div>

            </div>

            <div className='bg-[#D9D9D9] w-full h-full flex justify-center items-center'>

              <div className='my-10 text-center'>
                <p className='text-sm text-[#DF6951] font-bold mb-4'>PROMOTION</p>
                <h2 className='text-2xl font-bold text-[#181E4B]'>See What Our Clients Says<br/>About Us</h2>
                <div className='m-4 bg-[#FFFFFF] rounded-xl p-4 pb-5 mb-4'>
                  <Image src={'/assets/Ellipse 624.png'} height={100} width={100} className='mx-auto' alt='review'/>
                  <p className='text-sm'>&quot;Our family trip to Bali was flawless. <br/>
                      The itinerary was wellbalanced with activities for both kids and adults.<br/>
                      The guided tours were informative and fun. <br/>
                      Highly recommended!&quot;</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Home