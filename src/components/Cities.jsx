import React from "react";
import { Link, useParams } from "react-router-dom";
import { City, State } from 'country-state-city';
const Cities = () => {
    let { stateCode, countryCode } = useParams();
    const { name: StateName } = State.getStateByCodeAndCountry(stateCode, countryCode);
    const cities = City.getCitiesOfState(countryCode, stateCode);
    return (<>
        <h1>{StateName}, Cities</h1>
        <div>
            <div className="grid-2">
                {cities.map((i, index) =>
                (<div key={index}>
                    <Link to={`/${i.countryCode}/${i.stateCode}/${i.name}/car-insurance`} state={{ latitude:+i.latitude,longitude:+i.longitude }} className="box">{i.name}</Link>
                </div>)
                )}
            </div>
        </div>

    </>);
}

export default Cities;