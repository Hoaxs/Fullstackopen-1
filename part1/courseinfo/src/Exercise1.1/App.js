/* App.js in this folder is a copy of the
App under src folder. Copied to this folder
for reference. To run this exercise, copy the code here
to the the app file under src. All the exercise in different 
folders can be run this way. The final version contains the App code*/


import Header from './Exercise1.1/Header'
import Content from './Exercise1.1/Content'
import Total from './Exercise1.1/Total'

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>

      <Header course={course} />
      <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />

    </div>


  );
}

export default App;
