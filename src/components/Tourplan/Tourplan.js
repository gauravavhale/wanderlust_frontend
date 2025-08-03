import React from 'react'

export const Tourplan = ({data}) => {
    const {location,tourPlan} = data
  return (
    <div className="flex flex-col items-center my-6 p-2">
         <div className="w-[90vw] md:w-[60vw]">
          <h6 className="text-2xl font-bold text-[#181E4B]">{location} Tour Plan</h6>
          {tourPlan?.map((tour, index) => (
            <div key={index} className="flex flex-row gap-4 mt-3">
              {/* Day Badge */}
              <div>
                <p className="text-white text-sm rounded-sm bg-[#DF6951] p-2 px-2">0{tour.day}</p>
              </div>
        
              {/* Tour Details */}
              <div className="text-[#181E4B]">
                <h6 className="text-md font-bold">Day {tour.day} : {tour.title}</h6>
                <p className="text-sm">{tour.description}</p>
                <ul className="list-disc list-inside text-sm">
                  {tour.inclusions.map((inc, i) => (
                    <li key={i}>{inc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
         </div>
    </div>
  )
}
