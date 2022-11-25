import './guardians.styles.scss'

import TableComponent from '../../components/table/table.component'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import TrashIcon from '../../assets/trash.svg'

import { useState } from 'react'


const GuardiansPage = () => {
    const [show, setShow] = useState(false);
    const [passengerDetails, setPassengerDetails] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteHandler = (e, index) => {
        let [...current] = passengerDetails;
        current.splice(index, 1)
        setPassengerDetails(current)
    }

    let PassengerInput = ({ index }) => {

        const [inputValue, setInputValue] = useState(passengerDetails[index])
        const customInputHandler = (e, index) => {
            passengerDetails[index] = e.target.value
            setInputValue(e.target.value) // To cause previous retrigger, or else when user typing it wont display on input element
        }

        return (
            <div className='passenger-input-actions-section'>
                <input type="text" value={inputValue} onChange={(e) => customInputHandler(e, index)} placeholder="Passenger name"/>
                <img style={{cursor: 'pointer'}}src={TrashIcon} alt="remove-icon" onClick={(e) => deleteHandler(e, index)} />
            </div>
        )
    }

    const generatePassengerHandler = () => {
        const [...current] = passengerDetails
        current.push('')
        setPassengerDetails([].concat(current))
    }

    return (
        <>
            <div className='guardians-page-container'>
                <h4>Guardians</h4>
                <Button onClick={handleShow}>Add a Guardian</Button>
                <TableComponent 
                    headers={[{label: 'Index', 'field': 'index'}, {label: 'Guardian Name', 'field': 'guardian'}, {label: 'Email', field: 'email'}, {label: 'Passengers', field: 'passengers'}]}
                    data={[
                        {
                        "guardian": 'John',
                        "email": 'john@hotmail.com',
                        "passengers": 'John, Damn, You'
                        },
                        {
                        "guardian": 'John',
                        "email": 'john@hotmail.com',
                        "passengers": 'Sui, Siao, Yeng'
                        }
                    ]}
                />
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add a Guardian</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='guardian-input-section'>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Guardian Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="tel" placeholder="Contact No." />
                            </Form.Group>
                        </Form>
                        <div className='add-passenger-section'>
                            <Button onClick={generatePassengerHandler}>Add Passenger</Button>
                            <div className='passenger-list-section'>
                                {
                                    passengerDetails.length > 0 ? (passengerDetails.map((passenger, index) => {
                                        return <PassengerInput key={`input-${index}`} index={index} />
                                    })): null
                                }
                            </div>
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
        </>
    )
}

export default GuardiansPage