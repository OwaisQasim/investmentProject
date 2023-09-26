import React, { useState } from 'react'
import classes from './Form.module.css'

const initialInputs = {
    'current-savings': 1000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}

export default function Form({ onCalculate }) {

    const [userInput, setUserInput] = useState(initialInputs)

    const handlingSubmit = (evnt) => {
        evnt.preventDefault();
        onCalculate(userInput)
    }

    const resetHanlder = () => {
        setUserInput(initialInputs)
    }

    const inputChangeHandler = (input, value) => {
        setUserInput(prevInput => {
            return {
                ...prevInput,
                [input]: +value
            }
        })
    }




    return (
        <form className={classes.form} onSubmit={handlingSubmit}>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(evnt) => {
                        inputChangeHandler('current-savings', evnt.target.value)
                    }} type="text" id="current-savings"
                        value={userInput['current-savings']}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(evnt) => {
                        inputChangeHandler('yearly-contribution', evnt.target.value)
                    }} type="number" id="yearly-contribution"
                        value={userInput['yearly-contribution']}
                    />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(evnt) => {
                        inputChangeHandler('expected-return', evnt.target.value)
                    }} type="number" id="expected-return"
                        value={userInput['expected-return']}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(evnt) => {
                        inputChangeHandler('duration', evnt.target.value)
                    }} type="number" id="duration"
                        value={userInput['duration']}
                    />
                </p>
            </div>
            <p className={classes["actions"]}>
                <button onClick={resetHanlder} type="reset" className={classes.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={classes["button"]}>
                    Calculate
                </button>
            </p>
        </form>
    )
}
