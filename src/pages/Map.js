import React, { useContext, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "../App.css";
import { useLocation } from "react-router-dom";
import { ContactsContext } from "../contexts/ContactsContext";

function Map({ contact, setContact }) {
  const [location, setLocation] = useState("");
  const { data, setData } = useContext(ContactsContext);
  let currentPath = useLocation();
  const adding_contact = currentPath.pathname === "/addContact";
  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        if (adding_contact) {
          setLocation(e.latlng);
          setContact({
            ...contact,
            location: { coordinates: [e.latlng.lat, e.latlng.lng] },
          });
        }
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
      {location && (
        <Marker position={location}>
          <Popup>Contact Location.</Popup>
        </Marker>
      )}
      {!adding_contact && data && data.map((contact)=>(
        <Marker key={contact.name} position={contact.location.coordinates}>
          <Popup>{contact.name} <br /> {contact.email} <br/> {contact.number}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
