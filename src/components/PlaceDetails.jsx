import React, { useEffect, useState } from 'react';
import { Map, Marker } from 'google-maps-react';

function PlaceDetails(props) {
    const [place, setPlace] = useState(null);
    const [location, setLocation] = useState('');
    useEffect(() => {
        const request = {
            placeId: props.placeId,
            // fields: ['name', 'formatted_address', 'formatted_phone_number', 'opening_hours', 'website','reviews'],
            key: process.env.REACT_APP_API_KEY,
        };

        const service = new window.google.maps.places.PlacesService(document.createElement('div'));

        service.getDetails(request, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                console.log(place.geometry.location);
                setPlace(place);
                setLocation(place.geometry.location);
            }
        });
    }, []);

    return (
        <div style={{ display: 'flex',alignItems:'baseline' }}>
            <div style={{ width: "40%" }} className='place-details__box'>
                {place && (
                    <div>
                        <h2>{place.name}</h2>
                        <p>{place.formatted_address}</p>
                        <p>{place.formatted_phone_number}</p>
                        {place.opening_hours && (
                            <div>
                                <h3>Opening Hours</h3>
                                <ul>
                                    {place.opening_hours.weekday_text.map((day, index) => (
                                        <li key={index}>{day}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <p><b>Rating: {place.rating}</b></p>
                        <h2>Reviews</h2>
                        {place.reviews && place.reviews.map(review => (
                            <div key={review.author_name}>
                                <h3>{review.author_name}</h3>
                                <p>{review.text}</p>
                            </div>
                        ))}
                        {place.website && (
                            <div>
                                <h3>Website</h3>
                                <a href={place.website} target="_blank" rel="noreferrer">{place.website}</a>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div style={{ width: "50%",marginLeft:'4rem' }} className='map-container'>
                <Map google={window.google} zoom={14} center={location || { lat: 37.7749, lng: -122.4194 }} style={{ width: '700px' }}>
                    {location && <Marker position={location} />}
                </Map>
            </div>
        </div>
    );
}

export default PlaceDetails;
