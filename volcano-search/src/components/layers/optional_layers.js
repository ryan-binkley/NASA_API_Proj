import React from "react";
import { VolcanoImgages } from "../../App";
import { VolcanoContext } from "../../App";
import L from 'leaflet'
import {
    Marker,
    Popup,
    TileLayer,
    LayersControl,
    LayerGroup,
} from "react-leaflet";
import 'leaflet-easyprint'

function GetIcon() {
    return L.icon({
        iconUrl: require("../Static/icons8-volcano-48.png"),
        iconSize: 25
    })
}

function OptionalLayers() {

    const { volcanoPics } = React.useContext(VolcanoImgages);
    const { favVolcanos, setFavVolcanos, volcanoes } = React.useContext(VolcanoContext);

    return (
        <>
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
                                        {favVolcanos.filter((favVolcano) => favVolcano.id === volcano.id).length === 0 ? <span style={{ 'cursor': "pointer" }} onClick={() => setFavVolcanos([...favVolcanos, volcano])}>⭐</span>
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
                                    <img src={volcanoPics[volcano.title]} alt='' style={{ 'width': '200px' }} />
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
            <LayersControl.Overlay checked name="Proportional Economic Loss Risk Deciles">
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
                        opacity={.6} />
                </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Mortality Risks Distribution">
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
                        opacity={.6} />
                </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Population Density">
                <LayerGroup>
                    <TileLayer
                        url="https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/GPW_Population_Density_2020/default/GoogleMapsCompatible_Level7/{z}/{y}/{x}.png"
                        // The Population Density, 2020 layer is from the Gridded Population of the World, Version 4 (GPWv4) Population Count Adjusted to Match
                        //  2015 Revision of UN WPP Country Totals. It consists of estimates of human population consistent with national censuses and 
                        //  population registers with respect to relative spatial distribution, but adjusted to match 2015 Revision of UN World Population
                        //   Prospects country totals for the years 2000, 2005, 2010, 2015, and 2020. A proportional allocation gridding algorithm, utilizing
                        //    approximately 12.5 million national and sub-national administrative units, is used to assign population values to 30 arc-second
                        //     (~1 km) grid cells. The grids contain estimates of the number of persons per grid cell.
                        maxNativeZoom={7}
                        opacity={.4} />
                </LayerGroup>
            </LayersControl.Overlay>
        </>
    )
}

export default OptionalLayers