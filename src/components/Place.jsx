import React, { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import PlaceDetails from "./PlaceDetails";
import { useParams } from "react-router-dom";
function Place(props) {
  const { placeId } = useParams();
  return (
    <div>
      <PlaceDetails placeId={placeId} />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(Place);
