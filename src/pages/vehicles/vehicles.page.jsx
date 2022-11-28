import './vehicles.styles.scss'

import TableComponent from '../../components/table/table.component'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import EditIcon from '../../assets/icons8-edit-64.png'
import TrashIcon from '../../assets/trash.svg'

import { useState } from 'react'

const VehiclesPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const CustomActionComponent = ({ index, 
        unitData={
            'vehicle': '',
            'remark': ''
        } }) => {

        const [showEditModal, setShowEditModal] = useState(false)
        const [vehicleData, setVehicleData] = useState(unitData)
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
                    <Modal.Title>Add a Vehicle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='vehicle-input-section'>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Vehicle Plate</Form.Label>
                                    <Form.Control value={vehicleData.vehicle} onChange={(e) => setVehicleData({...vehicleData, vehicle: e.target.value})} type="text" placeholder="Enter vehicle plate" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Vehicle Remark</Form.Label>
                                    <Form.Control value={vehicleData.remark} onChange={(e) => setVehicleData({...vehicleData, remark: e.target.value})} as="textarea" row={3} placeholder="Brief description" />
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
                                <Form.Label>Vehicle Remark</Form.Label>
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