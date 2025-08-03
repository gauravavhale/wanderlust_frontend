import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Destination = () => {

  const Destinantion = [
    { src:'/assets/bali.jpg',loc:'Bali'},{ src:'/assets/dubai.jpg',loc:'Dubai'},{ src:'/assets/italy.jpg',loc:'Italy'},{ src:'/assets/laddakh.jpg',loc:'Laddakh'},{ src:'/assets/maldives.jpg',loc:'Maldives'},{ src:'/assets/paris.jpg',loc:'Paris'},
    { src:'/assets/srilanka.jpg',loc:'SriLanka'},{ src:'/assets/spain.jpg',loc:'Spain'},{ src:'/assets/brazil2.jpg',loc:'Brazil'},{ src:'/assets/giza2.jpg',loc:'Giza'},{ src:'/assets/switzerland2.jpg',loc:'Switzerland'},{ src:'/assets/sweden.jpg',loc:'Sweden'},
  ]

  return (
    <div className='h-full w-full'>

      <div className='w-full h-[90vh] relative'>
        <div className="md:hidden">
          <Image src='/assets/pisa.jpg' fill className='object-cover' alt='landing'/>
        </div>
        <div className="hidden md:block">
          <Image src='/assets/Rectangle 19290.png' fill className='object-cover' alt='landing'/>
        </div>
        
        <div className='absolute flex justify-center items-center inset-0 '>
          <Image src='/assets/Landscapes.png' className='w-[300px] h-auto sm:w-[400px]'  height={200} width={400} alt='landing' />
        </div>
      </div>
      
      <div className='w-full h-full flex flex-col md:flex-row my-[50px] px-4 md:px-5'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left lg:pl-[20vw]'>
          <p className='text-sm text-[#DF6951] font-bold'>PROMOTION</p>
          <p className='text-2xl font-bold text-[#181E4B]'>We Provide You Best<br/>Europe Sightseeing Tours</p>
          <p className='text-sm mb-4 mt-2'>Your European adventure starts here!<br/> Explore iconic cities, stunning landscapes, and<br/> hidden treasures across Europe with our expertly planned sightseeing tours — making every moment picture-perfect.</p>
          <Link href={'/'} className='p-2 text-sm text-white bg-[#DF6951] rounded-sm'>View Packages</Link>
        </div>
        <div className='w-full md:w-1/2 flex justify-center md:justify-start mt-5 md:mt-0'>
          <Image src={'/assets/Ellipse 626.png'} alt='IMG' width={200} height={200} className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]'/>
        </div>
      </div>

      <div className='w-full h-full  my-[50px] px-4'>

        <div className='w-full flex flex-col justify-center items-center text-center'>
          <p className='text-sm text-[#DF6951] font-bold'>EXPLORE MORE</p>
          <p className='text-2xl font-bold text-[#181E4B]'>Our International Destinantion</p>
        </div>

        <div className='flex justify-center'>
          <div className='relative flex flex-wrap gap-5 justify-center mt-10 md:max-w-[80vw]'>
            {Destinantion.map((destiny) => (
              <div key={destiny.src} className='relative'>
                <Image src={destiny.src} key={destiny.src} height={100} width={100} className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] object-cover rounded-lg' alt='Bali'/>
                <p className='absolute bottom-4 w-full text-center text-[#DF6951] text-xs font-bold bg-gray-200 bg-opacity-60 py-1'>
                  {destiny.loc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center mt-10 bg-[#fae1d7] p-6 px-8 shadow">
        <h3 className="text-xl font-bold text-[#181E4B] mb-4">
          Travel Tips for Your Next Adventure ✈️
        </h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Book flights and accommodations in advance for the best deals.</li>
          <li>Check visa requirements for your destination.</li>
          <li>Learn a few local phrases to connect with locals.</li>
          <li>Always keep a digital and printed copy of important documents.</li>
        </ul>
      </div>

    </div>
  )
}

export default Destination
