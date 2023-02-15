import React from 'react'

import './table.css'

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className='table__search'>
        <span>
            Search : {' '}
            <input value={filter || ""} onChange={e => setFilter(e.target.value)} />
        </span>
    </div>
  )
}

export default GlobalFilter