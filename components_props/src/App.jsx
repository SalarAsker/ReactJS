
import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const App = () => {
  // dynmic data
  const course = {
    name : 'Half Stack application development',
    parts:[
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
    <>
      <Header courseName = {course.name} />
    
      <Content parts = {course.parts} />
   
    
      {/* <Total exercise1 = {course.part} /> */}
     
    </>
  ) 
}

export default App