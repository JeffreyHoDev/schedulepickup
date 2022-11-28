import './trips.styles.scss'

import TableComponent from '../../components/table/table.component'
import { Link } from 'react-router-dom'

import EditIcon from '../../assets/icons8-edit-64.png'
import TrashIcon from '../../assets/trash.svg'

const TripsPage = () => {

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
            <div className='trips-page-container'>
                <h4>Trips</h4>
                <Link to="/schedule">Create New Trip</Link>
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
                    Components={CustomActionComponent}
                />
            </div>
        </>
    )
}

export default TripsPage