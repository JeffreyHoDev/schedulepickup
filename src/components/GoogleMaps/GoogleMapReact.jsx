import GoogleMapReact from 'google-map-react';
import './map.css'

const GoogleMapContainer = ({ setMapObj, setMapsObj }) => {

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
                    key: "AIzaSyDr5VKsAqZqgN8zfppjow65NxlgfiB8pds", 
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
            </GoogleMapReact>
            

        </div>

    )
}

export default GoogleMapContainer