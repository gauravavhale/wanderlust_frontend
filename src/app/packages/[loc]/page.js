"use client"
import React, { use, useState } from "react";
import { Information } from "@/components/Information/Information";
import { Tourplan } from "@/components/Tourplan/Tourplan";
import { Gallery } from "@/components/Gallery/Gallery";
import { BookNow } from "@/components/BookNow/BookNow";

export default function PackageDetails({ params }) {

const [activateTab, setActivateTab] = useState('Information')
const { loc } =  use(params);

  return (
    <div className="my-19">
      <div className="flex justify-center my-5">
        <div className='flex flex-row justify-around p-4 bg-[#ff17007a] w-full md:w-[70vw] text-md'>
                <button onClick={()=>setActivateTab('Information')} className={`${activateTab === 'Information' ? "font-bold underline" : "" }`}>Information</button>
                <button onClick={()=>setActivateTab('TourPlan')} className={`${activateTab === 'TourPlan' ? "font-bold underline" : ""}`}>Tour Plan</button>
                <button onClick={()=>setActivateTab('Gallery')} className={`${activateTab === 'Gallery' ? "font-bold underline" : ""}`}>Gallery</button>
                <button onClick={()=>setActivateTab('BookNow')} className={`${activateTab === 'BookNow' ? "font-bold underline" : ""}`}>Book Now</button>
        </div>
      </div>
      <div>

        { activateTab === 'Information' && <Information loc={loc} />}

        { activateTab === 'TourPlan' && <Tourplan loc={loc} />}

        { activateTab === 'Gallery' && <Gallery loc={loc} />}

        { activateTab === 'BookNow' && <BookNow /> }

      </div>
    </div>
  );
}