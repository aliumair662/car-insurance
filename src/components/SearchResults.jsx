import React from "react";
import { useParams, useLocation } from "react-router-dom";
import SearchPlaces from './lib/GoogleWrap'
const SearchResults = () => {
    let { stateCode, countryCode, city } = useParams();
    const { state } = useLocation();
    console.log(state);
    return (<>
        <h1>Results: {countryCode} {">"} {stateCode} {">"} {city}</h1>
        <div>
            <SearchPlaces
                location={{ lat: state.latitude, lng: state.longitude }}
                countryCode={countryCode}
                stateCode={stateCode}
                city={city}
            />
        </div>

    </>);
}
export default SearchResults;