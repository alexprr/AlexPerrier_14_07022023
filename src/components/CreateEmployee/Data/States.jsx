import React from 'react'

// @mui lib
import MenuItem from "@mui/material/MenuItem";

// USA states data
import { states } from "../../../utils/constants";

const States = () => {
  return (
    <>
        {states.map((state) => (
            <MenuItem 
            key={state.abbreviation} 
            value={state.abbreviation}
            >
                {state.name}
            </MenuItem>
        ))}
    </>
  )
}

export default States