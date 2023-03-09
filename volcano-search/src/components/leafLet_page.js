import React, { useState, useEffect } from "react";
import L from 'leaflet'
import ResetViewControl from '@20tab/react-leaflet-resetview';
import { EditControl } from "react-leaflet-draw"
import MapPrint from "./MapPrint/MapPrint";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayersControl,
  LayerGroup,
  FeatureGroup,
  MapContainerProps,
  Circle,
  useMap
} from "react-leaflet";
import "./app.css";
import 'leaflet-easyprint'
import { VolcanoImgages } from "../App";

function GetIcon() {
  return L.icon({
    iconUrl: require("./Static/icons8-volcano-48.png"),
    iconSize: 30
  })
}

const LeafLet = () => {
  const [volcanoes, setVolcanoes] = useState([]);
  const { volcanoPics } = React.useContext(VolcanoImgages);
  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v3/categories/volcanoes")
      .then((response) => response.json())
      .then((data) => setVolcanoes(data.events));
  }, []);
  const { BaseLayer } = LayersControl;

  return (

    <>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin="" />
      <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet-src.js" integrity="sha512-IkGU/uDhB9u9F8k+2OsA6XXoowIhOuQL1NTgNZHY1nkURnqEGlDZq3GsfmdJdKFe1k1zOc6YU2K7qY+hF9AodA==" crossorigin=""></script>
      <link rel="stylesheet" href="https://unpkg.com/leaflet-draw@1.0.2/dist/leaflet.draw-src.css" />
      <script src="https://unpkg.com/leaflet-draw@1.0.2/dist/leaflet.draw-src.js"></script>
      <MapContainer center={[51.505, -0.09]} zoom={2.4} scrollWheelZoom={true} id='theMap' minZoom={2.4} maxZoom={50} dragging={true} boxZoom={true} maxBounds={[[-90, -180], [90, 180]]}>
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
          <BaseLayer checked name="Google Satellite">
            <TileLayer
              attribution='&copy; <a href="https://www.google.com">Google</a> contributors'
              url="//mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
            />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap (Mapnik)">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="//mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            />
          </BaseLayer>
          <BaseLayer name="Esri Map">
            <TileLayer
              attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            />
          </BaseLayer>
          <BaseLayer name="NASA Gibs Blue Marble" >
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
                      {volcano.title} <br />
                      {volcano.geometry[0].coordinates[1]},{" "}
                      {volcano.geometry[0].coordinates[0]} <br />
                      <a
                        href={volcano.sources[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See More Details
                      </a> <br />
                      <img src={volcanoPics[volcano.title]} style={{ 'width': '200px' }} />
                    </Popup>
                  </Marker>
                );
              })}
            </LayerGroup>

          </LayersControl.Overlay>
        </LayersControl>

        <FeatureGroup>
          <EditControl
            position='topleft'

            draw={{
              circlemarker: false
            }}
          />
          <Circle center={[51.51, -0.06]} radius={200} />
        </FeatureGroup>
        <MapPrint position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Print" />
        <MapPrint position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Export as PNG" exportOnly />

      </MapContainer>
    </>
  );
};

export default LeafLet;

