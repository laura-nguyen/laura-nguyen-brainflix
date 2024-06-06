import Comment from '../Comment/Comment.jsx'
import './CommentsSection.scss'

const CommentsSection = ({ comments }) => {
    return (
        <div className='comments-section'>
            <p className="comments-section__count">{comments.length} Comments</p>
            <div className="comments-section__form-wrapper">
                <img className="comments-section__form-profile-pic" src="src/assets/images/Mohan-muruge.jpg" alt="side profile of Mohan" />
                <form className="comments-section__form" action="submit">
                    <label className="comments-section__label" htmlFor="comment">Join the Conversation</label>
                    <div className="comment-section__add-comment">
                        <textarea className="comments-section__input" name="comment" placeholder="Add a new comment"></textarea>
                        <button className="comments-section__button-submit">Comment</button>
                    </div>
                </form>
            </div>
            <div className="comments-section__list">
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
    );
}

export default CommentsSection;
