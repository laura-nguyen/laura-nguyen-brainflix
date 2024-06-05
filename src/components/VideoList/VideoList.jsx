import VideoItem from '../VideoItem/VideoItem';
import './VideoList.scss';

const VideoList = ({ videos }) => {
    return (
        <section className="video-list">
            <h4 className="video-list__title">Next Videos</h4>
            <div className="video-list__item-wrapper">
                {videos.map((video) => (
                    
                    <VideoItem 
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                    />
                ))}
            </div>
        </section>
    );
}

export default VideoList;
