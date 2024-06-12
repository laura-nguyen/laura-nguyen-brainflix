import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import videos from './data/video-details.json';
import Header from './components/Header/Header';
import MainVideoPlayer from './components/MainVideoPlayer/MainVideoPlayer';
import MainVideoDetails from './components/MainVideoDetails/MainVideoDetails';
import CommentsSection from './components/CommentsSection/CommentsSection';
import VideoList from './components/VideoList/VideoList';

import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {

  return (
    <>
     


      <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/" element={<VideoPage />}>
              <Route path="/videos/:videoId" element={<VideoPage />} />  
        </Route>
        <Route path="/upload" element={<UploadPage/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
 
      {/* <Header />  

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

        </div> */}

    </>
  )
}

export default App;
