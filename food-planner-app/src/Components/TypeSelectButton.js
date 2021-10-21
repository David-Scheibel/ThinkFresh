const TypeSelectButton = ({type, selectCourseType}) => {

    return (
        <button 
            className="btn btn-primary btn-md m-2"
            onClick={ () => selectCourseType(type) } >
            <span value="type">{ `${type}` }</span>
        </button>
    )
}

export default TypeSelectButton