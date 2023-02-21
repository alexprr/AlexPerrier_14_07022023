// react lib
import React from "react";

// @mui lib
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Dropdown = ({label, name, pageSize, setPageSize}) => {
    return (
        <TextField
        required 
        select
        value={pageSize}
        label={label} 
        name={name} 
        size="small"
        variant="standard"
        onChange={e => setPageSize(Number(e.target.value))}
        >
            {
                [10, 25, 50, 100].map(pageSize => (
                <MenuItem key={pageSize} value={pageSize}>
                Show {pageSize}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default Dropdown;