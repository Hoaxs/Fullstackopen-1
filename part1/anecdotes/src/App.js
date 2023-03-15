import { useState } from 'react'
//   components
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
// return anecdote with highest vote

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
  //def random number generator and reset highestscore
  const random = () => Math.floor((Math.random() * anecdotes.length))

  // copy scoreArray
  const copyScoreArray = [...scoreArray]
  const vote = () => {
    copyScoreArray[anecdotes.indexOf(anecdotes[selected])] += 1;
    const updateScoreArray = [...copyScoreArray]
    setScoreArray(updateScoreArray)
  }

  const AnectdoteWithMostVotes = () => {
    const max = Math.max(...scoreArray)
    const indexOfMax = scoreArray.indexOf(max)
    return <div>
      {anecdotes[indexOfMax]}has {Math.max(...scoreArray)} votes
    </div>
  }

  return (
    <div>
      <h2><p>Anecdote of the day</p></h2>
      <p>{anecdotes[selected]} has {scoreArray[anecdotes.indexOf(anecdotes[selected])]} votes</p>
      <Button onClick={vote} text='vote' />
      <Button onClick={setToSelected(random)} text='next anecdote' />
      <h3>Anecdote with most votes</h3>
      {AnectdoteWithMostVotes()}
    </div >
  );
}

export default App;
