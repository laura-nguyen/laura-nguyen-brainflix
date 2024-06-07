import "./MainVideo.scss";

const MainVideo = ({ title, channel, image, description, views, likes, duration, video, timestamp }) => {
    const formattedDate = new Date(timestamp).toLocaleString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" });

    return (
        <main className="main-video">
            <div className="main-video__player-wrapper">
                <video className="main-video__player" controls poster={image}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="main-video__content">
                <h1 className="main-video__title">{title}</h1>
                <div className="main-video__info">
                    <div className="main-video__upload">
                        <p className="main-video__author">{`By ${channel}`}</p>
                        <p className="main-video__date">{formattedDate}</p>
                    </div>
                    <div className="main-video__stats">
                        <div className="main-video__views">
                            <img src="src/assets/icons/views.svg" alt="views icon" />
                            <p className="main-video__views-count">{views}</p>
                        </div>
                        <div className="main-video__likes">
                            <img src="src/assets/icons/likes.svg" alt="likes icon" />
                            <p className="main-video__likes-count">{likes}</p>
                        </div>
                    </div>
                </div>
                <p className="main-video__description">{description}</p>
            </div>
        </main>
    );
};

export default MainVideo;
