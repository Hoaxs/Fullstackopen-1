import { useState } from 'react'

//   components
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticLine = (props) => {
  return (
    <div>
      {props.text}
      {' '}
      {props.value}
    </div>
  )
}
const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0)
    return (
      <div>No feedback given</div>
    )

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine value={props.good} text="good:" />
            </td>
          </tr>
          <tr>
            <td><StatisticLine value={props.neutral} text="neutral:" /></td>
          </tr>
          <tr>
            <td>  <StatisticLine value={props.bad} text="bad:" /></td>
          </tr>
          <tr>
            <td>all: {props.good + props.neutral + props.bad} </td>
          </tr>
          <tr>
            <td>average:{((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / (props.good + props.neutral + props.bad)} </td>
          </tr>
          <tr>
            <td>positiveAvg:{props.good / (props.good + props.neutral + props.bad) * 100}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
function App() {
  // save clicks of each button to its own state
  // initial states
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
      <h1><p> statistics</p></h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
