import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Enrollments from './components/Enrollments/Enrollments'
import Header from './components/Header/Header'

function App() {

  const [courseNames, setCourseNames] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [creditHours, setCreditHours] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddCourseToEnrollment = course => {
    //dont accept course that are already added validation
    const isExist = courseNames.find((item) => item.id === course.id);
    if (isExist) {
      return alert('Course Already Added');
    }
    const newCourses = [...courseNames, course];

    //credit validation
    let count = course.credit;
    let updatedPrice = course.price;
    courseNames.forEach((item) => {
      count = count + item.credit;
      updatedPrice = updatedPrice + item.price;
    })
    if (count > 20) {
      return alert('Cannot take more than 20 credits');
    }

    //credit remaining validation
    let creditRemaining = 20 - count;
    if (creditRemaining < 0) {
      return alert('No Credits Remaining');
    }

    setCourseNames(newCourses);
    setTotalCredits(totalCredits + course.credit);
    setCreditHours(creditRemaining);
    setTotalPrice(updatedPrice);
  }

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
            creditHours={creditHours}
            totalCredits={totalCredits}
            totalPrice={totalPrice}
          ></Enrollments>
        </div>
      </div>
    </>
  )
}

export default App
