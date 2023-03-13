import './favorites_page_component.css';
import React from 'react';
import { VolcanoContext } from '../../App.js';

function FavoritesPageComponent() {
    const { favVolcanos, setFavVolcanos } = React.useContext(VolcanoContext);

    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let simpDate = `${year}/${month}/${day}`;
    let defaultText = "You don't have any favorites yet! Head back to the Home page and click the star icon in a volcano popup to get started!"

    return (
        <>
            <div id='wrapperFavs'>
                <h3 id='title'>Favorite Volcanoes</h3>
                <div id='favs'>
                    {favVolcanos.length ?
                        favVolcanos.map((volcano) => <li key={volcano.id}>
                            {volcano.title} -----Added: {simpDate}
                            <button onClick={() => setFavVolcanos(favVolcanos.filter((volcanos) => volcanos.id !== volcano.id))}>Remove</button>
                            <a href={volcano.sources[0].url}>Learn More!</a>
                        </li>)
                        : defaultText}
                </div>
            </div>
        </>
    )
};

export default FavoritesPageComponent