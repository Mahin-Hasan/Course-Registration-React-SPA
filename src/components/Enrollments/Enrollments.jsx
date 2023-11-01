import Enrollment from "../Enrollment/Enrollment";
import PropTypes from 'prop-types';

const Enrollments = ({ courseNames, creditHours, totalCredits, totalPrice }) => {
    return (
        <div className="bg-gray-100 rounded-xl ml-4">
            <div className="mx-3 py-3 space-y-3">
                <h2 className="text-sky-500 font-bold text-lg">Credit Hour Remaining {creditHours} hr</h2>
                <hr />
                <h2 className="font-bold text-lg">Course Name</h2>
                {
                    courseNames.map((courseName, idx) => <Enrollment key={courseName.id} idx={idx + 1} courseName={courseName}></Enrollment>)
                }
                <hr />
                <h2 className="font-bold text-lg">Total Credit Hour: {totalCredits}</h2>
                <hr />
                <h2 className="font-bold text-lg">Total Price: {totalPrice}</h2>
            </div>
        </div>
    );
};

Enrollments.propTypes = {
    courseNames: PropTypes.array,
    creditHours: PropTypes.number,
    totalCredits: PropTypes.number,
    totalPrice: PropTypes.number
}

export default Enrollments;