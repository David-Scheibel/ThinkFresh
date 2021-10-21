import { Component } from 'react';

const API = "http://localhost:3000/menuItems"


class FormContainer extends Component {

    state = {
        dish: "",
        course: "",
        type: "",
        image: "",
        description: "",
        nutrition: {
            calories: 0,
            fat: 0,
            cholesterol: 0,
            sodium: 0,
            carbs: 0,
            protein: 0
        }
    }

    submitMenuItem = (e) => {
        e.preventDefault() 

        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({...this.state})
        }

        fetch(API, reqObj)
            .then(r => r.json())
            .then((newItem) => {
                this.props.pushNewMenuItem(newItem)
                this.setState({
                    dish: "",
                    course: "",
                    type: "",
                    image: "",
                    description: "",
                    nutrition: {
                        calories: 0,
                        fat: 0,
                        cholesterol: 0,
                        sodium: 0,
                        carbs: 0,
                        protein: 0
                }})        
            })
            .catch(() => alert("submit error"))
    }


    render() {

        return (
            <div>
                <div className="bg-secondary text-center p-4">
                    <div className="container">
                        <div className="ht-tm-header">
                            <h3 className="display-5 p-3">Got a recipe idea?</h3>
                            <span className="lead text-primary">Fill out this form and we may feature your recipe and give you free FarmFresh for one whole month!</span>
                        </div>
                    </div>
                </div>
                
                <div className="form-container d-flex justify-content-center">
                    <form onSubmit={(e) => this.submitMenuItem(e)} className="form-column ml-4">
                        <input 
                            type="text" 
                            className="form-control mb-2 mr-sm-2" 
                            placeholder="Recipe Name"
                            onChange={(e) => this.setState({dish: e.target.value})}
                            value={this.state.dish}
                        />
                
                        <div className="input-group mb-2 mr-sm-2">
                            <select 
                                onChange={(e) => this.setState({course: e.target.value})}
                                value={this.state.course}
                                className="custom-select my-1 mr-sm-2">
                                    <option selected>Select Course</option>
                                    <option>Entrees</option>
                                    <option>Sides</option>
                                    <option>Desserts</option>
                            </select>
                        </div>

                        <div className="input-group mb-2 mr-sm-2">
                            <select 
                                onChange={(e) => this.setState({type: e.target.value})}
                                value={this.state.type}
                                className="custom-select my-1 mr-sm-2">
                                    <option selected>Select Type</option>
                                    <option>Beef</option>
                                    <option>Poultry</option>
                                    <option>Seafood</option>
                                    <option>Pasta</option>
                                    <option>Lamb</option>
                            </select>
                        </div>

                        <div className="input-group mb-2 mr-sm-2">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Upload an image"
                                onChange={(e) => this.setState({image: e.target.value})}
                                value={this.state.image}
                            />
                        </div>

                        <div className="input-group mb-2 mr-sm-2">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Description"
                                onChange={(e) => this.setState({description: e.target.value})}
                                value={this.state.description}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary mb-2"
                            >Submit
                        </button>
                    </form>
                </div>

            </div>
        )
    }
}
  
export default FormContainer