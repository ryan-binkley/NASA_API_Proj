import React, { useState, useEffect, useRef } from "react";
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
import { VolcanoContext } from "../App";


function GetIcon() {
  return L.icon({
    iconUrl: require("./Static/icons8-volcano-48.png"),
    iconSize: 30
  })
}

const LeafLet = () => {
  const [volcanoes, setVolcanoes] = useState([]);
  const { volcanoPics } = React.useContext(VolcanoImgages);
  const { favVolcanos, setFavVolcanos } = React.useContext(VolcanoContext);
  const { coords, zoom } = React.useContext(VolcanoContext)
  const mapRef = useRef();
  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v3/categories/volcanoes")
      .then((response) => response.json())
      .then((data) => setVolcanoes(data.events));
  }, []);

  useEffect(() => {
    const map = mapRef
    const { current } = map
    console.log(current)
    setTimeout(() => {
      current.flyTo(coords, zoom, {
        duration: 2
      })
    }, 1000)


  }, [coords])

  const { BaseLayer } = LayersControl;

  return (
    <>
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
                      <span id='favStar'>
                        <span id='pTitle'>{volcano.title} </span>
                        {favVolcanos.filter((favVolcano) => favVolcano.id == volcano.id).length == 0 ? <span style={{ 'cursor': "pointer" }} onClick={() => setFavVolcanos([...favVolcanos, volcano])}>⭐</span>
                          : ''}
                      </span>
                      <div>
                        {volcano.geometry[0].coordinates[1]},{" "}
                        {volcano.geometry[0].coordinates[0]} <br />
                      </div>
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
          <LayersControl.Overlay checked name="Volcano Hazard Frequency Distrobution">
            <LayerGroup>
              <TileLayer
                url="https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/NDH_Volcano_Hazard_Frequency_Distribution_1979-2000/default/GoogleMapsCompatible_Level7/{z}/{y}/{x}.png"
                //                 The Volcano Hazard: Frequency and Distribution layer indicates the relative distribution and frequency of 
                // volcano hazard. The information displayed in Worldview/Global Imagery Browse Services (GIBS) shows that where there
                //  are higher grid cell values, there are higher frequencies of volcanic eruptions from 1979 to 2000: 1- 10, 11-30, 31-60, 61-130.

                //  Global Volcano Hazard Frequency and Distribution is a 2.5 minute gridded data set based upon the National Geophysical
                //  Data Center (NGDC) Volcano Database spanning the period of 1979 through 2000. This database includes nearly 4,000 volcanic
                //   events categorized as moderate or above (values 2 through 8) according to the Volcano Explosivity Index (VEI). Most volcanoes
                //    are georeferenced to the nearest tenth or hundredth of a degree with a few to the nearest thousandth of a degree. To produce 
                //    the final output, the frequency of a volcanic hazard is computed for each grid cell, with the data set consequently being 
                //    classified into deciles (10 classes of approximately equal number of grid cells). The higher the grid cell value in the 
                //    final output, the higher the relative frequency of hazard posed by volcanoes.
                maxNativeZoom={7}
                opacity={.6} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Proportional_Economic_Loss_Risk_Deciles">
            <LayerGroup>
              <TileLayer
                url="https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/NDH_Volcano_Proportional_Economic_Loss_Risk_Deciles_2000/default/GoogleMapsCompatible_Level7/{z}/{y}/{x}.png"
              // The Volcano Hazard: Economic Risk layer indicates the the proportional economic impacts of global volcano hazard from 1979 to 2000. 
              // The information displayed in Worldview/Global Imagery Browse Services (GIBS) reflects the decile within which the risk lies, ranging
              //  from low to high economic risk: 1st to 10th decile.

              // Global Volcano Proportional Economic Loss Risk Deciles is a 2.5 minute grid of volcano hazard economic loss as proportions of Gross
              //  Domestic Product (GDP) per analytical unit. Estimates of GDP at risk are based on regional economic loss rates derived from historical
              //   records of the Emergency Events Database (EM-DAT). Loss rates are weighted by the hazard's frequency and distribution. The 
              //   vulnerability weights are based on historical economic losses in previous disasters. The economic loss risks are applied to GDP per
              //    unit area exposure to obtain economic loss risks. The weights are an aggregate index relative to losses within each region and 
              //    country wealth class (classifications based on 2000 GDP) over the 20-year period from 1981 –2000. This index is then normalized by 
              //    GDP. The methodology of Sachs et al. (2003) is followed to determine baseline estimates of GDP per grid cell. To better reflect the 
              //    confidence surrounding the data and procedures, the range of proportionalities is classified into deciles, 10 classes of an 
              //    approximately equal number of grid cells of increasing risk.
              maxNativeZoom={7}
              opacity={.6}/>
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Mortality_Risks_Distribution">
            <LayerGroup>
              <TileLayer
                url="https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/NDH_Volcano_Mortality_Risks_Distribution_2000/default/GoogleMapsCompatible_Level7/{z}/{y}/{x}.png"
              // The Volcano Hazard: Mortality Risk layer indicates the global volcano mortality risks and distribution from 1979 to 2000. The information displayed
              //  in Worldview/Global Imagery Browse Services (GIBS) reflects the decile within which the risk lies, ranging from low to high mortality risk: 1st to
              //   10th decile.

              // Global Volcano Mortality Risks and Distribution is a 2.5 minute grid representing global volcano mortality risks. The data set was constructed using
              //  historical hazard-specific mortality loss data from the Emergency Events Database (EM-DAT) maintained by the Centre for Research on the Epidemiology
              //   of Disasters (CRED), subnational year 2000 population estimates from Gridded Population of the World, Version 3 (GPWv3), and volcano hazard data
              //    from the Global Volcano Hazard Frequency and Distribution data set. Estimates were made as to the mortality numbers associated with volcano hazard.
              //     In turn, these mortality estimates were classified into deciles, 10 classes of an approximately equal number of grid cells of increasing mortality risk.
              maxNativeZoom={7}
              opacity={.6}/>
            </LayerGroup>
          </LayersControl.Overlay>


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
    </>
  );
};

export default LeafLet

