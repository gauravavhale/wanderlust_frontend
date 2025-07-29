import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {

  const Categoryies = [
    { src: '/assets/tour-guide 1.png', title:'Guided Tour', para:'From iconic landmarks to hidden gems, our guided tours give you the perfect travel experience.' },
    { src: '/assets/travelling 1.png', title:'Best Flight Options', para:'From economy to first-class, our best flight options ensure comfort, convenience, and value.' },
    { src: '/assets/hands 1.png', title:'Religious Tour', para:'Journey to sacred places and connect with your inner peace through our guided religious tours.' },
    { src: '/assets/medical-team 1.png', title:'Medical Insurance', para:'From minor mishaps to emergencies, our travel medical insurance keeps you safe wherever.' },
  ]

  return (
    <div className='h-full w-full mb-[50px] '>

          <div className='w-full h-[90vh] relative'>
            <Image src={'/assets/landing_image1.png'} alt='landing' fill className='object-cover' />
          
              <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <h2 className='text-center text-white text-3xl md:text:4xl lg:text-5xl font-bold drop-shadow-lg'>
                  Discover the World with Wanderlust Travel Hub
                </h2>
                <p className='text-center text-white text:sm md:text-xl font-bold drop-shadow-lg mx-2'>Your journey begins here from golden beaches to snow-capped mountains, we bring you closer to the places {`you’ve`} always dreamed of.</p>
                <div className='flex gap-6 mt-4'>
                  <Link href={''} className='p-2 bg-[#DF6951] rounded-sm text-white text-sm'>Plan Your Trip</Link>
                  <Link href={''} className='p-2 bg-[#DF6951] rounded-sm text-white text-sm'>Explore Destinations</Link>
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
                <p className='text-sm mb-4'>Escape to a world where golden sunsets meet crystal-clear waters<br/>
                  and soft white sands.Our handpicked tropical getaway is perfect<br/>
                  for couples seeking romance and serenity. Stroll along <br/>
                  palm-lined beaches, indulge in candlelit dinners by the ocean,<br/>
                  and enjoy luxurious stays surrounded by {`nature’s`} beauty. <br/>
                  Whether {`it’s`} a honeymoon, anniversary, or a spontaneous escape,<br/>
                  this paradise promises memories {`you’ll`} cherish forever. ❤️</p>
                <Link href={''} className='p-2 text-sm text-white bg-[#DF6951] rounded-sm'>View Packages</Link>
              </div>
            </div>

            <div className=' relative h-[150px] md:h-[250px] lg:h-[300px]  mt-10'>
              <Image src={'/assets/Sepratir.png'} alt='Statue' fill className='object-cover' />
            </div>

            <div className='bg-[#D9D9D9] w-full h-full flex justify-center items-center'>

              <div className='my-10 text-center'>
                <p className='text-sm text-[#DF6951] font-bold mb-4'>PROMOTION</p>
                <h2 className='text-2xl font-bold text-[#181E4B]'>See What Our Clients Says<br/>About Us</h2>
                <div className='m-4 bg-[#FFFFFF] rounded-xl p-4 mb-4'>
                  <Image src={'/assets/Ellipse 624.png'} height={100} width={100} className='mx-auto' alt='review'/>
                  <p className='text-sm'>&quot;Our family trip to Bali was flawless. <br/>
                      The itinerary was well-balanced with activities for both kids and adults.<br/>
                      The guided tours were informative and fun. <br/>
                      Highly recommended!&quot;</p>
                </div>
              </div>

            </div>

          </div>

    </div>
  )
}

export default Home