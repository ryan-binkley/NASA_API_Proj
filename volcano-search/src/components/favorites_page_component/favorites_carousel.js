import React, { useState, useContext, Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import './favorites_carousel.css'
import { VolcanoContext } from '../../App.js';
import { VolcanoImgages } from '../../App.js'; 



const UncontrolledExample = () =>  {
    const { favVolcanos } = React.useContext(VolcanoContext);
    const { volcanoPics } = React.useContext(VolcanoImgages);
    console.log('favs', favVolcanos)
    

  return (
<div id='carousel' className='carousel'>
    <Carousel interval={1500} fade={true}>
      {favVolcanos.map((volcano) => {
        return (
            <Carousel.Item>
                <img src={volcanoPics[volcano.title]} alt="First slide" style={{'width': "600px"}} />
            <Carousel.Caption>
                <h3>{volcano.title}</h3>
            </Carousel.Caption>
        </Carousel.Item>
        )
      })}
      
    </Carousel>
    </div>

  );
}

export default UncontrolledExample;