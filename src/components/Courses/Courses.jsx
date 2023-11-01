import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddCourseToEnrollment}) => {
    const [courses, setcourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setcourses(data))
    }, [])
    console.log(courses);

    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* <h1>this is courses</h1>
             */}
             {
                courses.map(course =><Course 
                    key={course.id} 
                    course={course}
                    handleAddCourseToEnrollment={handleAddCourseToEnrollment}
                ></Course>)
             }
        </div>
    );
};

export default Courses;