// react lib
import React from "react";

// @mui lib
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const SelectField = ({label, name, onInputChange, data}) => {
    return (
        <TextField
        required 
        select
        label={label} 
        name={name} 
        onChange={onInputChange}
        size="small"
        variant="standard"
        >
            {data?.map((option) => (
                <MenuItem 
                key={option.abbreviation} 
                value={option.abbreviation}
                >
                    {option.name}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default SelectField;