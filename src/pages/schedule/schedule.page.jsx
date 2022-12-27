import GoogleMapContainer from "../../components/GoogleMaps/GoogleMapReact"
import ScheduleBasicInfoComponent from '../../components/schedule_basic_info/schedule_basicInfo.component'
import AddStopComponent from "../../components/add_stop/addStop.component"
import PickupListComponent from "../../components/pickuplist/pickuplist.component"

import './schedule.styles.scss'

import { useState } from "react"
import { Button } from "react-bootstrap"

import { useSelector } from "react-redux"
import { getTripInfo } from '../../redux/schedule/schedule.selector'

const SchedulePage = () => {
    const colourOptions = [
        { value: "ocean", label: "Ocean" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "green", label: "Green" },
        { value: "forest", label: "Forest" },
        { value: "slate", label: "Slate" },
        { value: "silver", label: "Silver" }
    ];

    const tripInfo = useSelector(getTripInfo)
    const [mapObj, setMapObj] = useState(null)
    const [mapsObj, setMapsObj ] = useState(null)
    const [minTime, setMinTime] = useState(null)
    const [passengerList, setPassengerList] = useState(colourOptions) // get raw data
    const [optionList, setOptionList] = useState(passengerList) // set for filterable data
    const [pickupList, setPickupList] = useState([])
    // const [tripInfo, setTripInfo] = useState({
    //     "tripName": "",
    //     "description": ""
    // })
    const deleteHandler = (indexTobeDeleted) => {
        // Recover the passengers choice in optionList
        let passengersTobeRecovered = pickupList[indexTobeDeleted]["passengers"]
        let newOptionList = optionList;
        let latest = newOptionList.concat(passengersTobeRecovered)
        setOptionList([].concat(latest))

        // Filter out the one to be deleted
        let newPickupList = pickupList.filter((pickup, pickupIndex) => {
            return pickupIndex !== indexTobeDeleted
        })
        setPickupList([].concat(newPickupList))
    }

    const moveUpHandler = (indexTobeMovedUp) => {
        let reference = pickupList[indexTobeMovedUp]
        let referencePickup = reference.pickupTime
        let previous = pickupList[indexTobeMovedUp - 1]
        let previousPickup = previous.pickupTime
        reference.pickupTime = previousPickup
        previous.pickupTime = referencePickup
        let newPickupList = pickupList
        newPickupList[indexTobeMovedUp] = previous
        newPickupList[indexTobeMovedUp - 1] = reference
        setPickupList([].concat(newPickupList))
    }

    const moveDownHandler = (indexTobeMovedDown) => {
        let reference = pickupList[indexTobeMovedDown]
        let referencePickup = reference.pickupTime
        let next = pickupList[indexTobeMovedDown + 1]
        let nextPickup = next.pickupTime
        reference.pickupTime = nextPickup
        next.pickupTime = referencePickup
        let newPickupList = pickupList
        newPickupList[indexTobeMovedDown] = next
        newPickupList[indexTobeMovedDown + 1] = reference
        setPickupList([].concat(newPickupList))
    }

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
            <div className="schedule-page-container">
                <div className="schedule-page-left-column">
                    <h4>Schedule Pickups</h4>
                    <GoogleMapContainer setMapObj={setMapObj} setMapsObj={setMapsObj} mapObj={mapObj} mapsObj={mapsObj} pickupList={pickupList}/>
                    <div className="schedule-page-input-section">
                        <ScheduleBasicInfoComponent />
                        <AddStopComponent
                            pickupList={pickupList} 
                            setPickupList={setPickupList} 
                            minTime={minTime} 
                            setMinTime={setMinTime} 
                            optionList={optionList} 
                            setOptionList={setOptionList}
                        />
                    </div>
                    <Button variant="success" type="button" onClick={submitHandler} style={{width: '100%'}}>Submit Trip Template</Button>
                </div>
                <div className="schedule-page-right-column">
                    <h5>Pickup Summary</h5>
                    <p>-- Please note that <b>switching order of pickup points</b> will switch interchangeably for <b>Pick Up Time</b> as well --</p>
                    <PickupListComponent pickupList={pickupList} deleteHandler={deleteHandler} moveDownHandler={moveDownHandler} moveUpHandler={moveUpHandler}/>
                </div>
            </div>
        </>
    )
}

export default SchedulePage