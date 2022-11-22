import GoogleMapContainer from "../../components/GoogleMaps/GoogleMapReact"
import ScheduleBasicInfoComponent from '../../components/schedule_basic_info/schedule_basicInfo.component'
import AddStopComponent from "../../components/add_stop/addStop.component"
import PickupListComponent from "../../components/pickuplist/pickuplist.component"

import './schedule.styles.scss'

import { useState } from "react"
import { Button } from "react-bootstrap"

const SchedulePage = () => {
    const [mapObj, setMapObj] = useState(null)
    const [mapsObj, setMapsObj ] = useState(null)

    const [pickupList, setPickupList] = useState([])

    const [tripInfo, setTripInfo] = useState({
        "tripName": "",
        "description": ""
    })

    const submitHandler = () => {
        // Check trip name is not empty and pickuplist is not empty
        if(tripInfo.tripName === "" || pickupList.length === 0){
            alert("Trip Name and Pickup list shouldn't be empty")
        }else if(pickupList.length < 2){
            alert("Pick up list should have more than 2 pick up points")
        }
    }



    return (
        <>
            <h3>Schedule Pickups</h3>
            <div className="schedule-page-container">
                <div className="schedule-page-left-column">
                    <GoogleMapContainer setMapObj={setMapObj} setMapsObj={setMapsObj} mapObj={mapObj} mapsObj={mapsObj} pickupList={pickupList}/>
                    <div className="schedule-page-input-section">
                        <ScheduleBasicInfoComponent setTripInfo={setTripInfo} tripInfo={tripInfo}/>
                        <AddStopComponent pickupList={pickupList} setPickupList={setPickupList}/>
                    </div>
                    <Button variant="success" type="button" onClick={submitHandler} style={{width: '100%'}}>Submit Trip Template</Button>
                </div>
                <div className="schedule-page-right-column">
                    <h5>Pickup Summary</h5>
                    <PickupListComponent pickupList={pickupList}/>
                </div>
            </div>
        </>
    )
}

export default SchedulePage