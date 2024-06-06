import Comment from './../Comment/Comment.jsx'
import './CommentSection.scss'

function CommentSection(mainVideo) {

    const comments = mainVideo.comments;
    return (

        <div>
        
            <p className="comments__count">{comments.length} Comments</p>
            <div className="comments__form-wrapper">
                <img className="comments__form-profile-pic" src="src/assets/images/Mohan-muruge.jpg" alt="side profile of Mohan"/>
                <form action="submit">
                    <label htmlFor="">Join the Conversation</label>
                    <textarea name="" id="" placeholder="Add a new comment"></textarea>
                    <button className="comments__submit"></button>
                </form>


            </div>
            <div className="comments__list">

            {comments.map((comment) => (
    
                    <Comment
                        key={comment.id}
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}
                    />
                    
                ))}
           
            </div>

        </div>   
        
    )
    

}



export default CommentSection