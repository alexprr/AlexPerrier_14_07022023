// react lib
import React, { useState } from "react";

// Components
import { Header } from "../index";
import ModalContainer from "./ModalContainer/ModalContainer";
import InputField from "./EmployeeForm/InputField";
import SelectField from "./EmployeeForm/SelectField";
import InputNumber from "./EmployeeForm/InputNumber";
import DateField from "./EmployeeForm/DateField";
// mui component
import Box from "@mui/material/Box";

// css styles
import "./create-employee.css";

import { states, departments } from "../../utils/constants";

// redux
import { useDispatch } from "react-redux";
import { add } from "../../features/employeeSlice";

const CreateEmployee = () => {
	const [openModal, setOpenModal] = useState(false);
	const [employeeInfos, setEmployeeInfos] = useState({
		firstname: "",
		lastname: "",
		dateOfBirth: null,
		startDate: null,
		street: "",
		city: "",
		state: "",
		zipCode: null,
		department: "",
	});

	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		console.log(e);
		const name = e.target.name;
		const value = e.target.value;
		setEmployeeInfos({
			...employeeInfos,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(add(employeeInfos));
		setOpenModal(true);
	};

	return (
		<div>
			<Header />

			<main className="main container">
				<section className="employee flex">
					<div className="employee__content">
						<div className="employee__title">
							<h2>
								<i className="fa-solid fa-user-plus employee__title-icon"></i>
								Create Employee
							</h2>
						</div>
						<Box className="employee__form" component="form" onSubmit={handleSubmit}>
							<div className="input__group">
								<InputField
									label="Firstname"
									name="firstname"
									onInputChange={handleInputChange}
								/>
							</div>

							<div className="input__group">
								<InputField
									label="Lastname"
									name="lastname"
									onInputChange={handleInputChange}
								/>
							</div>

							<div className="date__group">
								<DateField
									name="dateOfBirth"
									label="Date of Birth"
									handleChange={handleInputChange}
								/>
							</div>

							<div className="date__group">
								<DateField
									name="startDate"
									label="Start Date"
									handleChange={handleInputChange}
								/>
							</div>

							<fieldset className="employee__address">
								<legend>Address</legend>

								<div className="input__group">
									<InputField
										label="Street"
										name="street"
										onInputChange={handleInputChange}
									/>
								</div>

								<div className="input__group">
									<InputField
										label="City"
										name="city"
										onInputChange={handleInputChange}
									/>
								</div>

								<div className="input__group">
									<SelectField
										label="State"
										name="state"
										onInputChange={handleInputChange}
										data={states}
									/>
								</div>

								<div className="input__group">
									<InputNumber
										label="Zip Code"
										name="zipCode"
										onInputChange={handleInputChange}
									/>
								</div>
							</fieldset>

							<div className="input__group">
								<SelectField
									label="Department"
									name="department"
									onInputChange={handleInputChange}
									data={departments}
								/>
							</div>

							<button className="button employee__form-button" type="submit">
								Save
								<i className="fa-solid fa-plus button__icon"></i>
							</button>
						</Box>
					</div>
				</section>
			</main>

			{openModal && <ModalContainer onClose={() => setOpenModal(false)} />}
		</div>
	);
};

export default CreateEmployee;
