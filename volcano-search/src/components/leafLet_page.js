import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./app.css";


const LeafLet = () => {
  const [volcanoes, setVolcanoes] = useState([])
  useEffect( () => {
    fetch('https://eonet.gsfc.nasa.gov/api/v3/categories/volcanoes')
      .then(response => response.json())
      .then(data => setVolcanoes(data.events))
}, [])
  return (
    <MapContainer center={[51.505, -0.09]} zoom={2.5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
         A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {volcanoes.map((volcano, index) => {
        return (<Marker position={[volcano.geometry[0].coordinates[1], volcano.geometry[0].coordinates[0]]}><Popup>{volcano.title}</Popup></Marker> )
      })}
</MapContainer>
  );
};

export default LeafLet;
