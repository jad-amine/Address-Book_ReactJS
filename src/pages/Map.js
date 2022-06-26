import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "../App.css";
import { Icon } from "leaflet";

function Map() {
  const [location, setLocation] = useState("");

  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        setLocation(e.latlng);
      },
    });
    return null;
  };
  return (
    <MapContainer
      center={[34.24961, 35.665626]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationFinderDummy />
      {location && <Marker position={location}>
        <Popup>
          Contact Location.
        </Popup>
      </Marker>}
    </MapContainer>
  );
}

export default Map;
