import React from 'react'
import { Header } from "../index"
import "./employee-list.css"

const EmployeeList = () => {
  return (
    <div>
        <Header />

        <main className='main employees__container'>
            <section className="employees flex">
                <div className="employees__content">
                    <div className='employees__title'>
                        <h2>
                            Current Employees
                            <i className="uil uil-user employees__title-icon"></i>
                        </h2>
                        <a href="/" className='employees__title-link'>Home</a>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default EmployeeList