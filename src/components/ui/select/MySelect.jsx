import React from "react";


const MySelect = ({options, defaultValue, ...props}) => {
    return (
        <select {...props}>
            <option value="" disabled>{defaultValue}</option>
            {options.map(option => 
                <option
                  key={option.value} 
                  value={option.value}
                >{option.name}</option>
            )}
        </select>
    )
};

export default MySelect;
