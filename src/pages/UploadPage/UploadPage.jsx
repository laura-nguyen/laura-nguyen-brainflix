import uploadVideoThumbnail from "./../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import './UploadPage.scss';

const UploadPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Video uploaded successfully!');
        navigate('/');
    };

    return (
        <div className="upload-wrapper">
            <h1 className="upload__header">Upload Video</h1>
            <div className="upload__content-wrapper">
                <div className="upload__thumbnail-wrapper">
                    <h4 className="upload__thumbnail-label">Video Thumbnail</h4>
                    <img className="upload__thumbnail-img" src={uploadVideoThumbnail} alt="man with a baton who is ready to race on a track and field arena" />
                </div>
                <form className="upload__form" id="uploadForm" onSubmit={handleSubmit}>
                    <label className="form__title-label" htmlFor="uploadVideoTitle">Title Your Video</label>
                    <input className="form__title-input" type="text" id="uploadVideoTitle" placeholder="Add a title to your video"/>
                    <label className="form__description-label" htmlFor="uploadVideoDescription">Add a Video Description</label>
                    <textarea className="form__description-input" name="uploadVideoDescription" id="uploadVideoDescription" placeholder="Add a description to your video"></textarea>
                    <div className="form__btn-wrapper">
                        <button className="form__btn--publish" type="submit">Publish</button>
                        <button className="form__btn--cancel" type="button" onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadPage;
