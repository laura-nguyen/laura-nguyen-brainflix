import "./MainVideoPlayer.scss";
import { getVideoEndpoint } from "../../utils/utils";

import { useState, useEffect } from "react";

import axios from "axios";

const MainVideoPlayer = ({ selectedVideoId }) => {

    const [mainVideo, setMainVideo] = useState(null);

    const getMainVideo = async (videoId) => {
        try {
            let res = await axios.get(getVideoEndpoint(videoId));

            setMainVideo(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        getMainVideo(selectedVideoId);
    }, [selectedVideoId]); 

    if (! mainVideo) {
        return <p>loading...</p>;
      }

    return (
        <div className="main-video">
            <div className="main-video__player-wrapper">
                <video className="main-video__player" controls poster={mainVideo.image}>
                    <source src={mainVideo.video} type="video/mp4" />
                </video>
            </div>

        </div>
    );
};

export default MainVideoPlayer;
