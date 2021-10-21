import { Link } from 'react-router-dom';

const Card = ({ menuItem, addToMealPlan, routeToComments }) => {

  return (
    <div className="card m-2 p-2">
    <img src={menuItem.image} className="card-img-top" alt="..." />
      <div className="card-body">
          <h4 className="card-title">{menuItem.dish}</h4>
          <h5 className="card-title">{ null }</h5>
          <p className="card-text">{menuItem.description}</p>
          <button 
              onClick={() => addToMealPlan(menuItem)}
              className="button p-1 m-1"
              >Add to Menu</button>

          <Link to={`/Menu/${menuItem.id}`}>
            <button 
              className="button p-1 m-1"
              onClick={() => routeToComments(menuItem)}
            >Comment</button>
          </Link>

      </div>
    </div>
  )
}

export default Card