import './drivers.styles.scss'

import TableComponent from '../../components/table/table.component'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useState } from 'react'

import EditIcon from '../../assets/icons8-edit-64.png'
import TrashIcon from '../../assets/trash.svg'

const DriversPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const CustomActionComponent = ({ index, 
        unitData={
            'driver': '',
            'email': '',
            'contact': '',
            'password': '',
            'confirmPassword': '',
        } }) => {

        const [showEditModal, setShowEditModal] = useState(false)
        const [driverData, setDriverData] = useState(unitData)
        const handleEditClose = () => setShowEditModal(false);
        const handleEditShow = () => setShowEditModal(true);

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
                    <Modal.Title>Add a Driver</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='driver-input-section'>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Driver Name</Form.Label>
                                    <Form.Control value={driverData.driver} onChange={(e) => setDriverData({...driverData, driver: e.target.value})} type="text" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control value={driverData.password} onChange={(e) => setDriverData({...driverData, password: e.target.value})} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control value={driverData.confirmPassword} onChange={(e) => setDriverData({...driverData, confirmPassword: e.target.value})} type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={driverData.email} onChange={(e) => setDriverData({...driverData, email: e.target.value})} type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control value={driverData.contact} onChange={(e) => setDriverData({...driverData, contact: e.target.value})} type="tel" placeholder="Contact No." />
                                </Form.Group>
                            </Form>
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

    return (
        <>
            <div className='drivers-page-container'>
                <h4>Drivers</h4>
                <Button onClick={handleShow}>Add a Driver</Button>
                <TableComponent 
                    headers={[{label: 'Index', 'field': 'index'}, {label: 'Driver Name', 'field': 'driver'}, {label: 'Email', field: 'email'}]}
                    data={[
                        {
                        "driver": 'John',
                        "email": 'john@hotmail.com'
                        },
                        {
                        "driver": 'John',
                        "email": 'john@hotmail.com'
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
                <Modal.Title>Add a Driver</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='driver-input-section'>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Driver Name</Form.Label>
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

export default DriversPage