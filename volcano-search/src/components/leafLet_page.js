import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
// import { useMap } from "react-leaflet/hooks";
import './leaflet_styling.css'

const LeafLet = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div position={position}>
          <div className='map'>
            A pretty CSS3 popup. <br /> Easily customizable.
          </div>
        </div>
      </MapContainer>
    </div>
  );
};

export default LeafLet;
