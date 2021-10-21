import { Component } from 'react';
import CommentList from '../Components/CommentList';

const API = "http://localhost:3000/comments"


class ItemContainer extends Component {

    state = {
        comment: "",
        menuItemId: this.props.item.id,
    }

    submitComment = (e) => {
        e.preventDefault()

        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({...this.state})
        }

        fetch(API, reqObj)
            .then(r => r.json())
            .then((newComment) => {
                this.props.pushNewComment(newComment)
                this.setState({
                    comment: "",
                    menuItemId: ""
                })             
            })
            .catch(() => alert("submit error"))
        
    }


    render() {

        return (
            <div>
                <div className="bg-secondary text-center p-4">
                    <div className="container">
                        <div className="ht-tm-header">
                            <h3 className="display-5 p-3">{`Comments for: ${this.props.item.dish}`}</h3>
                            <span className="lead text-primary">{`Check out what other FarmFresh users have to say about our delicious ${this.props.item.dish.toLowerCase()}!`}</span>
                        </div>
                    </div>
                </div>
            
                <div className="row m-2 p-3 justify-content-center">
                    <div className="card m-2 p-2">
                        <img src={this.props.item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.item.dish}</h4>
                            <h5 className="card-title">{ null }</h5>
                            <p className="card-text">{this.props.item.description}</p>
                            <form onSubmit={(e) => this.submitComment(e)}>
                                <button type="submit" className="button p-1 m-1">Comment</button>
                                <input 
                                    type="text" 
                                    placeholder="Comment..."
                                    onChange={(e) => this.setState({comment: e.target.value})}
                                />
                            </form>
                        </div>
                    </div>
                </div>

                { this.props.item.comments.map(itemComment => 
                    <CommentList 
                        key={itemComment.id} 
                        comment={itemComment} 
                    />) }
            </div>
        )
     }
}
  
export default ItemContainer