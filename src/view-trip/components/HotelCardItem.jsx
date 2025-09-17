import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName
    };
    try {
      const resp = await GetPlaceDetails(data);
      const name = resp.data.places[0].photos?.[5]?.name;
      if (name) {
        const url = PHOTO_REF_URL.replace("{NAME}", name);
        setPhotoUrl(url);
        // console.log(url);
      }
    } catch (err) {
      console.error("Photo fetch error:", err);
    }
  };

  return (
    <a
      href={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div className="hover:scale-105 cursor-pointer transition-all">
        <img src={photoUrl ? photoUrl : "/placeholder.png"} className="rounded-xl h-[180px] w-full object-cover" />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium text-black">{hotel?.hotelName}</h2>
          <h2 className="text-xs text-gray-500">📌 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm text-black">💵 {hotel?.price}</h2>
          <h2 className="text-sm text-black">⭐ {hotel?.rating}</h2>
        </div>
      </div>
    </a>
  );
}

export default HotelCardItem;
