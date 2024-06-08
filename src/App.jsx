import { useState } from 'react';
import './App.scss';
import videos from './data/video-details.json';
import Header from './components/Header/Header';
import MainVideoPlayer from './components/MainVideoPlayer/MainVideoPlayer';
import MainVideoDetails from './components/MainVideoDetails/MainVideoDetails';
import CommentsSection from './components/CommentsSection/CommentsSection';
import VideoList from './components/VideoList/VideoList';

function App() {
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
      <Header />  

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
  )
}

export default App;
