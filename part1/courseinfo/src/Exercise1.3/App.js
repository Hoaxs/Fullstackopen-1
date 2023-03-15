

/* Exercise 1.3. App.js in this folder is a copy of the
App under src folder. Copied to this folder
for reference*/

import Header from './Exercise1.3/Header'
import Content from './Exercise1.3/Content'
import Total from './Exercise1.3/Total'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (

    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />

    </div>
  );
}

export default App;

