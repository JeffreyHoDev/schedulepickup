import './guardians.styles.scss'

import TableComponent from '../../components/table/table.component'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import TrashIcon from '../../assets/trash.svg'
import EditIcon from '../../assets/icons8-edit-64.png'

import { useState } from 'react'


const GuardiansPage = () => {
    const [show, setShow] = useState(false);
    const [passengerDetails, setPassengerDetails] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const CustomActionComponent = ({ index, 
        unitData={
            'guardian': '',
            'email': '',
            'contact': '',
            'password': '',
            'confirmPassword': '',
            'passengers': ['Ken', 'Testing']
        } }) => {
        const [passengers, setPassengers] = useState(unitData.passengers)
        const [showEditModal, setShowEditModal] = useState(false)
        const [guardiansData, setGuardiansData] = useState(unitData)
        const handleEditClose = () => setShowEditModal(false);
        const handleEditShow = () => setShowEditModal(true);

        const deleteHandler = (e, index) => {
            let [...current] = passengers;
            current.splice(index, 1)
            setPassengers([].concat(current))
        }
    
        let PassengerInput = ({ index }) => {
    
            const [inputValue, setInputValue] = useState(passengers[index])
            const customInputHandler = (e, index) => {
                passengers[index] = e.target.value
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
            const [...current] = passengers
            current.push('')
            setPassengers([].concat(current))
        }

        return (
            <>
                <div className='action-group'>
                    <img className='action-group-icon' alt="edit-icon" src={EditIcon} onClick={handleEditShow} />
                    <img className='action-group-icon' alt="trash-icon" src={TrashIcon} onClick={handleEditShow} />
                </div>
                <Modal
                    show={showEditModal}
                    onHide={handleEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Edit Guardian</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='guardian-input-section'>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Guardian Username</Form.Label>
                                    <Form.Control value={guardiansData.guardian} onChange={(e) => setGuardiansData({...guardiansData, guardian: e.target.value})} type="text" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control value={guardiansData.password} onChange={(e) => setGuardiansData({...guardiansData, password: e.target.value})} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control value={guardiansData.confirmPassword} onChange={(e) => setGuardiansData({...guardiansData, confirmPassword: e.target.value})} type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={guardiansData.email} onChange={(e) => setGuardiansData({...guardiansData, email: e.target.value})} type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control value={guardiansData.contact} onChange={(e) => setGuardiansData({...guardiansData, contact: e.target.value})} type="tel" placeholder="Contact No." />
                                </Form.Group>
                            </Form>
                            <div className='add-passenger-section'>
                                <Button onClick={generatePassengerHandler}>Add Passenger</Button>
                                <div className='passenger-list-section'>
                                    {
                                        passengers.length > 0 ? (passengers.map((passenger, index) => {
                                            return <PassengerInput value={passenger} key={`input-${index}`} index={index} />
                                        })): null
                                    }
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditClose}>
                        Cancel
                    </Button>
                    <Button variant="success">Add</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

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
                    Components={CustomActionComponent}
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
                                <Form.Label>Guardian Username</Form.Label>
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