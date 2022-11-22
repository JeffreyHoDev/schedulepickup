import './addStop.styles.scss'
import Form from 'react-bootstrap/Form';

import MultiSelectComponent from '../multiselect/multiselect.component';
import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react'

const AddStopComponent = ({ pickupList, setPickupList }) => {
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
    const [passengerList, setPassengerList] = useState(colourOptions)
    const [optionList, setOptionList] = useState(passengerList)

    const [stopDetails, setStopDetails] = useState({
        "locationName": "",
        "passengers": [],
        "postalCode": 0,
        "pickupTime": "",
        "remark": ""
    })
    
    const [minTime, setMinTime] = useState(null)

    useEffect(() => {
        if(pickupList.length > 0){
            let latestTime = pickupList[pickupList.length-1]["pickupTime"]
            setMinTime(latestTime)
        }
    }, [pickupList])

    const passengersHandler = (e) => {
        setStopDetails({...stopDetails, "passengers": [].concat(e)})
    }

    const addStopHandler = () => {
        const run = async() => {
            if(stopDetails.postalCode < 100000 || stopDetails.postalCode > 999999){
                alert("Invalid postal code") 
            }else if(stopDetails.pickupTime <= minTime){
                alert("Pick time later than previous stop")
            }else if(stopDetails.passengers.length === 0){
                alert("Please select at least one student")
            }
             else {
                let response = await fetch(`https://addressvalidation.googleapis.com/v1:validateAddress?key=${process.env.REACT_APP_GOOGLE_API_KEY}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "address": {
                            "regionCode": "SG",
                            "postalCode": stopDetails.postalCode,
                            "addressLines": [stopDetails.locationName]
                        }
                    })
                })

                let data = await response.json()
                let results = data.result.address.unconfirmedComponentTypes;
                let location = data.result.geocode.location
                if(results.includes('postal_code') || results.includes('locality')){
                    alert("Something wrong with the address. Please check again")
                }else {
                    let temp = pickupList;
                    stopDetails.lat = location.latitude;
                    stopDetails.lng = location.longitude;
                    temp.push(stopDetails)
                    setPickupList([].concat(temp))
                }
                // let response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${stopDetails.locationName}+${stopDetails.postalCode}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
                // let result = await response.json()
                // if(result.status === 'OK'){
                //     let temp = pickupList;
                //     temp.push(stopDetails)
                //     setPickupList([].concat(temp))
                // }
                // else {
                //     alert("Something wrong with the address. Please check again")
                // }     
            }
        }
        
        run()
        

    }

    return (
        <>
            <div className='add_stop_component'>
                <h6>Pickup Info</h6>
                <p>-- Add at least two pickup points first before submit --</p>
                <Form>
                    <div className='add_stop_form_container'>
                        <div className='add_stop_left_column'>
                            <Form.Group className="mb-3">
                                <Form.Label>Pickup Location Name</Form.Label>
                                <Form.Control type="text" placeholder="Eg. Oxley Bizhub 2" onChange={(e) => setStopDetails({...stopDetails, "locationName": e.target.value})}  />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control type="number" placeholder="Eg. 408734" onChange={(e) => setStopDetails({...stopDetails, "postalCode": e.target.value})}  />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Pickup Time</Form.Label><br/>
                                <input type="time" onChange={(e) => setStopDetails({...stopDetails, "pickupTime": e.target.value})} />
                            </Form.Group>
                        </div>
                        <div className='add_stop_right_column'>
                            <Form.Group>
                                <Form.Label>Passengers</Form.Label>
                                <MultiSelectComponent setPassengerList={setPassengerList} passengersHandler={passengersHandler} colourOptions={colourOptions} passengerList={passengerList} setOptionList={setOptionList} optionList={optionList}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="stop_remark">Remark</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    id="stop_remark"
                                    onChange={(e) => setStopDetails({...stopDetails, "remark": e.target.value})} 
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Button variant="primary" onClick={addStopHandler}>Add Stop</Button>
                </Form>
            </div>
        </>
    )
}

export default AddStopComponent