import React, { useState } from 'react'
import { Header } from "../index"
import Modal from './Modal'
import "./create-employee.css"
import { states } from '../../utils/constants';

import { useDispatch } from "react-redux";
import { add } from '../../features/employeeSlice';

const CreateEmployee = () => {
    // states
    const [openModal, setOpenModal] = useState(false);
    const [employeeInfos, setEmployeeInfos] = useState({firstname: "", lastname: "", dateOfBirth: null,startDate: null, street: "", city: "", state: "", zipCode: null, department: "",
    })

    // redux tools
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
                    <form id="create-employee" className='employee__form' onSubmit={handleSubmit}>
                        <div className="input__group">
                            <label htmlFor="first-name">First name :</label>
                            <input 
                            type="text" 
                            id="first-name" 
                            name='firstname' 
                            required
                            onChange={handleInputChange}/>
                        </div>
                        
                        <div className="input__group">
                            <label htmlFor="last-name">Last name :</label>
                            <input 
                            type="text" 
                            id="last-name" 
                            name='lastname' 
                            required
                            onChange={handleInputChange}/>
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
                                <label htmlFor="street">Street :</label>
                                <input 
                                id="street" 
                                type="text" 
                                name='street'
                                required 
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input__group">
                                <label htmlFor="city">City :</label>
                                <input 
                                id="city" 
                                type="text" 
                                name='city' 
                                required
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input__group">
                                <label htmlFor="state">State :</label>
                                <select 
                                name="state" 
                                id="state" 
                                required
                                onChange={handleInputChange}>
                                    {states.map((state, index) => (
                                        <option key={index} value={state.abbreviation}>{state.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="input__group">
                                <label htmlFor="zip-code">Zip code :</label>
                                <input 
                                id="zip-code" 
                                type="number" 
                                name='zipCode'
                                required 
                                onChange={handleInputChange}/>
                            </div>
                        </fieldset>

                        <div className="select__group">
                            <label htmlFor="department">Department :</label>
                            <select 
                            name="department" 
                            id="department"
                            required 
                            onChange={handleInputChange}>
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </select>
                        </div>

                        <button className="button employee__form-button" type='submit'>
                            Save 
                            <i className="uil uil-plus-circle button__icon"></i>
                        </button>
                    </form>
                </div>
            </section>
        </main>

        <Modal open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default CreateEmployee