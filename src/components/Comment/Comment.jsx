import "./Comment.scss";
import { deleteComment } from "../../utils/utils";

const Comment = ({name, comment, timestamp}) => {

    const formattedDate = new Date(timestamp).toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric" });





    return (
        <li className="comments__item">

                <div className="comments__profile-pic--grey"></div>
                
                <div className="comments__item-details">
                    <div className="comments__item-info">
                        <p className="comments__item-name">{name}</p>
                        <p className="comments__item-date">{formattedDate}</p>
                    </div>
                    <p className="comments__item-text">{comment}</p>
                    <div className="comments__item-reaction">
                        <div className="comments__item-like-wrapper">
                            <button className="comments__item-button--like"></button>
                            <p>0</p>
                        </div>
                        <button className="comments__item-button--delete"></button>

                    </div>
                </div>

        </li>
    )
}

export default Comment;