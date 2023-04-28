import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import RatingStars from '../utils/RatingStars';
import { Link } from 'react-router-dom';

const SearchPlaces = ({ google, countryCode, stateCode, city, location }) => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        searchPlaces();
    }, []);

    const searchPlaces = () => {
        const { lat, lng } = location;
        const request = {
            location: { lat, lng },
            radius: 10000,
            query: 'car-insurance',
            fields: ['name', 'geometry', 'place_id'],
            componentRestrictions: {
                country: countryCode,
                administrativeArea: stateCode,
                locality: city
            }
        };

        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                setPlaces(results);
            }
        });
    }
    return (
        <div className='info-box'>
            {places.map(place => (
                <div key={place.place_id} className='info-box__child'>
                    <Link to={`/${place.name}/${place.place_id}`} className='link-anchor'>
                        <div>
                            <img src={place.photos ? `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${place.geometry.location.lat()},${place.geometry.location.lng()}&key=${process.env.REACT_APP_API_KEY}` : ''} alt="icon" />
                        </div>
                        <div>
                            <p>{place.name}</p>
                            <div className='rating-info'>
                                <div>
                                    <RatingStars rating={place.rating} maxRating={5} />
                                    <span>{place.rating}</span>
                                </div>
                                <div>
                                    <span>{place.user_ratings_total} Reviews</span>
                                </div>
                            </div>
                            <div>
                                <p>{place.formatted_address}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
})(SearchPlaces);




