import Comment from '../Comment/Comment.jsx'
import './CommentsSection.scss'
import profilePic from '../../assets/images/Mohan-muruge.jpg';

import { useState, useEffect } from "react";

import axios from "axios";

import { getVideoEndpoint } from '../../utils/utils.js';

const CommentsSection = ({ selectedVideoId }) => {

    const [mainVideo, setMainVideo] = useState(null);

    const getMainVideo = async (videoId) => {
        try {
            let res = await axios.get(getVideoEndpoint(videoId));


            setMainVideo(res.data);
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
       
        getMainVideo(selectedVideoId);
    }, [selectedVideoId]); 
    
    if (!mainVideo) {
        return <p>loading...</p>;
      }

    const comments = mainVideo.comments;


    return (
        <div className='comments-section'>
            <p className="comments-section__count">{mainVideo.comments.length} Comments</p>
            <div className="comments-section__form-wrapper">
                <img className="comments-section__form-profile-pic" src={profilePic} alt="side profile of Mohan" />
                <form className="comments-section__form" action="submit">
                    <label className="comments-section__label" htmlFor="comment">Join the Conversation</label>
                    <div className="comment-section__add-comment">
                        <textarea className="comments-section__input" name="comment" placeholder="Add a new comment"></textarea>
                        <button className="comments-section__button-submit">Comment</button>
                    </div>
                </form>
            </div>
            <ul className="comments-section__list">
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CommentsSection;
