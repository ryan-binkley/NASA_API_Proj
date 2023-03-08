import './headerComponent.css';
import React, { useState } from 'react';
import {VolcanoContext} from '../../App.js';

function HeaderComponent() {

    const {volcano, setVolcano} = React.useContext(VolcanoContext);
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    function clickButton() {
        setVolcano(userInput);
    }


    return (
        <>
            <div id='wrapper'>
                <img id='logo' src='./Volcano_Logo.png' alt='Volcano Logo'></img>
                <h2 id='title'>Fantastic Volcanoes and Where to Find Them</h2>
                <div id='search'> {volcano}
                    <input type='text' onChange={handleChange} placeholder='Search...' />
                    <button onClick={() => clickButton()}>Search</button>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent