import React from 'react'

export const Information = ({ packageInfo }) => {
  return (
    <div className="flex flex-col items-center my-5 p-2">
     <div className="w-[90vw] md:w-[60vw] ">
      <div>
        <div className="flex flex-row items-center mb-2">
          <h1 className="text-2xl font-bold text-[#181E4B]">{packageInfo.location}</h1>
          <p className="text-xl font-bold text-[#DF6951] ml-10 mr-2">{packageInfo.price}</p><span className="text-sm text-gray-500">/ Per Couple</span>
        </div>
        <div className="mb-2">
          <span>{packageInfo.rating} ⭐/ 5</span>
        </div>
      </div>
      <div className="my-2">
        <p className="text-sm text-[#181E4B]">{packageInfo.description}</p>
      </div>
      <div className="text-md text-[#181E4B]">
        <div className="grid grid-cols-[150px_1fr] gap-y-2 mt-2">
          <p className="text-[#DF6951] font-bold">Destination :</p>
          <p>{packageInfo.destination}</p>
          <p className="text-[#DF6951] font-bold">Departure :</p>
          <p>{packageInfo.departure}</p>
          <p className="text-[#DF6951] font-bold">Departure Time :</p>
          <p>{packageInfo.departureTime}</p>
          <p className="text-[#DF6951] font-bold">Return Time :</p>
          <p>{packageInfo.returnTime}</p>
          <p className="text-[#DF6951] font-bold">Dress Code :</p>
          <p>{packageInfo.dressCode}</p>
          <p className="text-[#DF6951] font-bold">Included :</p>
          <ul className="list-disc ml-5">
            {packageInfo.included.map((item,i)=>(
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-[#DF6951] font-bold">Not Included :</p>
          <ul className="list-disc ml-5">
            {packageInfo.notIncluded.map((item,i)=>(
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
     </div>
    </div>
  )
}
