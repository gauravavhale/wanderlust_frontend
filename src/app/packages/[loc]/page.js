import React from "react";
import { Information } from "@/components/Information/Information";
import Packages from '@/data/packages.json'
import TourPlan from '@/data/tourPlan.json'

export default function PackageDetails({ params }) {
const { loc } = params;
const Destinantion = Packages.find((pkg)=>pkg.location.toLowerCase() === loc.toLowerCase() )
const tourData = TourPlan.find((plan)=> plan.location.toLowerCase() === loc.toLowerCase())


  return (
    <div>
      <div className="flex justify-center my-5">
        <div className='flex flex-row justify-around p-4 bg-gray-400 w-full md:w-[70vw] text-sm'>
                <button >Information</button>
                <button >Tour Plan</button>
                <button >Gallery</button>
        </div>
      </div>
      <div>
        {/* <Information packageInfo={Destinantion} /> */}
        
        

      </div>
    </div>
  );
}