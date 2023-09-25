import { useState } from 'react';
import Form from './Form';
import Header from './Header';
import Table from './Table';

function App() {

  const [userInput, setUserInput] = useState(null)

  const calculateHandler = (userInput) => {
    setUserInput(userInput)

  };

  if (userInput) {
    const yearlyData = []

    let currentSavings = userInput['current-savings'];
    const yearlyContribution = userInput['yearly-contribution'];
    const expectedReturn = userInput['expected-return'] / 100;
    const duration = userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }



  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      <Table />
    </div>
  );
}

export default App;
