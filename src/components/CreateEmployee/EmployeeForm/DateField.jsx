import React, { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const DateField = ({ label, handleChange, name }) => {
	const [date, setDate] = useState(new Date());

	// Format mounth value
	const mounthFormat = (mounth) => {
		if (mounth > 10 || mounth === 9 || mounth === 10) {
			return `${mounth + 1}`;
		} else {
			return `0${mounth + 1}`;
		}
	};

	// Format day value
	const dayFormat = (day) => {
		if (day < 10) {
			return `0${day}`;
		} else {
			return `${day}`;
		}
	};

	const handleDate = (value) => {
		const e = {
			target: {
				name: name,
				value: `${dayFormat(value.$D)}/${mounthFormat(value.$M)}/${value.$y}`,
			},
		};
		handleChange(e);
		setDate(value);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				label={label}
				value={date}
				onChange={handleDate}
				renderInput={(params) => <TextField size="small" {...params} />}
			/>
		</LocalizationProvider>
	);
};

export default DateField;
