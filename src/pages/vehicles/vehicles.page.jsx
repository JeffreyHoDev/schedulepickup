import './vehicles.styles.scss'

import TableComponent from '../../components/table/table.component'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useState } from 'react'

const VehiclesPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const CustomActionsComponent = () => {
        const customFunction = () => {
            console.log('Daaaamn~')
        }
        return <span onClick={customFunction}>Other Action</span>
    }

    return (
        <>
            <div className='vehicles-page-container'>
                <h4>Vehicles</h4>
                <Button onClick={handleShow}>Add a Vehicle</Button>
                <TableComponent 
                    headers={[{label: 'Index', 'field': 'index'}, {label: 'Vehicle Plate', 'field': 'vehicle'}, {label: 'Created Date', field: 'createdDate'}, {label: 'Remark', field: 'remark'}]}
                    data={[
                        {
                        "vehicle": 'ABC1234D',
                        "createdDate": '10-10-2022',
                        "remark": 'This will be repaired soon'
                        },
                        {
                        "vehicle": 'WXY1234Z',
                        "createdDate": '11-11-2022',
                        "remark": "Will be scraped on 12-12-2022"
                        }
                    ]} 
                    components={<CustomActionsComponent />}
                />
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add a Vehicle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='vehicle-input-section'>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Vehicle Plate</Form.Label>
                                <Form.Control type="text" placeholder="Enter vehicle plate" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Vehicle Plate</Form.Label>
                                <Form.Control as="textarea" row={3} placeholder="Brief description" />
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

export default VehiclesPage