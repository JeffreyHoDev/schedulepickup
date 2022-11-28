import './assignment.styles.scss'

import TableComponent from '../../components/table/table.component'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

import EditIcon from '../../assets/icons8-edit-64.png'
import TrashIcon from '../../assets/trash.svg'

import { useState } from 'react'

const AssignmentPage = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const CustomActionComponent = ({ index }) => {

        const customFunction = () => console.log("I am clicked!")
        return (
        <div className='action-group'>
            <img className='action-group-icon' alt="edit-icon" src={EditIcon} onClick={customFunction} />
            <img className='action-group-icon' alt="trash-icon" src={TrashIcon} onClick={customFunction} />
        </div>
        )
    }

    return (
        <>
            <div className='assignment-page-container'>
                <h4>Assignment</h4>
                <Button onClick={handleShow}>Make New Assignment</Button>
                <div className='active-assignments-list'>
                    <h5 style={{'textDecoration': 'underline', 'color': 'green'}}>Current Active Assignment</h5>
                    <TableComponent 
                        headers={[{label: 'Index', 'field': 'index'}, {label: 'Trip Name', 'field': 'trip'}, {label: 'Description', field: 'desc'}, {label: 'Driver', field: 'driver'}, {label: 'Vehicle', field: 'vehicle'}, {label: 'Start Date', field: 'startDate'},{label: 'End Date', field: 'endDate'}]}
                        data={[
                            {
                                "trip": 'School Trip',
                                "desc": 'Trip from Station to Sengkang Primary',
                                "driver": 'John',
                                "vehicle": 'ABC1234D',
                                "startDate": "01-01-2022",
                                "endDate": "01-04-2022"
                            },
                            {
                                "trip": 'Reverse School Trip',
                                "desc": 'Trip from Sengkang Primary to Station',
                                "driver": 'John',
                                "vehicle": 'ABC1234D',
                                "startDate": "01-01-2022",
                                "endDate": "01-04-2022"
                            },
                            {
                                "trip": 'School Trip',
                                "desc": 'Trip from Station to Sengkang Primary',
                                "driver": 'Sam',
                                "vehicle": 'ABC1234D',
                                "startDate": "01-01-2022",
                                "endDate": "01-04-2022"
                            },
                        ]}
                        Components={CustomActionComponent}
                    />
                </div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    dialogClassName="modal-class"
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Assign a Trip</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='assignment-input-section'>
                            <div className='assignment-input'>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Select Trip</Form.Label>
                                        <Form.Select>
                                            <option value="1">Trip Template 1</option>
                                            <option value="2">Trip Template 2</option>
                                            <option value="3">Trip Template 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Driver</Form.Label>
                                        <Form.Select>
                                            <option value="1">Driver 1</option>
                                            <option value="2">Driver 2</option>
                                            <option value="3">Driver 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Vehicle</Form.Label>
                                        <Form.Select>
                                            <option value="1">Vehicle 1</option>
                                            <option value="2">Vehicle 2</option>
                                            <option value="3">Vehicle 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Start Date</Form.Label>
                                        <Form.Control type='date'></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>End Date</Form.Label>
                                        <Form.Control type='date'></Form.Control>
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='trip-details-summary'>
                                <h5>Preview of Selected Trip</h5>
                                <div>Name: Trip Template 1</div>
                                <div>Description: School Trip to Sengkang Primary</div>
                                <div>Pickups Details:</div>
                                <ListGroup>
                                    <div className='trip-pickups-order'>
                                        <ListGroup.Item>
                                            <p>1. Oxley Bizhub 2, 408734</p>
                                            <p>Passengers: Chong, John, Yeng</p>
                                            <p>Pickup Time: 08:00</p>
                                            <p>Remark: Something</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <p>2. Oxley Bizhub 2, 408734</p>
                                            <p>Passengers: Chong, John, Yeng</p>
                                            <p>Pickup Time: 08:00</p>
                                            <p>Remark: Something</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <p>3. Oxley Bizhub 2, 408734</p>
                                            <p>Passengers: Chong, John, Yeng</p>
                                            <p>Pickup Time: 08:00</p>
                                            <p>Remark: Something</p>
                                        </ListGroup.Item>
                                    </div>
                                </ListGroup>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success">Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default AssignmentPage