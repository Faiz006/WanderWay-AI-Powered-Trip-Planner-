import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
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
        "https://www.google.com/maps/search/?api=1&query=" + place.placeName
      }
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline text-black"
    >
      <div className="border rounded-xl p-3 flex gap-5 hover:scale-105 transition-all hover:shqdow-md cursor-pointer">
        <img
          src={photoUrl ? photoUrl : "/placeholder.png"}
          onError={(e) => (e.target.src = "/placeholder.png")}
          className="w-[130px] h-[130px] min-w-[130px] min-h-[130px] max-w-[130px] max-h-[130px] rounded-xl overflow-hidden bg-gray-100"
        />

        <div>
          <h2 className="font-bold text-lg text-black">{place.placeName}</h2>
          <p className="text-gray-400">{place.placeDetails}</p>
          {/* <h2 className="mt-2">{place.timeToTravel}</h2> */}
          <p className="text-sm text-green-600 mt-1">Ticket: {place.ticketPricing}</p>
          <p className="text-sm text-yellow-600 mt-1">⭐ {place.rating}</p>
        </div>
      </div>
    </a>
  );
}

export default PlaceCardItem;
