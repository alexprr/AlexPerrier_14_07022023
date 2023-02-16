import React from 'react';
// react-table
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from './GlobalFilter';
import DropdownFilter from './DropdownFilter';

import "./table.css";

const EmployeeTable = ({ data, columns }) => {

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      setPageSize,
      prepareRow,
      state,
      setGlobalFilter,
  } = useTable({
    columns, 
    data 
  },
  useGlobalFilter,
  useSortBy,
  usePagination
  )

  
  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;

  return (
    <>
      <div className='filters'>
        <DropdownFilter pageSize={pageSize} setPageSize={setPageSize} />
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
    
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
            {page.map(row => {
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

    <div className='pagination'>
      <div className='pagination__entries'>
        <span>
          Showing <b>{page.length}</b> of <b>{pageSize}</b>
        </span>
      </div>
      
      <div className='pagination__index'>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <div>
          <button className='index-btn' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        </div>
      </div>
      
    </div>
   </>
  )
}

export default EmployeeTable;