import React, { useState } from 'react'

export default function Form({ handleSubmit }) {

    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlyContribution, setYearlyContribution] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    const handlingSubmit = (evnt) => {
        evnt.preventDefault();
        handleSubmit({
            currentSavings,
            yearlyContribution,
            expectedReturn,
            duration,
        });
    }

    const handleCurrentSavingsChange = (evnt) => {
        setCurrentSavings(evnt.target.value);
    }

    const handleYearlyContributionChange = (evnt) => {
        setYearlyContribution(evnt.target.value);
    }

    const handleExpectedReturnChange = (evnt) => {
        setExpectedReturn(evnt.target.value);
    }

    const handleDurationChange = (evnt) => {
        setDuration(evnt.target.value);
    }


    return (
        <form className="form" onSubmit={handlingSubmit}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input value={currentSavings} onChange={handleCurrentSavingsChange} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input value={yearlyContribution} onChange={handleYearlyContributionChange} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input value={expectedReturn} onChange={handleExpectedReturnChange} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input value={duration} onChange={handleDurationChange} type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}
