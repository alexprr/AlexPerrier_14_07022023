import React from 'react';

// react-table
import { useTable } from "react-table";

import "../EmployeeList/employee-list.css";

const EmployeeTable = ({ data, columns }) => {

  const tableInstance = useTable({columns, data });

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()} className="employees__table">
     <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>
              {column.render("Header")}
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
  )
}

export default EmployeeTable;