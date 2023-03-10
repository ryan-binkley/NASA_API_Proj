import React, { useState, useContext } from 'react'
import { useMap } from 'react-leaflet';
import { VolcanoContext } from '../App';
import LeafLet from './leafLet_page';


const SearchBar = () => {

    const {coords, setCoords} = React.useContext(VolcanoContext);
    const [searchInput, setSearchInput] = useState("");
    const [checked, setChecked] = useState('name')
    const handleChange = (event) => {
        setChecked(event.target.value)
    }
    const temp = new Set()

        const volcanoes = [
        {name: "Ambae Volcano"},
        {name: "Epi Volcano"},
        {name: "Karangetang Volcano"},
        {name: "Chikurachki Volcano"},
        {name: "Lewotolok Volcano"},
        {name: "Marapi Volcano"},
        {name: "Barren Island Volcano"},
        {name: "Nevado del Ruiz Volcano"},
        {name: "Etna Volcano", country: "Italy" },
        {name: "Villarica Volcano"},
        {name: "Krakatau Volcano"},
        {name: "Cotopaxi Volcano"},
        {name: "Kerinci Volcano"},
        {name:"Yasur Volcano"},
        {name: "Stromboli Volcano"},
        {name: "Aira Volcano"},
        {name: "Ebeko Volcano"},
        {name: "Sheveluch Volcano"},
        {name: "Popocatepetl Volcano"},
        {name: "Great Sitkin Volcano"},
        {name: "Merapi Volcano"},
        {name: "Suwanosejima Volcano"},
        {name: "Santa Maria Volcano"},
        {name: "Semeru Volcano"},
        {name: "Reventador Volcano"},
        {name: "Sangay Volcano"},
        {name: "Sabancaya Volcano"},
        {name: "Fuego Volcano"}
    ]
        const countries = [
            {country: "Vanuatu"},
            {country: "Indonesia"},
            {country: "Russia", coords: [61.5240, 105.3188]},
            {country: "Colombia"},
            {country: "Italy"},
            {country: "Chile"},
            {country: "Ecuador"},
            {country: "Japan"},
            {country: "Mexico"},
            {country: "Andreanof Islands (U.S)"},
            {country: "Guatemala"},
            {country: "Ecuador"},
            {country: "Peru"}
        ]
    const [theView, setTheView] = useState([])

    // function SetViewOnClick({ coords }) {
    //     const map = useMap();
    //     map.setView(coords, map.getZoom());
    //     map.setZoom(6);
    //     return null;
    //     }

    return (
        <div>
            <fieldset>
            <legend>Select a search option:</legend>
                <div>
                    <label>
                        <input type="radio" id="name" name='test' value='name' onChange={handleChange}/>
                        Name
                    </label>
                    <label>
                        <input type="radio" id="country" name='test' value='country' onChange={handleChange}/>
                        Country
                    </label>
                
                </div>
            </fieldset>
    <input
        type="search"
        placeholder="Search here"
        onChange={event => {setSearchInput(event.target.value)}}
        value={searchInput}>
    </input>
    {(checked === 'name') ? volcanoes.filter((volcano) => {
        if (searchInput === "") {
            return null
        } else if (volcano.name.toLowerCase().includes(searchInput.toLowerCase())) {
            console.log('hello')
            return volcano
        }
    }).map((volcano) => {
        return (
            <div>
                <p>{volcano.name}</p>
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
                <button onClick={() => {setCoords(country.coords)}}>{country.country}</button>
            </div>
        )
    })
    
}
    </div>


)};

export default SearchBar;