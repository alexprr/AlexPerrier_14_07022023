// react lib
import React from "react";

// @mui lib
import TextField from "@mui/material/TextField";

const InputField = ({label, name, onInputChange}) => {
    return (
        <TextField
        required
        label={label} 
        name={name} 
        onChange={onInputChange}
        size="small"
        variant="standard"
        />
    )
}

export default InputField;