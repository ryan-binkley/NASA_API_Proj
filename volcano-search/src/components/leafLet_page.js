import React, { useEffect, useRef } from "react";
import ResetViewControl from '@20tab/react-leaflet-resetview';
import { EditControl } from "react-leaflet-draw"
import MapPrint from "./MapPrint/MapPrint";
import { MapContainer, TileLayer, LayersControl, FeatureGroup } from "react-leaflet";
import "./app.css";
import 'leaflet-easyprint'
import { VolcanoContext } from "../App";
import OptionalLayers from "./layers/optional_layers";


const LeafLet = () => {
  const { coords, zoom, setSearchShow } = React.useContext(VolcanoContext)
  const mapRef = useRef();

  setSearchShow(true);

  useEffect(() => {
    const { current } = mapRef
    setTimeout(() => {
      current.flyTo(coords, zoom, {
        duration: 5
      })
    }, 1000)

  }, [coords])

  const { BaseLayer } = LayersControl;

  return (
    <div className='leafletMap'>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin="" />
      <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet-src.js" integrity="sha512-IkGU/uDhB9u9F8k+2OsA6XXoowIhOuQL1NTgNZHY1nkURnqEGlDZq3GsfmdJdKFe1k1zOc6YU2K7qY+hF9AodA==" crossorigin=""></script>
      <link rel="stylesheet" href="https://unpkg.com/leaflet-draw@1.0.2/dist/leaflet.draw-src.css" />
      <script src="https://unpkg.com/leaflet-draw@1.0.2/dist/leaflet.draw-src.js"></script>
      <script src="http://unpkg.com/leaflet@latest/dist/leaflet.js"></script>
      <script src="js/leaflet-providers.js"></script>

      <MapContainer ref={mapRef} center={[51.505, -0.09]} zoom={2.4} scrollWheelZoom={true} id='theMap' minZoom={2.4} maxZoom={15} dragging={true} boxZoom={true} maxBounds={[[-90, -180], [90, 180]]}>
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

          <OptionalLayers />

          <FeatureGroup>
            <EditControl
              position='topleft'
              draw={{
                circlemarker: false
              }}
            />
          </FeatureGroup>

          <MapPrint position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Print" />
          <MapPrint position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Export as PNG" exportOnly />

        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default LeafLet