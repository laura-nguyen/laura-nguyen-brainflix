import "./MainVideo.scss";

const MainVideo = ({title, channel, image, description, views, likes, duration, video, timestamp}) => {
    return (
        <main className="main-video">
        
        <video className="main-video__player" controls poster={image}>
            <source src={video}  type="video/mp4"/>
        </video>
        <div className="main-video__content">
            <h1 className="main-video__title">{title}</h1>
            <div className="main-video__info">
                <p className="main-video__author">{channel}</p>
                <p className="main-video__date">{timestamp}</p>
                <div className="main-video__views">
                    <img src="src/assets/icons/views.svg" alt="views icon" />
                    <p className="main-video__views-count">{views}</p>
                </div>
                <div className="main-video__likes">
                    <img src="src/assets/icons/likes.svg" alt="likes icon" />
                    <p className="main-video__likes-count">{likes}</p>
                </div>
            </div>
            <p className="main-video__description">{description}</p>

        </div>

            
        </main>
    )
    
}

// {
//     "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
//     "title": "The Future of Artificial Intelligence",
//     "channel": "Aiden Thompson",
//     "image": "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg",
//     "description": "Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.",
//     "views": "980,544",
//     "likes": "22,479",
//     "duration": "4:01",
//     "video": "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
//     "timestamp": 1691471862000,


export default MainVideo