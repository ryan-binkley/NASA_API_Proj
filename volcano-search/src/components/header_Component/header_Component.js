import './headerComponent.css';
import React, { useState } from 'react';
import { VolcanoContext } from '../../App.js';

function HeaderComponent({goToPage}) {

    const { volcano, setVolcano } = React.useContext(VolcanoContext);
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };


    return (
        <>
            <div id='wrapper'>
                <div id='navPages'>
                    <img id='logo' onClick={() => goToPage('/')} src='./Volcano_Logo.png' alt='Volcano Logo'></img>
                    <div id='navButtons'>
                        <button onClick={() => goToPage('/')} >Home</button>
                        <button onClick={() => goToPage('/components/about_page_component/about_page_component')}>About</button>
                    </div>
                </div>
                <h2 id='title'>Fantastic Volcanoes and Where to Find Them</h2>
                <div id='search'> {volcano}
                    <input type='text' onChange={handleChange} placeholder='Search...' />
                    <button onClick={() => setVolcano(userInput)}>Search</button>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent