import Comment from '../Comment.jsx'

function CommentSection() {
    return (

        <div>
        
            <p className="comments__count">Comments</p>
            <div className="comments__form-wrapper">
                <img className="comments__form-profile-pic" src="src/assets/images/Mohan-muruge.jpg" alt="side profile of Mohan"/>
                <form action="submit">
                    <label htmlFor="">Join the Conversation</label>
                    <textarea name="" id="" placeholder="Add a new comment"></textarea>
                    <button className="comments__submit"></button>
                </form>


            </div>
            <div className="comments__list">
                <Comment/>
            </div>

        </div>   
        
    )
    

}



export default CommentSection