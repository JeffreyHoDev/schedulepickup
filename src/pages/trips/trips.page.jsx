import './trips.styles.scss'

import TableComponent from '../../components/table/table.component'
import { Button } from 'react-bootstrap'

const TripsPage = () => {

    const CustomActionComponent = () => {

        const customFunction = () => console.log("I am clicked!")
        return <span onClick={customFunction}>Action</span>
    }

    return (
        <>
            <div className='trips-page-container'>
                <h4>Trips</h4>
                <Button href='schedule'>Create New Trip</Button>
                <TableComponent 
                    headers={[{label: 'Index', 'field': 'index'}, {label: 'Trip Name', 'field': 'trip'}, {label: 'Description', field: 'desc'}, {label: 'Created Date', field: 'createdDate'}]}
                    data={[
                        {
                        "trip": 'School Bus Trip',
                        "desc": 'From Station to Sengkang Primary',
                        "createdDate": "10-10-2022"
                        },
                        {
                        "trip": 'Reverse School Bus Trip',
                        "desc": 'From Sengkang Primary back to Station',
                        "createdDate": "11-10-2022"
                        }
                    ]}
                    components={<CustomActionComponent/>}
                />
            </div>
        </>
    )
}

export default TripsPage