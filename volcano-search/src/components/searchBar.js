import React, {useEffect, useState} from 'react'


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [checked, setChecked] = useState('')
    const handleChange = (event) => {
        setChecked(event.target.value)
    }

        const volcanoes = [
        {name: "Ambae Volcano", country: "Vanuatu"},
        {name: "Epi Volcano", country: "Vanuatu" },
        {name: "Karangetang Volcano", country:" Indonesia"},
        {name: "Chikurachki Volcano", country:" Russia"},
        {name: "Lewotolok Volcano", country:" Indonesia"},
        {name: "Marapi Volcano", country:" Indonesia"},
        {name: "Barren Island Volcano", country:" India"},
        {name: "Nevado del Ruiz Volcano", country:" Colombia" },
        {name: "Etna Volcano", country: "Italy" },
        {name: "Villarica Volcano", country: "Chile"},
        {name: "Krakatau Volcano", country:" Indonesia"},
        {name: "Cotopaxi Volcano", country:" Ecuador"},
        {name: "Kerinci Volcano", country: "Indonesia"},
        {name:"Yasur Volcano", country:" Vanuatu"},
        {name: "Stromboli Volcano", country:" Italy"},
        {name: "Aira Volcano", country:" Japan"},
        {name: "Ebeko Volcano", country:" Russia"},
        {name: "Sheveluch Volcano", country:"Russia"},
        {name: "Popocatepetl Volcano", country:"Mexico"},
        {name: "Great Sitkin Volcano", country:"Andreanof Islands (U.S.)"},
        {name: "Merapi Volcano", country: "Indonesia"},
        {name: "Suwanosejima Volcano", country: "Japan"},
        {name: "Santa Maria Volcano", country: "Guatemala"},
        {name: "Semeru Volcano", country: "Indonesia" },
        {name: "Reventador Volcano", country: "Ecuador"},
        {name: "Sangay Volcano", country: "Ecuador"},
        {name: "Sabancaya Volcano", country: "Peru"},
        {name: "Fuego Volcano", country: "Guatemala"}
    ]
    return (
        <div>
            <fieldset>
            <legend>Select a search option:</legend>

                <div>
                    <label>
                        <input type="radio" id="name" name='test' value='name' defaultChecked checked={checked === 'name'} onChange={handleChange}/>
                        Name
                    </label>

                    <label>
                        <input type="radio" id="country" name='test' value='country' checked={checked === 'country'} onChange={handleChange}/>
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
            return volcano
        }
    }).map((volcano) => {
        return (
            <div>
                <p>{volcano.name}</p>
            </div>
        )
    }) : volcanoes.filter((volcano) => {
        if (searchInput === "") {
            return null
        } else if (volcano.country.toLowerCase().includes(searchInput.toLowerCase())) {
            return volcano
        }
    }).map((volcano) => {
        return (
            <div>
                <p>{volcano.country}</p>
            </div>
        )
    })
    


}
        






    </div>


)};

export default SearchBar;