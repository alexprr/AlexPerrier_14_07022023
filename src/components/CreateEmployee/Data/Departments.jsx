import React from 'react'

// @mui lib
import MenuItem from "@mui/material/MenuItem";

// departments data
import { departments } from '../../../utils/constants'

const Departments = () => {
  return (
    <>
        {departments.map((department) => (
            <MenuItem 
            key={department.abbreviation} 
            value={department.name}
            >
                {department.name}
            </MenuItem>
        ))}
    </>
  )
}

export default Departments