import './drivers.styles.scss'

import TableComponent from '../../components/table/table.component'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useState } from 'react'

const DriversPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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