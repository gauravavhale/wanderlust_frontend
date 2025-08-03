import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiCalendar } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Packages = () => {

    const Destinantion = [
    { src:'/assets/bali.jpg',loc:'Bali',text:'Bali, the “Island of the Gods,” offers stunning beaches, vibrant culture, lush rice terraces, and spiritual retreats',price:'1,20,000',stars:'4.5',date:'26/08',people:'99'},{ src:'/assets/dubai.jpg',loc:'Dubai',text:'Dubai dazzles with modern skyscrapers, luxury shopping, desert adventures, cultural heritage, vibrant nightlife, and world-class entertainment experiences.',price:'1,60,000',stars:'4.9',date:'30/09',people:'120'},{ src:'/assets/italy.jpg',loc:'Italy',text:'Italy enchants with historical landmarks, artistic treasures, scenic coastlines, delicious cuisine, romantic cities, and rich cultural traditions.',price:'2,10,000',stars:'4.8',date:'09/11',people:'150'},{ src:'/assets/laddakh.jpg',loc:'Laddakh',text:'Ladakh’s breathtaking mountains, crystal lakes, Buddhist monasteries, adventurous treks, and unique culture make it a Himalayan paradise for travelers.',price:'80,000',stars:'4.5',date:'12/12',people:'50'},{ src:'/assets/maldives.jpg',loc:'Maldives',text:'Maldives boasts turquoise waters, white sandy beaches, luxurious resorts, coral reefs, marine life, and unforgettable romantic island getaways.',price:'1,50,000',stars:'4.0',date:'31/12',people:'200'},{ src:'/assets/paris.jpg',loc:'Paris',text:'Paris, the “City of Light,” charms with art, fashion, gourmet cuisine, romantic streets, and iconic cultural landmarks.',price:'3,20,000',stars:'4.8',date:'18/11',people:'150'},
    { src:'/assets/srilanka.jpg',loc:'SriLanka',text:'Sri Lanka offers golden beaches, ancient ruins, wildlife safaris, lush tea plantations, rich heritage, and warm island hospitality.',price:'60,000',stars:'4.4',date:'29/02',people:'140'},{ src:'/assets/spain.jpg',loc:'Spain',text:'Spain delights with flamenco dance, sunny beaches, vibrant festivals, rich history, delicious tapas, and diverse cultural experiences.',price:'2,40,000',stars:'4.8',date:'07/03',people:'170'},{ src:'/assets/brazil2.jpg',loc:'Brazil',text:'Brazil amazes with vibrant carnivals, tropical rainforests, stunning beaches, samba rhythms, diverse wildlife, and lively cultural traditions.',price:'2,80,000',stars:'4.7',date:'27/05',people:'60'},{ src:'/assets/giza2.jpg',loc:'Giza',text:'Giza fascinates visitors with ancient pyramids, the Sphinx, rich history, desert landscapes, archaeological wonders, and timeless Egyptian culture.',price:'1,60,000',stars:'4.3',date:'13/03',people:'80'},{ src:'/assets/switzerland2.jpg',loc:'Switzerland',text:'Switzerland captivates with snow-covered Alps, pristine lakes, scenic train journeys, charming towns, chocolate delights, and peaceful natural beauty.',price:'3,00,000',stars:'4.9',date:'09/09',people:'120'},{ src:'/assets/sweden.jpg',loc:'Sweden',text:'Sweden combines modern design, historic charm, scenic landscapes, Northern Lights, innovative cities, and a welcoming, sustainable cultural lifestyle.',price:'3,40,000',stars:'5.0',date:'02/06',people:'180'},
  ]

  return (
    <div className='min-h-[100vh] w-full'>
        <div className='flex flex-col items-center my-2'>

            <div className="m-4 flex flex-col md:flex-row md:flex-wrap justify-center gap-3 md:gap-5 md:w-[80vw]">

                {
                    Destinantion.map((destiny)=>(
                        <div key={destiny.loc} className='flex flex-row mb-4 md:mb-0 md:flex-col gap-2 bg-white border border-gray-200 rounded-xl shadow-md p-2 md:p-4 w-[full] md:w-[300px]'>
                            <Image src={destiny.src} width={100} height={100} className='w-[150px] h-[220px] md:w-[300px] md:h-[300px] rounded-lg object-cover' alt={destiny.loc}/>
                            <div className='text-[#181E4B] flex flex-col justify-center items-start'>
                                <p className='font-bold text-xl '>{destiny.loc}</p>
                                <p className=' text-xs md:text-sm text-gray-600 line-clamp-4'>{destiny.text}</p>
                                <div className="mt-2 flex flex-col md:flex-row items-start md:items-center gap-2">
                                    <span className="text-lg font-semibold text-[#DF6951]">{destiny.price} Rs</span> 
                                    <span className="text-yellow-500 font-medium">⭐ {destiny.stars}</span>
                                </div>
                                <div className='mt-2 flex flex-col md:flex-row items-start space-x-3'>
                                    <Link href={`/packages/${destiny.loc}`} className='text-sm text-white py-1 px-2 rounded-md bg-[#DF6951]'>Explore</Link>
                                    <div className='flex flex-row mt-2 md:mt-0'>
                                    <CiCalendar /><span className='text-xs ml-1 mr-6'>{destiny.date}</span><BsFillPeopleFill /><span className='text-xs ml-1'>{destiny.people}+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            
        </div>
    </div>
  )
}

export default Packages