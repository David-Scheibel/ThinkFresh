const IncrementMenu = ({incrementMenu}) => {

    //shifts menu display to the right
    return <button className="cycle" onClick={() => incrementMenu()}>
            More Recipes
          </button>
}

export default IncrementMenu