// Hooks
import React, { useMemo } from "react";
// Components
import { Header, EmployeeTable } from "../index";
// css
import "./employee-list.css";
// redux
import { useSelector } from "react-redux";

import { COLUMNS } from "../../utils/constants";

const EmployeeList = () => {
	const { employeesList } = useSelector((state) => state.employee);

	const data = useMemo(() => employeesList, [employeesList]);
	const columns = useMemo(() => COLUMNS, []);

	return (
		<div>
			<Header />

			<main className="main employees__container">
				<section className="employees flex">
					<div className="employees__content">
						<div className="employees__title">
							<h2>
								<i className="fa-solid fa-user employees__title-icon"></i>
								Current Employees
							</h2>
						</div>
					</div>

					<EmployeeTable data={data} columns={columns} />
				</section>
			</main>
		</div>
	);
};

export default EmployeeList;
