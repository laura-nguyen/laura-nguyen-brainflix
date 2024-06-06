import './VideoItem.scss';

const VideoItem = ({ id, image, title, channel, changeMainVideo}) => {

  

    return (
        <div 
            className="video-item" 
            // wrap the changeSelectedPlant() function received as props in an anonymous function
            // so it is not immediately invoked when the click happens
            onClick={() => {
                changeMainVideo(id);
                //-                  ^   because component renders multiple <li> dynamically, this component was rendered from the parent utilizing .map()
                //-                       each <li> has associated with it, the corresponding id from the iteration it was created with
                //-                        as such, if the first <li> in the list is clicked, the id passed with be '1'
                //-                         if the 3rd <li> down is clicked, the corresponding id passed with be 3, etc. etc.
            }}
        >
            <img className="video-item__img" src={image} alt={`Thumbnail image of ${title} by ${channel}`} />
            <div className='video-item__text'>
                <h4 className="video-item__title">{title}</h4>
                <p className="video-item__author">{channel}</p>
            </div>
        </div>
    );
}

export default VideoItem;
