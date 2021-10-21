const CommentList = ({ comment }) => {
   
    return(

        <div className="row justify-content-center p-2">
            <div>
                FreshFarms User: "{comment.comment}"
            </div>
        </div>
    )
}
  
export default CommentList