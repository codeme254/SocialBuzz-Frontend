import { AiOutlinePlus } from "react-icons/ai";
import "./NewPost.css";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const NewPost = ({ userProfilePhoto, username }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="new-post">
      <PureModal
        portal={true}
        width="800px"
        header="Create new post"
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
            rows="10"
            placeholder="what do you want to talk about"
          ></textarea>
          <div className="file-upload">
            <p className="file-upload-prompt">
              Add an image, video, document to your post (optional)
            </p>
            <div className="file-inputs">
              {/* <button className="button-file-input" type="button">
                <MdPhotoCamera />
                <input type="file" name="" id="" />
              </button> */}
              <button className="button-file-input" type="button">
                <AiFillFileImage />
                <input type="file" name="" id="" />
              </button>
            </div>
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
        <button className="new-post-btn new-post-button-alt">
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
