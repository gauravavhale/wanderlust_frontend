import React from "react";
import Packages from "@/data/packages.json";

export const Information = ({ loc }) => {
  const destination = Packages.find(
    (pkg) => pkg.location?.toLowerCase() === loc?.toLowerCase()
  );

  if (!destination) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500 text-lg">No information found for {loc}.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center my-5 p-2">
      <div className="w-[90vw] md:w-[60vw]">
        {/* Header */}
        <div className="flex flex-row items-center mb-2">
          <h1 className="text-2xl font-bold text-[#181E4B]">{destination.location}</h1>
          <p className="text-xl font-bold text-[#DF6951] ml-10 mr-2">{destination.price}</p>
          <span className="text-sm text-gray-500">/ Per Couple</span>
        </div>
        <div className="mb-2">
          <span>{destination.rating} ⭐ / 5</span>
        </div>

        {/* Description */}
        <div className="my-2">
          <p className="text-sm text-[#181E4B]">{destination.description}</p>
        </div>

        {/* Details */}
        <div className="text-md text-[#181E4B]">
          <div className="grid grid-cols-[150px_1fr] gap-y-2 mt-2">
            <p className="text-[#DF6951] font-bold">Destination :</p>
            <p>{destination.destination}</p>

            <p className="text-[#DF6951] font-bold">Departure :</p>
            <p>{destination.departure}</p>

            <p className="text-[#DF6951] font-bold">Departure Time :</p>
            <p>{destination.departureTime}</p>

            <p className="text-[#DF6951] font-bold">Return Time :</p>
            <p>{destination.returnTime}</p>

            <p className="text-[#DF6951] font-bold">Dress Code :</p>
            <p>{destination.dressCode}</p>

            <p className="text-[#DF6951] font-bold">Included :</p>
            <ul className="list-disc ml-5">
              {destination.included?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p className="text-[#DF6951] font-bold">Not Included :</p>
            <ul className="list-disc ml-5">
              {destination.notIncluded?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
