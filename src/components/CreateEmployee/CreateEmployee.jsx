// react lib
import React, { useState } from 'react'

// Components
import { Header } from "../index"
import Modal from './Modal'
import InputField from './EmployeeForm/InputField';
import SelectField from './EmployeeForm/SelectField';

import Box from "@mui/material/Box";

// css styles
import "./create-employee.css"

// redux
import { useDispatch } from "react-redux";
import { add } from '../../features/employeeSlice';
import InputNumber from './EmployeeForm/InputNumber';

const CreateEmployee = () => {
    const [openModal, setOpenModal] = useState(false);
    const [employeeInfos, setEmployeeInfos] = useState({firstname: "", lastname: "", dateOfBirth: null,startDate: null, street: "", city: "", state: "", zipCode: null, department: "",
    })

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployeeInfos({
            ...employeeInfos,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add(employeeInfos));
        setOpenModal(true);
    }

  return (
    <div>
        <Header />

        <main className='main container'>
            <section className="employee flex">
                <div className="employee__content">
                    <div className='employee__title'>
                        <h2>
                            Create Employee
                            <i className="uil uil-user-plus employee__title-icon"></i>
                        </h2>
                        <a href="/employees-list" className='employee__title-link'>View Current Employees</a>
                    </div>
                    <Box 
                    className='employee__form' 
                    component="form"
                    onSubmit={handleSubmit}
                    >
                        <div className="input__group">
                            <InputField 
                            label="Firstname" 
                            name="firstname"
                            onInputChange={handleInputChange}/>
                        </div>

                        <div className="input__group">
                            <InputField 
                            label="Lastname" 
                            name="lastname"
                            onInputChange={handleInputChange}/>
                        </div>

                        <div className="input__group">
                            <label htmlFor="date-of-birth">Date of birth :</label>
                            <input 
                            id="date-of-birth" 
                            type="date" 
                            name='dateOfBirth'
                            required 
                            onChange={handleInputChange}/>
                        </div>

                        <div className="input__group">
                            <label htmlFor="start-date">Start date :</label>
                            <input 
                            id="start-date" 
                            type="date" 
                            name='startDate'
                            required 
                            onChange={handleInputChange}/>
                        </div>

                        <fieldset className="employee__address">
                            <legend>Address</legend>

                            <div className="input__group">
                                <InputField 
                                label="Street" 
                                name="street"
                                onInputChange={handleInputChange}/>
                            </div>

                            <div className="input__group">
                                <InputField 
                                label="City" 
                                name="city"
                                onInputChange={handleInputChange}/>
                            </div>

                            <div className="input__group">
                                <SelectField 
                                label="State" 
                                name="state"
                                onInputChange={handleInputChange}/>
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
                            onInputChange={handleInputChange}/>
                        </div>

                        <button className="button employee__form-button" type='submit'>
                            Save 
                            <i className="uil uil-plus-circle button__icon"></i>
                        </button>
                    </Box>
                </div>
            </section>
        </main>

        <Modal open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default CreateEmployee