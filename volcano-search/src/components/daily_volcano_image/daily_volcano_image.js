import React, { useState, useEffect, useContext } from "react"
import { VolcanoContext } from '../../App.js';


const volcanoImage = [
    {
        "Ambae Volcano, Vanuatu": "https://volcano.si.edu/gallery/photos/GVP-11911.jpg"
    },
    {
        "Epi Volcano, Vanuatu": "https://volcano.si.edu/gallery/photos/GVP-11036.jpg"
    },
    {
        "Karangetang Volcano, Indonesia": "https://volcano.si.edu/gallery/photos/GVP-10137.jpg"
    },
    {
        "Chikurachki Volcano, Russia": "https://volcano.si.edu/gallery/photos/GVP-09168.jpg",
    },
    {
        "Lewotolok Volcano, Indonesia": "https://volcano.si.edu/gallery/photos/GVP-08323.jpg",
    },
    {
        "Marapi Volcano, Indonesia": "https://volcano.si.edu/gallery/photos/GVP-12022.jpg",
    },
    {
        "Barren Island Volcano, India": "https://volcano.si.edu/gallery/photos/GVP-01706.jpg",
    },
    {
        "Nevado del Ruiz Volcano, Colombia": "https://volcano.si.edu/gallery/photos/GVP-04359.jpg",
    },
    {
        "Etna Volcano, Italy": "https://volcano.si.edu/gallery/photos/GVP-01552.jpg",
    },
    {
        "Villarica Volcano, Chile": "https://volcano.si.edu/gallery/photos/GVP-11203.jpg",
    },
    {
        "Krakatau Volcano, Indonesia": "https://volcano.si.edu/gallery/photos/GVP-00568.jpg",
    },
    {
        "Cotopaxi Volcano, Ecuador": "https://volcano.si.edu/gallery/photos/GVP-04450.jpg",
    },
    {
        "Kerinci Volcano, Indonesia": "https://volcano.si.edu/gallery/photos/GVP-12030.jpg",
    },
    {
        "Yasur Volcano, Vanuatu": "https://volcano.si.edu/gallery/photos/GVP-01698.jpg",
    },
    {
        "Stromboli Volcano, Italy": "https://volcano.si.edu/gallery/photos/GVP-09131.jpg",
    },
    {
        "Aira Volcano, Japan": "https://volcano.si.edu/gallery/photos/GVP-10567.jpg",
    },
    {
        "Ebeko Volcano, Russia": "https://volcano.si.edu/gallery/photos/GVP-02271.jpg",
    },
    {
        "Sheveluch Volcano, Russia": "https://volcano.si.edu/gallery/photos/GVP-02524.jpg",
    },
    {
        "Popocatepetl Volcano, Mexico": "https://volcano.si.edu/gallery/photos/GVP-03789.jpg",
    },
    {
        "Great Sitkin Volcano, Andreanof Islands (U.S.)": "https://volcano.si.edu/gallery/photos/GVP-08562.jpg",
    },
    {
        "Merapi Volcano, Indonesia": "https://volcano.si.edu/gallery/photos/GVP-01722.jpg",
    },
    {
        "Suwanosejima Volcano, Japan": "https://volcano.si.edu/gallery/photos/GVP-06460.jpg",
    },
    {
        "Santa Maria Volcano, Guatemala": "https://volcano.si.edu/gallery/photos/GVP-07811.jpg",
    },
    {
        "Semeru Volcano, Indonesia": "https://volcano.si.edu/gallery/photos/GVP-00736.jpg",
    },
    {
        "Reventador Volcano, Ecuador": "https://volcano.si.edu/gallery/photos/GVP-11671.jpg",
    },
    {
        "Sangay Volcano, Ecuador": "https://volcano.si.edu/gallery/photos/GVP-04490.jpg",
    },
    {
        "Sabancaya Volcano, Peru": "https://volcano.si.edu/gallery/photos/GVP-04768.jpg",
    },
    {
        "Fuego Volcano, Guatemala": "https://volcano.si.edu/gallery/photos/GVP-03903.jpg"
    },]



function DailyImage() {

    const { volcanoes, setVolcanoes } = React.useContext(VolcanoContext);

    var today_date = new Date()
    var today_pic = today_date.getDate()
    var rand_date = Math.ceil(Math.random() * (27 - 1) + 1)

    if (today_date === '28' || '29' || '30' || '31') {
        today_date = (rand_date)
    };


    return (
        <>
            <div>
                <img src={Object.values(volcanoImage[today_pic])} alt="this volcano" />
                <div>
                    <a target="_blank" rel="noreferrer" href={volcanoes[today_pic].sources[0].url}>
                        <p>
                            {Object.keys(volcanoImage[today_pic])}
                        </p>
                    </a>
                </div>
            </div>
        </>

    )
};


export default DailyImage









