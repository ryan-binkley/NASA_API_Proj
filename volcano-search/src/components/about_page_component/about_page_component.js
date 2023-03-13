import './aboutPageComponent.css';

function AboutPageComponent() {

    let devs = ['Peter Alkumeidy', 'Ryan Binkley', 'Tyler Hancock', 'Isaac Pringle', 'Brandon Roques'];

    return (
        <>
        <div id='content'>
            <div id='wrapperAbout'>
                <h2 id='title'>About Us</h2>
                <div id='devs'>
                    <strong>Meet the Devs:</strong>
                    {devs.map((dev) => <li>{dev}</li>
                    )}
                </div>
                <div id='filler'></div>
                <div>Made using React & Leaflet for JavaScript</div>
                <div>Uses the NASA EONET & GIBS APIs, OpenStreetMap API, and Google Maps API</div>
            </div>
            </div>
        </>
    )
};

export default AboutPageComponent