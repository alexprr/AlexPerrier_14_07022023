// react lib
import React from "react";

// @mui lib
import TextField from "@mui/material/TextField";

const InputField = ({label, name, onInputChange}) => {
    return (
        <TextField 
        label={label} 
        name={name} 
        onChange={onInputChange}
        size="small"
        />
    )
}

export default InputField;