import React from 'react';

// Components
import Card from "../Components/Card";
import DecrementMenu from '../Components/DecrementMenu';
import IncrementMenu from '../Components/IncrementMenu';
import TypeSelect from '../Components/TypeSelect';


const SidesContainer = ( props ) => {

  return (
    <div>
      <TypeSelect 
        selectCourse={props.selectCourse}
        selectCourseType={props.selectCourseType} 
        type={props.type} 
        course={props.course} 
        menu={props.wholeMenu}
      />

      <div className="row m1-3 text-center justify-content-center">
        <DecrementMenu decrementMenu={props.decrementMenu} />
        { props.menu.map( menuItem => 
          <Card 
            key={menuItem.id} 
            menuItem={menuItem} 
            type={props.type} 
            addToMealPlan={props.addToMealPlan}
            routeToComments={props.routeToComments}
          /> )}
        <IncrementMenu incrementMenu={props.incrementMenu} />
      </div>
    </div>
  )
}

  export default SidesContainer