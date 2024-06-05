import './VideoItem.scss';

const VideoItem = ({ id, image, title, channel }) => {
  

    return (
        <div 
            className="video-item" 
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
