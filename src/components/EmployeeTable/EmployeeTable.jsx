import React from 'react';
// react-table
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from './GlobalFilter';
import DropdownFilter from './DropdownFilter';

import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

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
    
      <Table {...getTableProps()} id="table">
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ''}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
          
        <TableBody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <TableCell {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
        </TableBody>
      </Table>

    <div className='pagination'>
      <div className='pagination__entries'>
        <span>
          Showing <b>{page.length}</b> - <b>{pageSize}</b> of <b>{pageSize}</b>
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