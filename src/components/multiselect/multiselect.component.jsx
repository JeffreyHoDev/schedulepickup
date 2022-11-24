import './multiselect.styles.scss'
import { default as ReactSelect } from "react-select";

const MultiSelectComponent = ({ passengers, passengersHandler, optionList }) => {
    
    const handler = (passengerListDetails) => {
        passengersHandler(passengerListDetails)
    }

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