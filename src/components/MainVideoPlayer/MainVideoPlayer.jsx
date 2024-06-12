import "./MainVideoPlayer.scss";

const MainVideoPlayer = ({image, video, timestamp }) => {
    const formattedDate = new Date(timestamp).toLocaleString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" });

    return (
        <div className="main-video">
            <div className="main-video__player-wrapper">
                <video className="main-video__player" controls poster={image}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>

        </div>
    );
};

export default MainVideoPlayer;
