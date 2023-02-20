// react lib
import React from "react";

// @mui lib
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

// USA states data
import { states } from "../../../utils/constants";

const SelectField = ({label, name, onInputChange}) => {
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
            {states.map((state) => (
                <MenuItem 
                key={state.abbreviation} 
                value={state.abbreviation}
                >
                    {state.name}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default SelectField;