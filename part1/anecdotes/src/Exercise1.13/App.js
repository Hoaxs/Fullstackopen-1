/*This is a copy of App file under src folder*/
import { useState } from 'react'
//   components
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [scoreArray, setScoreArray] = useState(new Array(anecdotes.length).fill(0))

  const setToSelected = (value) => () => setSelected(value)
  // generate random number for anecdotes indexing 
  const random = () => Math.floor((Math.random() * anecdotes.length))

  // copy scoreArray. Spread syntax in action
  const copyScoreArray = [...scoreArray]
  // handles vote event
  const vote = () => {
    copyScoreArray[anecdotes.indexOf(anecdotes[selected])] += 1;
    // Take asyncronous rendering into perspective
    const updateScoreArray = [...copyScoreArray]
    setScoreArray(updateScoreArray)
  }

  return (
    <div>
      <p>{anecdotes[selected]} has {scoreArray[anecdotes.indexOf(anecdotes[selected])]} votes</p>
      <Button onClick={vote} text='vote' />
      <Button onClick={setToSelected(random)} text='next anecdote' />
    </div>
  );
}

export default App;
