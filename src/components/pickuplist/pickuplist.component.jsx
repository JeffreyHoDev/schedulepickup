import './pickuplist.styles.scss'

import ListGroup from 'react-bootstrap/ListGroup';
import UpArrow from '../../assets/arrow-up-short.svg'
import DownArrow from '../../assets/arrow-down-short.svg'
import TrashIcon from '../../assets/trash.svg'

const PickupListComponent = ({ pickupList }) => {
    return (
        <>
            <ListGroup as="ul">
                {
                    pickupList.length > 0 ? (
                        pickupList.map((pickup, index) => {
                            return (
                                <ListGroup.Item as="li">
                                    <div className='pickup-detail'>
                                        <div className='info-section'>
                                            <p>{`${index+1}. Location: ${pickup.locationName}, ${pickup.postalCode}`}</p>
                                            <p>{`Passengers: ${pickup.passengers.map((passenger, subIndex) => `${passenger.value}`)}`}</p>
                                            <p>{`Pickup Time: ${pickup.pickupTime}`}</p>
                                            <p>{`Remark: ${pickup.remark}`}</p>
                                        </div>
                                        <div className='action-section'>
                                            <img src={TrashIcon} alt="trash-icon"/>
                                            <img src={DownArrow} alt="down-arrow"/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            )
                        })
                    ): null
                }
            </ListGroup>
        </>
    )
}

export default PickupListComponent