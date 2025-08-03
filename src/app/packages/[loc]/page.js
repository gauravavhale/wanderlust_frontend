"use client"
import React, { use, useState } from "react";
import { Information } from "@/components/Information/Information";
import { Tourplan } from "@/components/Tourplan/Tourplan";
import Packages from '@/data/packages.json'
import TourPlan from '@/data/tourPlan.json'

export default function PackageDetails({ params }) {

  const [activateTab, setActivateTab] = useState('Information')

const { loc } =  use(params);
const Destinantion = Packages.find((pkg)=>pkg.location.toLowerCase() === loc.toLowerCase() )
const tourData = TourPlan.find((plan)=> plan.location.toLowerCase() === loc.toLowerCase())


  return (
    <div>
      <div className="flex justify-center my-5">
        <div className='flex flex-row justify-around p-4 bg-[#ff17007a] w-full md:w-[70vw] text-md'>
                <button onClick={()=>setActivateTab('Information')} className={`${activateTab === 'Information' ? "font-bold underline" : "" }`}>Information</button>
                <button onClick={()=>setActivateTab('TourPlan')} className={`${activateTab === 'TourPlan' ? "font-bold underline" : ""}`}>Tour Plan</button>
                {/* <button >Gallery</button> */}
        </div>
      </div>
      <div>

        { activateTab === 'Information' && <Information packageInfo={Destinantion} />}

        { activateTab === 'TourPlan' && <Tourplan data={tourData} />}

      </div>
    </div>
  );
}