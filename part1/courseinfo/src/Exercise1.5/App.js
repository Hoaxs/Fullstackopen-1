/*
Exercise 1.5. App.js in this folder is a copy of the
App under src folder. Copied to this folder
for reference

Import Header, Content and Total component from relevant excercise folder.*/

import Header from './Exercise1.5/Header'
import Content from './Exercise1.5/Content'
import Total from './Exercise1.5/Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
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
  }
  return (

    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;

