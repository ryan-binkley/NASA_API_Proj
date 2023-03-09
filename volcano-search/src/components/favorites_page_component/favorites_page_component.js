import './favorites_page_component.css';
import React, { useState } from 'react';
import { VolcanoContext } from '../../App.js';


function FavoritesPageComponent() {

    const { favVolcanos, setFavVolcanos } = React.useContext(VolcanoContext);

    let defaultFavs = ['Peter Alkumeidy', 'Ryan Binkley', 'Tyler Hancock', 'Isaac Pringle', 'Brandon Roques'];
    

    return (
        <>
            <div id='wrapperFavs'>
                <h3 id='title'>Favorite Volcanoes</h3>
                <div id='favs'>
                    {favVolcanos.map((dev) => <li>{dev.title}</li>
                    )}
                </div>
            </div>
        </>
    )
};




export default FavoritesPageComponent