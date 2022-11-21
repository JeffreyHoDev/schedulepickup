import './multiselect.styles.scss'
import { components } from "react-select";
import { default as ReactSelect } from "react-select";

import { useState } from 'react'


// value and label must be there
export const colourOptions = [
    { value: "ocean1", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" }
];

const Option = (props) => {
    return (
        <div>
          <components.Option {...props}>
            <input
              type="checkbox"
              checked={props.isSelected}
              onChange={() => null}
            />{" "}
            <label>{props.label}</label>
          </components.Option>
        </div>
    );
}

const MultiValue = props => (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
);

const MultiSelectComponent = ({ passengersHandler }) => {
    const [selected, setSelected] = useState(null)

    const handleChange = (e) => {
        setSelected(e)
        passengersHandler(e)
    }

    return (
        <>
            <div className='multi-select-component'>
                <ReactSelect  
                    options={colourOptions}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={true}
                    components={{
                        Option, MultiValue
                    }}
                    onChange={handleChange}
                    value={selected}
                />
            </div>
        </>
    )
}

export default MultiSelectComponent