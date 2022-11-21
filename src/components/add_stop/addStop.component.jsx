import './addStop.styles.scss'
import Form from 'react-bootstrap/Form';

import MultiSelectComponent from '../multiselect/multiselect.component';
import Button from 'react-bootstrap/Button';

const AddStopComponent = ({ setStopDetails, stopDetails, pickupList, setPickupList }) => {

    const passengersHandler = (e) => {
        setStopDetails({...stopDetails, "passengers": [].concat(e)})
    }

    const addStopHandler = () => {
        let temp = pickupList;
        temp.push(stopDetails)
        setPickupList([].concat(temp))
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
                                <MultiSelectComponent passengersHandler={passengersHandler} />
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