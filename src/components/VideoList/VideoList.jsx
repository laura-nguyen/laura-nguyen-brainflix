import VideoItem from '../VideoItem/VideoItem'

function VideoList(navigate) {
    return (
        <div className="video-list-wrapper">
            <h4 className="video-list__title">Next Videos</h4>
            <div className="video-list__item-wrapper">
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>

            </div>

        </div>
    )
    
}

export default VideoList