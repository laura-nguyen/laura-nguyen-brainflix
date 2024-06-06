import Comment from '../Comment/Comment.jsx'
import './CommentsSection.scss'

function CommentsSection(mainVideo) {

    const comments = mainVideo.comments;

    return (

        <div className='comment-section'>
        
            <p className="comment-section__count">{comments.length} Comments</p>
            <div className="comment-section__form-wrapper">
                <img className="comments__form-profile-pic" src="src/assets/images/Mohan-muruge.jpg" alt="side profile of Mohan"/>
                <form action="submit">
                    <label htmlFor="">Join the Conversation</label>
                    <textarea name="" id="" placeholder="Add a new comment"></textarea>
                    <button className="comments__button--submit">Submit</button>
                </form>


            </div>
            <div className="comments__list">

                return 

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



export default CommentsSection