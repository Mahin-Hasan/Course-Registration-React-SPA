import PropTypes from 'prop-types';


const Enrollment = ({ courseName, idx }) => {
    const { course_title } = courseName;
    return (
        <div>
            <ul>
                <li>{idx} {course_title}</li>
            </ul>
        </div>
    );
};

Enrollment.propTypes = {
    courseName: PropTypes.object,
    idx:PropTypes.number
}
export default Enrollment;