import './VideoItem.scss';

const VideoItem = ({ id, image, title, channel, changeMainVideo }) => {
    return (
        <li 
            className="video-item" 
            onClick={() => {
                changeMainVideo(id);
            }}
        >
            <img className="video-item__img" src={image} alt={`Thumbnail image of ${title} by ${channel}`} />
            <div className='video-item__text'>
                <h4 className="video-item__title">{title}</h4>
                <p className="video-item__author">{channel}</p>
            </div>
        </li>
    );
}

export default VideoItem;
