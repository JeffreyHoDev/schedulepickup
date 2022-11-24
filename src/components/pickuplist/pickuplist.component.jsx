import './pickuplist.styles.scss'

import ListGroup from 'react-bootstrap/ListGroup';
import UpArrow from '../../assets/arrow-up-short.svg'
import DownArrow from '../../assets/arrow-down-short.svg'
import TrashIcon from '../../assets/trash.svg'

const PickupListComponent = ({ pickupList, deleteHandler, moveUpHandler, moveDownHandler }) => {
    return (
        <>
            <ListGroup as="ul">
                {
                    pickupList.length > 0 ? (
                        pickupList.map((pickup, index) => {
                            return (
                                <ListGroup.Item as="li" key={`listgroup-item-${index}`}>
                                    <div className='pickup-detail'>
                                        <div className='info-section'>
                                            <p>{`${index+1}. Location: ${pickup.locationName}, ${pickup.postalCode}`}</p>
                                            <p>{`Passengers: ${pickup.passengers.map((passenger, subIndex) => `${passenger.value}`)}`}</p>
                                            <p>{`Pickup Time: ${pickup.pickupTime}`}</p>
                                            <p>{`Remark: ${pickup.remark}`}</p>
                                        </div>
                                        <div className='action-section'>
                                            <img src={TrashIcon} onClick={() => deleteHandler(index)} alt="trash-icon"/>
                                            {index === 0 ? null : <img onClick={() => moveUpHandler(index)} src={UpArrow} alt="up-arrow"/>}
                                            {index === pickupList.length - 1 ? null : <img onClick={() => moveDownHandler(index)} src={DownArrow} alt="down-arrow"/>}
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