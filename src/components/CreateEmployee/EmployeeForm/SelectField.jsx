// react lib
import React from "react";

// @mui lib
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const SelectField = ({label, name, onInputChange, children}) => {
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
            {children}
        </TextField>
    )
}

export default SelectField;