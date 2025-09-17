import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-5 mb-3">Places to Visit</h2>

      <div>
        {trip.tripData?.itinerary.map((item, index) => (
          <div className="mt-5">
            <h2 className="font-medium text-lg">Day {item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, index) => (
                <div key={index} className="mb-3">
                  <h2 className="font-medium text-sm text-orange-600">
                    {place.time}
                  </h2>
                  <div className="mt-2">
                    <PlaceCardItem place={place} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
