import Enrollment from "../Enrollment/Enrollment";

const Enrollments = ({ courseNames, totalCredits }) => {
    // console.log(courseNames);
    // console.log(totalCredits);
    return (
        <div className="bg-gray-100 rounded-xl ml-4">
            <div className="mx-3 py-3 space-y-3">
                <h2 className="text-sky-500 font-bold text-lg">Credit Hour Remaining 7 hr</h2>
                <hr />
                <h2 className="font-bold text-lg">Course Name</h2>
                {
                    courseNames.map((courseName, idx) => <Enrollment key={courseName.id} idx={idx + 1} courseName={courseName}></Enrollment>)
                    // courseNames.map((courseName,idx) => <ul  courseName={courseName}></ul>)
                }
                <hr />
                <h2 className="font-bold text-lg">Total Credit Hour: {totalCredits}</h2>
                <hr />
                <h2 className="font-bold text-lg">Total Price:</h2>
            </div>
        </div>
    );
};

export default Enrollments;