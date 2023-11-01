import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Enrollments from './components/Enrollments/Enrollments'
import Header from './components/Header/Header'

function App() {

  const [courseNames, setCourseNames] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);

  const handleAddCourseToEnrollment = course => {
    // console.log('test',course);
    const isExist = courseNames.find((item) => item.id === course.id);
    if (isExist) {//truthy check
      return alert('Course Already Added');
    }
    const newCourses = [...courseNames, course];
    setCourseNames(newCourses);

    //credit
    setTotalCredits(totalCredits + course.credit);
  }
  // console.log(totalCredits);
  console.log(courseNames);

  return (
    <>
      <Header></Header>
      <div className='flex flex-col lg:flex-row container mx-auto'>
        <div className='flex-1'>
          <Courses
            handleAddCourseToEnrollment={handleAddCourseToEnrollment}
          ></Courses>
        </div>
        <div className='lg:w-[300px] xl:w-[350px]'>
          <Enrollments
            courseNames={courseNames}
            totalCredits={totalCredits}
          ></Enrollments>
        </div>
      </div>
    </>
  )
}

export default App
