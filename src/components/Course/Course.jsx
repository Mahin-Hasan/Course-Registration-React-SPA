import { FaDollarSign, FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';


const Course = ({ course, handleAddCourseToEnrollment }) => {
    const { img, course_title, course_details, price, credit } = course;
    return (
        <div className="border border-1 rounded-xl p-3 space-y-4 shadow-2xl">
            <img className="w-full" src={img} />
            <h2 className="font-semibold text-lg">{course_title}</h2>
            <p className="text-sm text-zinc-400">{course_details}</p>
            <div className="flex justify-around">
                <div className='flex items-center text-sky-500'>
                    <FaDollarSign></FaDollarSign>
                    <p className="ms-2 text-zinc-400"> Price: {price}</p>
                </div>
                <div className='flex items-center text-sky-500'>
                    <FaBookmark></FaBookmark>
                    <p className="ms-2 text-zinc-400">Credit: {credit}</p>
                </div>
            </div>
            <button onClick={() => handleAddCourseToEnrollment(course)} className="bg-sky-500 w-full py-2 text-white font-bold text-2xl rounded-lg">Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleAddCourseToEnrollment: PropTypes.func
}
export default Course;