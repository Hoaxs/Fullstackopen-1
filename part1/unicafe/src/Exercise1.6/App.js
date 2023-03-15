/*Exercise 1.6. The App in this folder is a copy of the App under src*/


import { useState } from 'react'
//   components
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const DisplayValue = (props) => (
  <p>good:{props.good}
    <br />
    neutral:{props.neutral}
    <br />
    bad:{props.bad}
  </p>
)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Updating functions
  const setToGood = (newValue) => () => setGood(newValue)

  const setToNeutral = (newValue) => () => setNeutral(newValue)

  const setToBad = (newValue) => () => setBad(newValue)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setToGood(good + 1)} text='good' />
      <Button onClick={setToNeutral(neutral + 1)} text='neutral' />
      <Button onClick={setToBad(bad + 1)} text='bad' />
      <h1> statistics</h1>
      <DisplayValue good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
