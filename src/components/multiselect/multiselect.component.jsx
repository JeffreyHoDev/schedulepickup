import './multiselect.styles.scss'
import { default as ReactSelect } from "react-select";
import { useSelector } from 'react-redux';
import { selectPassengers } from '../../redux/addStop/addStop.selector'

const MultiSelectComponent = ({ passengersHandler, optionList }) => {
    
    const handler = (passengerListDetails) => {
        passengersHandler(passengerListDetails)
    }
    const passengers = useSelector(selectPassengers)

    return (
        <>
            <div className="multi-select">
                <ReactSelect
                    options={optionList}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={true}
                    onChange={(selected) => handler(selected)}
                    className="multiple-select"
                    value={passengers} 
                />
            </div>

        </>
    )
}

export default MultiSelectComponent