import MainVideoPlayer from './../../components/MainVideoPlayer/MainVideoPlayer';
import VideoContent from './../../components/VideoContent/VideoContent';

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
      
      <VideoContent
        selectedVideoId={selectedVideoId}
        filteredVideos={filteredVideos}
      />

    </>
)}

export default VideoPage;