import './addStop.styles.scss'
import Form from 'react-bootstrap/Form';

import MultiSelectComponent from '../multiselect/multiselect.component';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAddStopDetails } from '../../redux/addStop/addStop.selector'
import { updateLocationName, updatePassengers, updatePickupTime, updatePostalCode, updateRemark, clearStopDetails } from '../../redux/addStop/addStop.action'

const AddStopComponent = ({ pickupList, setPickupList, setMinTime, minTime, optionList, setOptionList }) => {

    const dispatch = useDispatch()
    const stopDetails = useSelector(selectAddStopDetails)

    const [isAddingStop, setIsAddingStop] = useState(false)
    // const [stopDetails, setStopDetails] = useState({
    //     "locationName": "",
    //     "passengers": [],
    //     "postalCode": 0,
    //     "pickupTime": "",
    //     "remark": ""
    // })


    useEffect(() => {
        if(pickupList.length > 0){
            let latestTime = pickupList[pickupList.length-1]["pickupTime"]
            setMinTime(latestTime)
        }
    }, [pickupList])

    const passengersHandler = (e) => {
        // setStopDetails({...stopDetails, "passengers": [].concat(e)})
        console.log(e)
        dispatch(updatePassengers(e))
    }

    const addStopHandler = () => {
        const run = async() => {
            if(stopDetails.postalCode < 100000 || stopDetails.postalCode > 999999){
                alert("Invalid postal code") 
            }else if(stopDetails.pickupTime <= minTime){
                alert("Pick time later than previous stop")
            }else if(stopDetails.passengers.length === 0){
                alert("Please select at least one student")
            }else {
                try {
                    setIsAddingStop(() => true)
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
                    let results = data.result.address.unconfirmedComponentTypes || []; // Because it doesn't always exist
                    let location = data.result.geocode.location
                    if(results.includes('postal_code') || results.includes('locality')){
                        alert("Something wrong with the address. Please check again")
                        setIsAddingStop(() => false)
                    }else {
                        let temp = pickupList;
                        stopDetails.lat = location.latitude;
                        stopDetails.lng = location.longitude;
                        temp.push(stopDetails)
    
                        // Resetting fields
                        let listofvalues = stopDetails.passengers.map(passenger => passenger.value)
                        let newList = optionList.map(option => {
                            let result = listofvalues.includes(option.value)
                            if(result === true){
                                return null
                            }else {
                                return option
                            }
                        })
                        let cleanedList = newList.filter(item => item !== null)
                        setOptionList([].concat(cleanedList))
                        
                        setPickupList(() => {
                            return [].concat(temp)
                        })
                        // setStopDetails(() => {
                        //     return {
                        //         "locationName": "",
                        //         "passengers": [],
                        //         "postalCode": 0,
                        //         "pickupTime": "",
                        //         "remark": ""
                        //     }
                        // })
                        dispatch(clearStopDetails())
                        setMinTime(() => null)
                        setIsAddingStop(() => false)
                    }
                }catch(err){
                    alert(err)
                    setIsAddingStop(() => true)
                }
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
                                <Form.Control type="text" value={stopDetails.locationName} placeholder="Eg. Oxley Bizhub 2" onChange={(e) => dispatch(updateLocationName(e.target.value))}  />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control type="number" value={stopDetails.postalCode} placeholder="Eg. 408734" onChange={(e) => dispatch(updatePostalCode(e.target.value))}  />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Pickup Time</Form.Label><br/>
                                <input type="time" value={stopDetails.pickupTime} onChange={(e) => dispatch(updatePickupTime(e.target.value))} />
                            </Form.Group>
                        </div>
                        <div className='add_stop_right_column'>
                            <Form.Group>
                                <Form.Label>Passengers</Form.Label>
                                <MultiSelectComponent passengers={stopDetails.passengers} passengersHandler={passengersHandler} optionList={optionList}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="stop_remark">Remark</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    id="stop_remark"
                                    onChange={(e) => dispatch(updateRemark(e.target.value))} 
                                    value={stopDetails.remark}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Button variant="primary" onClick={addStopHandler} disabled={isAddingStop}>        
                        {isAddingStop ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : null}
                        Add Next Pickup
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default AddStopComponent