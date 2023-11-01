
const Enrollment = ({ courseName, idx }) => {
    const { course_title } = courseName;
    // let count = 0;
    return (
        <div>
            <ul>
                <li>{idx} {course_title}</li>
            </ul>
        </div>
    );
};

export default Enrollment;