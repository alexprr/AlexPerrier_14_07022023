import React from 'react'

const DropdownFilter = ({ pageSize, setPageSize }) => {
  return (
    <div className="select">
      <select 
      id='standard-select'
      value={pageSize} 
      onChange={e => setPageSize(Number(e.target.value))}>
        {
          [10, 25, 50, 100].map(pageSize => (
            <option key={pageSize} value={pageSize}>
            Show {pageSize}
            </option>
          ))
        }
      </select>
      <span className="focus"></span>
    </div>
  )
}

export default DropdownFilter