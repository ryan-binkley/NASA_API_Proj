import './headerComponent.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VolcanoContext } from '../../App.js';
import { VolcanoImgages } from '../../App.js';
import SearchBar from '../searchBar';

function HeaderComponent() {

    const { volcano, setVolcano } = React.useContext(VolcanoContext);
    const {volcanoPics} = React.useContext(VolcanoImgages);
    const [userInput, setUserInput] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    return (
        <>
            <div id='wrapper'>
                <div id='navPages'>
                    <div>
                    <img id='logo' onClick={() => navigate('/')} src='./Volcano_Logo.png' alt='Volcano Logo'></img>
                    </div>
                    <div id='navButtons'>
                        <button onClick={() => navigate('/')} className='buttons'>Home</button>
                        <button onClick={() => navigate("/about")} className='buttons'>About</button>
                        <button onClick={() => navigate("/favorites")} className='buttons'>Favorites</button>
                        <button onClick={() => navigate('/')} >Home</button>
                        <button onClick={() => navigate("/about")}>About</button>
                        <div>
                          <button onClick={() => navigate("/daily")}>Volcano of the Day</button>
                        </div>
                    </div>
                </div>
                <h2 id='title'>Fantastic Volcanoes and Where to Find Them</h2>
                <div id='search'> {volcano}
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default HeaderComponent