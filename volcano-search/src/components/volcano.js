import React, {useEffect} from "react";

const Volcano = () => {
        useEffect(() => {
            fetch('https://volcano.si.edu/volcano.cfm?vn=267020')
                .then(res => res.text())
                .then(data => console.log(data))
        }, [])

    return (
        <div>helloooooooo</div>
    )
}

export default Volcano