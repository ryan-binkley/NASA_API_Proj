import React, { useState, useContext } from 'react'
import { useMap } from 'react-leaflet';
import { VolcanoContext } from '../App';
import LeafLet from './leafLet_page';
import './searchBar.css';

const SearchBar = () => {

    const { setCoords, setZoom } = React.useContext(VolcanoContext);
    const [searchInput, setSearchInput] = useState("");
    const [checked, setChecked] = useState('name')
    const handleChange = (event) => {
        setChecked(event.target.value)
    }
    const temp = new Set()
    const volcanoes = [
        { name: "Ambae Volcano", coords: [-15.389, 167.835], zoom: 9 },
        { name: "Epi Volcano", coords: [-16.68, 168.37], zoom: 9 },
        { name: "Karangetang Volcano", coords: [2.781, 125.407], zoom: 9 },
        { name: "Chikurachki Volcano", coords: [50.324, 155.461], zoom: 9 },
        { name: "Lewotolok Volcano", coords: [-8.272, 123.505], zoom: 9 },
        { name: "Marapi Volcano", coords: [-0.38, 100.474], zoom: 9 },
        { name: "Barren Island Volcano", coords: [12.278, 93.858], zoom: 9 },
        { name: "Nevado del Ruiz Volcano", coords: [4.892, -75.324], zoom: 9 },
        { name: "Etna Volcano", coords: [37.748, 14.999], zoom: 9 },
        { name: "Villarica Volcano", coords: [-39.42, -71.93], zoom: 9 },
        { name: "Krakatau Volcano", coords: [-6.102, 105.423], zoom: 9 },
        { name: "Cotopaxi Volcano", coords: [-0.677, -78.436], zoom: 9 },
        { name: "Kerinci Volcano", coords: [1.697, 101.264], zoom: 9 },
        { name: "Yasur Volcano", coords: [-19.532, 169.447], zoom: 9 },
        { name: "Stromboli Volcano", coords: [38.789, 15.213], zoom: 9 },
        { name: "Aira Volcano", coords: [31.593, 130.657], zoom: 9 },
        { name: "Ebeko Volcano", coords: [50.686, 156.014], zoom: 9 },
        { name: "Sheveluch Volcano", coords: [56.653, 161.36], zoom: 9 },
        { name: "Popocatepetl Volcano", coords: [19.023, -98.622], zoom: 9 },
        { name: "Great Sitkin Volcano", coords: [52.076, -176.13], zoom: 9 },
        { name: "Merapi Volcano", coords: [-7.54, 110.446], zoom: 9 },
        { name: "Suwanosejima Volcano", coords: [29.63, 129.71], zoom: 9 },
        { name: "Santa Maria Volcano", coords: [14.757, -91.552], zoom: 9 },
        { name: "Semeru Volcano", coords: [-8.108, 112.922], zoom: 9 },
        { name: "Reventador Volcano", coords: [-0.07, -77.65], zoom: 9 },
        { name: "Sangay Volcano", coords: [-2.005, -78.341], zoom: 9 },
        { name: "Sabancaya Volcano", coords: [-15.78, -71.85], zoom: 9 },
        { name: "Fuego Volcano", coords: [14.473, -90.88], zoom: 14 }
    ]
    const countries = [
        { country: "Vanuatu", coords: [-16.6611, 168.2148], zoom: 7 },
        { country: "Indonesia", coords: [-2.5489, 118.0149], zoom: 5 },
        { country: "Russia", coords: [61.5240, 105.3188], zoom: 4 },
        { country: "Colombia", coords: [4.5709, -74.2973], zoom: 7 },
        { country: "Italy", coords: [41.902782, 12.496366], zoom: 6 },
        { country: "Chile", coords: [-35.6751, -71.543], zoom: 6 },
        { country: "Ecuador", coords: [-0.208946, -78.507751], zoom: 7 },
        { country: "Japan", coords: [36.2048, 138.2529], zoom: 6 },
        { country: "Mexico", coords: [19.023, -102.5528], zoom: 6 },
        { country: "Andreanof Islands (U.S)", coords: [52.076, -176.13], zoom: 6 },
        { country: "Guatemala", coords: [14.473, -90.88], zoom: 7 },
        { country: "Peru", coords: [-15.78, -71.85], zoom: 6 }
    ]
    return (
        <div className="searchRadios">
            <fieldset>
                <legend>Select a search option:</legend>
                <div>
                    <label>
                        <input type="radio" id="name" name='test' value='name' onChange={handleChange} />
                        Name
                    </label>
                    <label>
                        <input type="radio" id="country" name='test' value='country' onChange={handleChange} />
                        Country
                    </label>
                </div>
            </fieldset>
            <input
                type="search"
                placeholder="Search here"
                onChange={event => { setSearchInput(event.target.value) }}
                value={searchInput}>
            </input>
            <div className="searchButtons">
                {(checked === 'name') ? volcanoes.filter((volcano) => {
                    if (searchInput === "") {
                        return null
                    } else if (volcano.name.toLowerCase().includes(searchInput.toLowerCase())) {
                        return volcano
                    }
                }).map((volcano) => {
                    return (
                        <div>
                            <button onClick={() => {
                                setCoords(volcano.coords)
                                setZoom(volcano.zoom)
                            }}>{volcano.name}</button>
                        </div>
                    )
                }) : countries.filter((country) => {
                    if (searchInput === "") {
                        return null
                    } else if (country.country.toLowerCase().includes(searchInput.toLowerCase())) {
                        return country
                    }
                }).map((country) => {
                    return (
                        <div>
                            <button onClick={() => {
                                setCoords(country.coords)
                                setZoom(country.zoom)
                            }}>{country.country}</button>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
};

export default SearchBar;