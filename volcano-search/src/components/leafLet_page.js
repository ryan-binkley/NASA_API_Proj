import React, { useState, useEffect } from "react";
import L from 'leaflet'
import ResetViewControl from '@20tab/react-leaflet-resetview';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayersControl,
  LayerGroup,
  FeatureGroup,
} from "react-leaflet";
import "./app.css";
import { VolcanoImgages } from "../App";
import { VolcanoContext } from "../App";

function GetIcon() {
  return L.icon({
    iconUrl: require("./Static/icons8-volcano-48.png"),
    iconSize: 30
  })
}

const LeafLet = () => {
  const [volcanoes, setVolcanoes] = useState([]);
  const {volcanoPics} = React.useContext(VolcanoImgages);
  const {favVolcanos, setFavVolcanos} = React.useContext(VolcanoContext);
  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v3/categories/volcanoes")
      .then((response) => response.json())
      .then((data) => setVolcanoes(data.events));
  }, []);
  const { BaseLayer } = LayersControl;
  return (

    <MapContainer center={[51.505, -0.09]} zoom={2.4} scrollWheelZoom={true} id='theMap' minZoom={2.4} dragging={true} boxZoom={true} maxBounds={[[-90,-180],   [90,180]]}>
      <ResetViewControl
        title="Reset view"
        icon="🏠"
      />
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
        <BaseLayer checked name="Esri Map">
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          />
        </BaseLayer>
        <BaseLayer name="NASA Gibs Blue Marble">
          <TileLayer
            url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
            attribution="&copy; NASA Blue Marble, image service by OpenGeo"
          />
        </BaseLayer>
        <LayersControl.Overlay checked name="Volcanoes">
          <LayerGroup>
            {volcanoes.map((volcano, index) => {
              return (
                <Marker icon={GetIcon()}
                  position={[
                    volcano.geometry[0].coordinates[1],
                    volcano.geometry[0].coordinates[0],
                  ]}
                >
                  <Popup>
                    {volcano.title}
                    <div onClick={() => setFavVolcanos([...favVolcanos, volcano])}>⭐</div>
                    {volcano.geometry[0].coordinates[1]},{" "}
                    {volcano.geometry[0].coordinates[0]} <br />
                    <a
                      href={volcano.sources[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See More Details
                    </a> <br />
                    <img src={volcanoPics[volcano.title]} style={{'width': '200px'}} />
                  </Popup>
                </Marker>
              );
            })}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default LeafLet;

