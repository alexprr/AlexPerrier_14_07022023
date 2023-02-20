import React from 'react'

// @mui lib
import { TextField } from '@mui/material'

const InputNumber = ({label, name, onInputChange}) => {
    return (
        <TextField
        required 
        label={label} 
        name={name} 
        onChange={onInputChange}
        size="small"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        variant="standard"
        />
    )
}

export default InputNumber