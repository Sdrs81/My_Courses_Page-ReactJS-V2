import Course from "./Course"

function Courses({courses, removeCourse}) {
    return ( <div className="courseMainDiv">
        <div>
            <h2>Kurslarım</h2>
        </div>
        <div className="cardDiv">
            {courses.map((course, index) =>{
                return (
                <Course key={course.id} {...course} removeOneCourse={removeCourse}/>  // With this, we can directly send props with their names.  
                );
            })}
        </div>
    </div> );
}

export default Courses;