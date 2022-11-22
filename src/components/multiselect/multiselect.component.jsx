import './multiselect.styles.scss'
import { default as ReactSelect } from "react-select";
import { useState } from 'react'

const MultiSelectComponent = ({ passengersHandler, setPassengerList, passengerList, optionList, setOptionList }) => {
    

    const handler = (passengerListDetails) => {
        passengersHandler(passengerListDetails)
        let listofvalues = passengerListDetails.map(passenger => passenger.value)
        let newList = optionList.map(option => {
            let result = listofvalues.includes(option.value)
            if(result === true){
                return null
            }else {
                return option
            }
        })
        let cleanedList = newList.filter(item => item !== null)
        setOptionList([].concat(cleanedList))
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
                />
            </div>

        </>
    )
}

export default MultiSelectComponent