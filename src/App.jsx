import './App.css'
import Courses from './components/Courses/Courses'
import Enrollments from './components/Enrollments/Enrollments'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='flex flex-col lg:flex-row container mx-auto'>
      <div className='flex-1'>
      <Courses></Courses>
      </div>
      <div className='lg:w-[300px] xl:w-[350px]'>
      <Enrollments></Enrollments>
      </div>
    </div>
    </>
  )
}

export default App
