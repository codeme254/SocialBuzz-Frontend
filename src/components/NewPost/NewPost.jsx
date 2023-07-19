import { AiOutlinePlus } from "react-icons/ai";
import "./NewPost.css";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";
import { AiFillFileImage } from "react-icons/ai";
import { UserContext } from "../../Helpers/Context";
import { useContext } from "react";

const PostHeader = () => {
  const { socialBuzzUserData, setSocialBuzzUserData } = useContext(UserContext);
  return (
    <div className="post-header">
      <div className="post-header__user-photo">
        <img
          src={socialBuzzUserData && socialBuzzUserData.profilePhoto}
          alt="your profile photo"
        />
      </div>
      <p>
        Whats on your mind @{socialBuzzUserData && socialBuzzUserData.username}?
      </p>
    </div>
  );
};

const NewPost = ({ userProfilePhoto, username }) => {
  const [modal, setModal] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="new-post">
      <PureModal
        portal={true}
        width="700px"
        header={<PostHeader />}
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <form className="new-post-form">
          <textarea
            className="post-input-text"
            name=""
            id=""
            cols="30"
            rows="20"
            placeholder="what do you want to talk about"
          ></textarea>
          <div className="image-preview">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="preview of your image upload"
                className="image-preview"
              />
            )}
          </div>
          <div className="file-upload">
            <p className="file-upload-prompt">
              Add an image, video, document to your post (optional)
            </p>
            <div className="file-inputs">
              <button className="button-file-input" type="button">
                <AiFillFileImage />
                <input type="file" name="" id="" onChange={handleFileChange} />
              </button>
            </div>
          </div>
          <div className="publish-post-cont">
            <button type="submit" className="publish-btn">
              publish post
            </button>
          </div>
        </form>
      </PureModal>
      ;
      <div className="new-post__top">
        <div className="new-post__user-image">
          <img
            src={userProfilePhoto}
            alt="user profile photo"
            className="new-post__user-image--img"
          />
        </div>
        <button
          className="new-post-btn new-post-button-alt"
          onClick={() => setModal(true)}
        >
          What's on your mind {username}
        </button>
      </div>
      <div className="new-post__bottom">
        <button
          className="new-post-btn new-post-btn-main"
          onClick={() => setModal(true)}
        >
          <AiOutlinePlus /> Start a new post
        </button>
      </div>
    </div>
  );
};
export default NewPost;
