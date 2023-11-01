
const Course = ({ course, handleAddCourseToEnrollment }) => {
    const { img, course_title, course_details, price, credit } = course;
    return (
        <div className="border border-1 rounded-xl p-3 space-y-4">
            <img className="w-full" src={img} />
            <h2 className="font-semibold text-lg">{course_title}</h2>
            <p className="text-sm text-zinc-400">{course_details}</p>
            <div className="flex justify-between">
                <p className="text-zinc-400">Price: {price}</p>
                <p className="text-zinc-400">Credit: {credit}</p>
            </div>
            <button onClick={() => handleAddCourseToEnrollment(course)} className="bg-sky-500 w-full py-2 text-white font-bold text-2xl rounded-lg">Select</button>
        </div>
    );
};

export default Course;