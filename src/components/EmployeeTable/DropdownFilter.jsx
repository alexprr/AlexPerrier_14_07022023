import React from 'react'

import Dropdown from "./Dropdown";

const DropdownFilter = ({ pageSize, setPageSize }) => {
  return (
    <div className="select">
      <Dropdown pageSize={pageSize} setPageSize={setPageSize} />
    </div>
  )
}

export default DropdownFilter