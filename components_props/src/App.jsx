
import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const App = () => {
  // dynmic data
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header courseName = {course} />
    
      <Content part1 = {part1} exercise1 = {exercises1} 
      part2 = {part2} exercise2 = {exercises2}
      part3 = {part3} exercise3 = {exercises3}/>
   
    
      <Total exercise1 = {exercises1} exercise2 = {exercises2} exercise3 = {exercises3} />
      {/* <p>Total exercises in the course {exercises1 +  exercises2 + exercises3}</p> */}
    </>
  ) 
}

export default App