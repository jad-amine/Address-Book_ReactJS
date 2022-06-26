import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css';
import { Icon } from "leaflet";

function Map() {
  return (
    <MapContainer center={[34.249610, 35.665626]} zoom={12}scrollWheelZoom={true}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default Map;

