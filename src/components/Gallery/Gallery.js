import React from "react";
import Image from "next/image";
import GalleryData from "@/data/gallery.json";

export const Gallery = ({ loc }) => {
  const galleryData = Array.isArray(GalleryData[loc]) ? GalleryData[loc] : [];

  return (
    <div className="flex justify-center items-center">
    <div className="w-[90vw] md:w-[60vw] bg-gray-50 py-5 px-4 md:px-10 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-[#181E4B] mb-8">
        {loc} Gallery
      </h2>

      {galleryData.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryData.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={350}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700 text-sm">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          No images found for {loc}.
        </p>
      )}
    </div>
    </div>
  );
};
