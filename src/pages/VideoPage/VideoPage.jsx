import MainVideoPlayer from './../../components/MainVideoPlayer/MainVideoPlayer';
import MainVideoDetails from './../../components/MainVideoDetails/MainVideoDetails';
import CommentsSection from './../../components/CommentsSection/CommentsSection';
import VideoList from './../../components/VideoList/VideoList';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getVideoDetails } from '../../utils/utils';

import axios from 'axios';

const VideoPage = () => {

  const [videos, setVideos] = useState([]);

  const { videoId } = useParams();

  const getVideos = async () => {
    let res = await axios.get(getVideoDetails());
    setVideos(res.data);
};

useEffect(() => {
  getVideos();
}, []);

if (videos.length < 1) {
  return <p>loading...</p>;
}

const selectedVideoId = videoId || videos[0].id;

  const filteredVideos = videos.filter((video) => {
      return video.id !== selectedVideoId;
  });

    return (
    <>

      <MainVideoPlayer
        selectedVideoId={selectedVideoId}
      />
      
      <div className="app--desktop">
        <div className="app--tablet">
          <MainVideoDetails 
          selectedVideoId={selectedVideoId}
          />

          <CommentsSection
            selectedVideoId={selectedVideoId}
          />
        </div>
    
        <VideoList
          videos={filteredVideos}
        />

        </div>

    </>
)}

export default VideoPage;