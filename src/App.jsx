import { useState } from 'react';
import './App.scss';
import videos from './data/video-details.json';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import CommentsSection from './components/CommentsSection/CommentsSection';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [mainVideo, setMainVideo] = useState(videos[0]);


  const changeMainVideo = (idPassed) => {
    const foundVideo = videos.find((video) => {
        return video.id === idPassed;
    });

    setMainVideo(foundVideo);
  };

  const filteredVideos = videos.filter((video) => {

      return video.id !== mainVideo.id;
  });

  return (
    <>
      <Header />  

      <MainVideo
        title={mainVideo.title}
        channel={mainVideo.channel}
        image={mainVideo.image}
        description={mainVideo.description}
        views={mainVideo.views}
        likes={mainVideo.likes}
        duration={mainVideo.duration}
        video={mainVideo.video}
        timestamp={mainVideo.timestamp}
      />

      <CommentsSection 
        comments={mainVideo.comments}
        changeMainVideo={changeMainVideo}
      />

      <VideoList 
        videos={filteredVideos}
        changeMainVideo={changeMainVideo}
      /> 


    </>
  )
}

export default App
