import React from 'react';
// react-table
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import GlobalFilter from './GlobalFilter';

import "./table.css";

const EmployeeTable = ({ data, columns }) => {

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      setGlobalFilter,
  } = useTable({
    columns, 
    data 
  },
  useGlobalFilter,
  useSortBy
  )

  const { globalFilter } = state

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} className='table'>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
    </table>
   </>
  )
}

export default EmployeeTable;