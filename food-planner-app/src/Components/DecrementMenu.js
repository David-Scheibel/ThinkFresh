const DecrementMenu = ({decrementMenu}) => {
  
    //shifts menu display to the left
    return <button className="cycle" onClick={() => decrementMenu()}>
            Previous Recipes
          </button>
}

export default DecrementMenu