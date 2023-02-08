import React from 'react'
import { Header } from "../index"
import "./create-employee.css"

import { states } from '../../utils/constants';

const CreateEmployee = () => {
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
                        <a href="employee-list.html" className='employee__title-link'>View Current Employees</a>
                    </div>
                    <form id="create-employee" className='employee__form'>
                        <div className="input__group">
                            <label htmlFor="first-name">First name :</label>
                            <input type="text" id="first-name" />
                        </div>
                        
                        <div className="input__group">
                            <label htmlFor="last-name">Last name :</label>
                            <input type="text" id="last-name" />
                        </div>

                        <div className="input__group">
                            <label htmlFor="date-of-birth">Date of birth :</label>
                            <input id="date-of-birth" type="date" />
                        </div>

                        <div className="input__group">
                            <label htmlFor="start-date">Start date :</label>
                            <input id="start-date" type="date" />
                        </div>

                        <fieldset className="employee__address">
                            <legend>Address</legend>

                            <div className="input__group">
                                <label htmlFor="street">Street :</label>
                                <input id="street" type="text" />
                            </div>

                            <div className="input__group">
                                <label htmlFor="city">City :</label>
                                <input id="city" type="text" />
                            </div>

                            <div className="input__group">
                                <label htmlFor="state">State :</label>
                                <select name="state" id="state">
                                    {states.map((state, index) => (
                                        <option key={index} value={state.abbreviation}>{state.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="input__group">
                                <label htmlFor="zip-code">Zip code :</label>
                                <input id="zip-code" type="number" />
                            </div>
                        </fieldset>

                        <div className="select__group">
                            <label htmlFor="department">Department :</label>
                            <select name="department" id="department">
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </select>
                        </div>
                    </form>
                </div>

                    <button className="button">
                        Save 
                        <i className="uil uil-plus-circle button__icon"></i>
                    </button>
            </section>
        </main>
    </div>
  )
}

export default CreateEmployee