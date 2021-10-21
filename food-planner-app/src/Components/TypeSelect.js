import CourseSelectButton from './CourseSelectButton';
import TypeSelectButton from './TypeSelectButton';


const TypeSelect = ({selectCourse, selectCourseType, course, menu}) => {

    // filters through menu to create an array of unique course types
    const courseFilter = menu.filter(itemFilter => itemFilter.course === course)
    const typeArray = courseFilter.map(typeArr => typeArr.type)
    const uniqType = [...new Set(typeArray)]

    // filters through menu to create an array of unique courses
    const inverseCourse = menu.filter(courseFilter => courseFilter.course !== course)
    const courseArr = inverseCourse.map(courseArr => courseArr.course)
    const uniqCourse = [...new Set(courseArr)]

    return (
        <div className="jumbotron bg-secondary text-center">
            <div className="container">
                <div className="ht-tm-header">
                    <h3 className="display-3">{`${course} Selections`}</h3>
                    <span className="lead text-primary">{`Select what kind of ${course.toLowerCase()} you would like and add any that look appetizing to your meal plan. You can always remove them later.`}</span>
        
                    <div className="mt-3">
                        { uniqCourse.map(course => 
                            <CourseSelectButton 
                                key={course} 
                                course={course}  
                                selectCourse={selectCourse}
                            /> )}
                    </div>
                    
                    <div className="mt-1">
                        { uniqType.map(type => 
                            <TypeSelectButton 
                                key={type} 
                                type={type} 
                                selectCourseType={selectCourseType} 
                            /> )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TypeSelect