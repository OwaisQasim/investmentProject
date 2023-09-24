import React, { useState } from 'react'

export default function Form({ handleSubmit }) {


    const handlingSubmit = (evnt) => {
        evnt.preventDefault();
        console.log('Submitted')
    }

    const resetHanlder = () => {
        console.log('Restted')
    }

    const inputChangeHandler = (input, value) => {
        console.log(input, value)
    }




    return (
        <form className="form" onSubmit={handlingSubmit}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(evnt) => {
                        inputChangeHandler('current-savings', evnt.target.value)
                    }} type="text" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(evnt) => {
                        inputChangeHandler('yearly-contribution', evnt.target.value)
                    }} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(evnt) => {
                        inputChangeHandler('expected-return', evnt.target.value)
                    }} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(evnt) => {
                        inputChangeHandler('duration', evnt.target.value)
                    }} type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHanlder} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}
