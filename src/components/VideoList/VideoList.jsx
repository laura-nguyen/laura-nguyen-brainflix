import VideoItem from '../VideoItem/VideoItem';
import './VideoList.scss';

const VideoList = ({ videos, changeMainVideo }) => {

    return (
        <nav className="video-list">
            <h4 className="video-list__title">Next Videos</h4>
            <ul className="video-list__item-wrapper">
                {videos.map((video) => (
                    
                    <VideoItem 
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                        changeMainVideo={changeMainVideo}
                    />
                ))}
            </ul>
        </nav>
    );
}

export default VideoList;
