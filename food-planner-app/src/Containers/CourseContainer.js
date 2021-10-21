import React from 'react';
import { Link } from 'react-router-dom';

// Components
import WelcomeSplash from '../Components/WelcomeSplash';

const CourseContainer = ({ handleCourseState }) => {

  return (
  
    <div>
      <WelcomeSplash />
      <div className="row course-container">
        <div className="card-long m-2 p-2">

          <Link to="/entrees" onClick={() => handleCourseState("Entrees")}>
            <div className="super-div row">
              <div className="card-body-long">
                <img src={"https://livingthegourmet.com/wp-content/uploads/2020/01/Steak_Board_5-scaled.jpg"} className="card-img-left" alt="..." />
                <h4 className="card-title">Entrees</h4>
                <p className="card-text">Choose from fresh selections updated weekly!</p>
              </div>
            </div>
          </Link>

          <Link to="/sides" onClick={() => handleCourseState("Sides")}>
            <div className="super-div row">
              <div className="card-body-long">
                <img className="courseImg" src={"https://c.ndtvimg.com/french-fries_625x300_1528454061766.jpg"} className="card-img-left" alt="..." />
                <h4 className="card-title">Sides</h4>
                <p className="card-text">Guaranteed to add a little extra fun to your meal!</p>
              </div>
            </div>
          </Link>

          <Link to="/desserts" onClick={() => handleCourseState("Desserts")}>
            <div className="super-div row">
              <div className="card-body-long">
                <img className="courseImg" src={"https://img.taste.com.au/f6_C_uDy/taste/2018/10/no-bake-rocky-road-cheesecake-143048-2.jpg"} className="card-img-left" alt="..." />
                <h4 className="card-title">Desserts</h4>
                <p className="card-text">Decadent and mouthwatering desserts straight from our pastry chefs!</p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default CourseContainer