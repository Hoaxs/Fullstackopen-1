
/* Exercise 1.4. App.js in this folder is a copy of the
App under src folder. Copied to this folder
for reference*/

import Header from './Exercise1.4/Header'
import Content from './Exercise1.4/Content'
import Total from './Exercise1.4/Total'


const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;

