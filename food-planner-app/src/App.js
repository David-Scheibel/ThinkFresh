import { Component } from 'react';
import { Route, Switch } from  'react-router-dom';
import './styles/App.css';
import './styles/index.css';

// Components
import Navbar from './Components/Navbar';
import EntreeContainer from './Containers/EntreeContainer';
import CourseContainer from './Containers/CourseContainer';
import SidesContainer from './Containers/SidesContainer';
import DessertsContainer from './Containers/DessertsContainer';
import ItemContainer from './Containers/ItemContainer';
import FormContainer from './Containers/FormContainer';
import Cart from './Containers/Cart';


const API = "http://localhost:3000/menuItems?_embed=comments"


class App extends Component {

  state = {
    menu: [],
    course: "",
    type: "",
    position: 0,
    cart: [],
    item: []
  }
    
  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(menu => this.setState({
        menu: menu
    }))
  }

  // scrolls three places to the right in the menu item carousel
  incrementMenu = () => {

    const menuCopy = [...this.state.menu]
    const filterMenu = menuCopy.filter(menuItems => menuItems.course === this.state.course)
    const filterType = filterMenu.filter(menuItems => menuItems.type === this.state.type)

    if(this.state.position > filterMenu.length-1) {
      this.setState({position: 0})
    // } else if(this.state.position > filterType.length) {
    //   this.setState({position: 0})
    } else {
      this.setState({position: this.state.position + 3})
    }
  }

  // scrolls three places to the left in the menu item carousel
  decrementMenu = () => {

    if(this.state.position > 3) {
      this.setState({position: this.state.position - 3})
    } else {
      this.setState({position: 0})
    }
  }

  // filters which menu items to display in the menu carousel
  filterCourses = () => {

    const menuCopy = [...this.state.menu]
    const filterEntrees = menuCopy.filter(menuItems => menuItems.course === this.state.course)
    const secondFilter = filterEntrees.filter(menuItems => menuItems.type === this.state.type)

    if(this.state.type === ""){
      return filterEntrees.slice(this.state.position, this.state.position + 3)
    } else {
      return secondFilter.slice(this.state.position, this.state.position + 3)
    }
  }

  // adds selected menu item to "Meal Plan" or Cart
  addToMealPlan = (menuItem) => {

    if(!this.state.cart.includes(menuItem)) {
      this.setState({cart: [...this.state.cart, menuItem]})
    }
  }

  // removes selected menu item from the "Meal Plan" or Cart
  removeFromMealPlan = (cartItem) => {
    this.setState({cart: this.state.cart.filter(cart => cart.id !== cartItem.id)})
  }

  // sets course in state and resets course type and position at the same time
  selectCourse = (e) => {this.setState({course: e, type:"", position: 0})}

  // sets course type in state and resets position
  selectCourseType = (e) => {this.setState({type: e, position: 0})}

  // handles a simple version of the course state setter for the CourseContainer
  handleCourseState = (e) => {this.setState({course: e})}

  // resets position, course and type in state when selecting brand on Navbar
  resetPosition = () => {this.setState({position: 0, course: "", type: ""})}

  // routes to item comments viewport
  routeToComments = (e) => {this.setState({item: e})}

  // pushes new menu item from Form into menu state
  pushNewMenuItem = (newItem) => this.setState({menu: [...this.state.menu, newItem]})


  render() {

    return (
      <div className="App">
        <Navbar resetPosition={this.resetPosition} />

        <Switch>

          <Route path="/entrees">
            <EntreeContainer 
              menu={this.filterCourses()} 
              incrementMenu={this.incrementMenu} 
              decrementMenu={this.decrementMenu}
              selectCourse={this.selectCourse}
              selectCourseType={this.selectCourseType}
              course={this.state.course} 
              type={this.state.type} 
              wholeMenu={this.state.menu}
              addToMealPlan={this.addToMealPlan}
              routeToComments={this.routeToComments}
            />
          </Route>

          <Route path="/sides">
            <SidesContainer 
              menu={this.filterCourses()} 
              incrementMenu={this.incrementMenu} 
              decrementMenu={this.decrementMenu}
              selectCourse={this.selectCourse}
              selectCourseType={this.selectCourseType}
              course={this.state.course} 
              type={this.state.type}
              wholeMenu={this.state.menu}
              addToMealPlan={this.addToMealPlan}
              routeToComments={this.routeToComments}
            />
          </Route>

          <Route path="/desserts">
            <DessertsContainer 
              menu={this.filterCourses()} 
              incrementMenu={this.incrementMenu} 
              decrementMenu={this.decrementMenu}
              selectCourse={this.selectCourse}
              selectCourseType={this.selectCourseType}
              course={this.state.course} 
              type={this.state.type}
              wholeMenu={this.state.menu}
              addToMealPlan={this.addToMealPlan}
              routeToComments={this.routeToComments}
            />
          </Route>

          <Route path="/cart">
            <Cart 
              cart={this.state.cart} 
              removeFromMealPlan={this.removeFromMealPlan}
              routeToComments={this.routeToComments} 
            />
          </Route>

          <Route path={`/Menu/${this.state.item.id}`}>
            <ItemContainer item={this.state.item} 
                           pushNewComment={this.pushNewComment} />
          </Route>

          <Route path="/form">
            <FormContainer pushNewMenuItem={this.pushNewMenuItem} />
          </Route>

          <Route path="/">
            <CourseContainer handleCourseState={this.handleCourseState} />
          </Route>

        </Switch>

      </div>
    );
  }
}

export default App;
