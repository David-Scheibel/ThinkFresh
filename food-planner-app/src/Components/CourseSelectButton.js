import { Link } from 'react-router-dom';

const CourseSelectButton = ({ course, selectCourse }) => {

    return (
        <Link to={`/${course.toLowerCase()}`}>
            <button 
                className="btn btn-primary btn-sm m-2"
                onClick={ () => selectCourse(course) } >
                <span value="type">{ `${course}` }</span>
            </button>
        </Link>
    )
}

export default CourseSelectButton