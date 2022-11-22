import LocationPin from '../../assets/icons8-location-pin-49.png'
import './marker.scss'

import { useState } from 'react'

const Marker = ({ pickup, order }) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <>
            
            <div className='marker' onClick={() => setShowInfo(!showInfo)}>
                <div className='icon'>
                    <img src={LocationPin} alt="marker"/>
                    <h1 className='icon-order'>{order}</h1>
                </div>
                { showInfo ? (
                    <div className='marker-message'>
                        <p>{`${order}. ${pickup.locationName}, ${pickup.postalCode} Singapore`}</p>
                        <p>{`Pickup Time: ${pickup.pickupTime}`}</p>
                    </div>
                ): null}
            </div>
        </>
    )
}
export default Marker