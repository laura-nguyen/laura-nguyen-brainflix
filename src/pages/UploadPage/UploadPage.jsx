import uploadVideoThumbnail from "./../../assets/images/Upload-video-preview.jpg";
import './UploadPage.scss';


const UploadPage = () => {
    return (
    <div className="upload-wrapper">
        <h1 className="upload__header">Upload Video</h1>
        <div className="upload__content-wrapper">
            <div className="upload__thumbnail-wrapper">
                <h4 className="upload__thumbnail-label">Video Thumbnail</h4>
                <img className="upload__thumbnail-img" src={uploadVideoThumbnail} alt="man with a baton who is ready to race on a track and field arena" />
            </div>
            <form className="upload__form" action="">
            <label className="form__title-label" htmlFor="">Title Your Video</label>
            <input className="form__title-input" type="text"placeholder="Add a title to your video"/>
            <label className="form__description-label" htmlFor="uploadVideoDescription">Add a Video Description</label>
            <textarea className="form__description-input" name="uploadVideoDescription"placeholder="Add a description to your video"></textarea>
            </form>
            
        </div>
        <div className="form__btn-wrapper">
                <button form="upload__form" className="form__btn--publish" >Publish</button>
                <button form="upload__form" className="form__btn--cancel">Cancel</button>
            </div>
    

    </div>
)}

export default UploadPage;