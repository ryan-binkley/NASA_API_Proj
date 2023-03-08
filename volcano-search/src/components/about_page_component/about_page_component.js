import './aboutPageComponent.css';


function AboutPageComponent() {

    let devs = ['Peter Alkumeidy', 'Ryan Binkley', 'Tyler Hancock', 'Isaac Pringle', 'Brandon Roques'];

    return (
        <>
            <div id='wrapperAbout'>
                <h3 id='title'>About Us</h3>
                <div id='devs'>
                    Meet the Devs:
                    {devs.map((dev) => <li>{dev}</li>
                    )}
                </div>
                <div>Made using React & Leaflet for JavaScript</div>
                <div>Uses the NASA EONET API</div>
            </div>
        </>
    )

};




export default AboutPageComponent