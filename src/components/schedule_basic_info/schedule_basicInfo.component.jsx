import './schedule_basicInfo.styles.scss'
import Form from 'react-bootstrap/Form';

const ScheduleBasicInfoComponent = ({ setTripInfo, tripInfo }) => {
    return (
        <>
            <div className='schedule-basicInfo-component'>
                <h6>Basic Info</h6>
                <div className='input'>
                    <Form.Label htmlFor="trip_name">Trip Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="trip_name"
                        aria-describedby="trip_help_block"
                        onChange={(e) => setTripInfo({...tripInfo, "tripName": e.target.value})}
                    />
                    <Form.Text id="trip_help_block" muted>
                        This will be the name of the template
                    </Form.Text>
                </div>
                <div className='input'>
                    <Form.Label htmlFor="trip_description">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={2}
                        id="trip_description"
                        aria-describedby="trip_description_help_block"
                        onChange={(e) => setTripInfo({...tripInfo, "description": e.target.value})}
                    />
                    <Form.Text id="trip_description_help_block" muted>
                        Description to explain about the trip
                    </Form.Text>
                </div>
            </div>
        </>
    )
}

export default ScheduleBasicInfoComponent