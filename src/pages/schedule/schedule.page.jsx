import GoogleMapContainer from "../../components/GoogleMaps/GoogleMapReact"
import ScheduleBasicInfoComponent from '../../components/schedule_basic_info/schedule_basicInfo.component'
import AddStopComponent from "../../components/add_stop/addStop.component"

import './schedule.styles.scss'

import { useState } from "react"
import { Button } from "react-bootstrap"
import PickupListComponent from "../../components/pickuplist/pickuplist.component"

const SchedulePage = () => {
    const [mapObj, setMapObj] = useState(null)
    const [mapsObj, setMapsObj ] = useState(null)

    const [pickupList, setPickupList] = useState([])

    const [tripInfo, setTripInfo] = useState({
        "tripName": "",
        "description": ""
    })

    const [stopDetails, setStopDetails] = useState({
        "locationName": "",
        "passengers": [],
        "postalCode": 0,
        "pickupTime": "",
        "remark": ""
    })



    return (
        <>
            <h3>Schedule Pickups</h3>
            <div className="schedule-page-container">
                <div className="schedule-page-left-column">
                    <GoogleMapContainer setMapObj={setMapObj} setMapsObj={setMapsObj} stopDetails={stopDetails}/>
                    <div className="schedule-page-input-section">
                        <ScheduleBasicInfoComponent setTripInfo={setTripInfo} tripInfo={tripInfo}/>
                        <AddStopComponent setStopDetails={setStopDetails} stopDetails={stopDetails} pickupList={pickupList} setPickupList={setPickupList}/>
                    </div>
                    <Button variant="success" type="button" style={{width: '100%'}}>Submit Trip Template</Button>
                </div>
                <div className="schedule-page-right-column">
                    <h5>Pickup Summary</h5>
                    <PickupListComponent stopDetails={stopDetails} setStopDetails={setStopDetails} pickupList={pickupList}/>
                </div>
            </div>
        </>
    )
}

export default SchedulePage