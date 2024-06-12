import MainVideoPlayer from './../../components/MainVideoPlayer/MainVideoPlayer';
import MainVideoDetails from './../../components/MainVideoDetails/MainVideoDetails';
import CommentsSection from './../../components/CommentsSection/CommentsSection';
import VideoList from './../../components/VideoList/VideoList';

import { useState } from 'react';

import videos from './../../data/video-details.json';

const VideoPage = () => {

  const [mainVideo, setMainVideo] = useState(videos[0]);

  const changeMainVideo = (id) => {
    const foundVideo = videos.find((video) => {
        return video.id === id;
    });

    setMainVideo(foundVideo);
  };

  const filteredVideos = videos.filter((video) => {
      return video.id !== mainVideo.id;
  });



    return (
    <>
     

      <MainVideoPlayer
        image={mainVideo.image}
        video={mainVideo.video}
        timestamp={mainVideo.timestamp}
      />
      
      <div className="app--desktop">
        <div className="app--tablet">
          <MainVideoDetails 
          title={mainVideo.title}
          channel={mainVideo.channel}
          description={mainVideo.description}
          views={mainVideo.views}
          likes={mainVideo.likes}
          timestamp={mainVideo.timestamp}
          />

          <CommentsSection
            comments={mainVideo.comments}
          />
        </div>
    
        <VideoList
          videos={filteredVideos}
          changeMainVideo={changeMainVideo}
        />

        </div>

    </>
)}

export default VideoPage;