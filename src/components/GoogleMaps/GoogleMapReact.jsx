import GoogleMapReact from 'google-map-react';
import './map.css'

import Marker from '../mapMarker/mapmarker.component';

const GoogleMapContainer = ({ setMapObj, setMapsObj, pickupList, mapObj, mapsObj }) => {


    const defaultProps = {
        center: {
          lat: 1.290270,
          lng: 103.851959
        },
        zoom: 11
    };

    return (
        <div className='map-container'>
            <GoogleMapReact 
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_API_KEY, 
                    language: 'en'
                }}
                defaultZoom={defaultProps.zoom} 
                defaultCenter={defaultProps.center} 
                yesIWantToUseGoogleMapApiInternals={true} 
                onGoogleApiLoaded={({ map, maps }) => {
                    setMapObj(map)
                    setMapsObj(maps)
                }}
            >
                {
                    pickupList.map((pickup, index) => {
                        return <Marker key={`pickup-marker-${index}`} lat={pickup.lat} order={index+1} lng={pickup.lng} pickup={pickup}/>
                    })
                }
            </GoogleMapReact>
            

        </div>

    )
}

export default GoogleMapContainer