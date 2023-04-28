import React from "react";
import { State } from 'country-state-city';
import { Link } from "react-router-dom";
const States = () => {
    const states = State.getStatesOfCountry('US')
    return (<>
        <h1>USA, States</h1>
        <div>
            <div className="grid">
                {states.map((i, index) =>
                (<div key={index}>
                    <Link to={`/cities/${i.countryCode}/${i.isoCode}`} className="box">{i.name}</Link>
                </div>)
                )}
            </div>
        </div>

    </>);
}

export default States;