import { useState } from 'react';
import './App.scss';
import videos from './data/video-details.json';
import Header from './components/Header/Header';
import MainVideo from './components/SelectedVideo/SelectedVideo';
import CommentSection from './components/CommentSection/CommentSection';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  // console.log(videos);




    


  return (
    <>
      <Header />  

      <VideoList 
        videos={videos}

      /> 


    </>
  )
}

export default App
