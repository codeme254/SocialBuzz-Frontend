import { AiOutlinePlus } from "react-icons/ai";
import "./NewPost.css";
const NewPost = ({ userProfilePhoto, username }) => {
  return (
    <div className="new-post">
      <div className="new-post__top">
        <div className="new-post__user-image">
          <img
            src={userProfilePhoto}
            alt="user profile photo"
            className="new-post__user-image--img"
          />
        </div>
        <button className="new-post-btn new-post-button-alt">
          What's on your mind @{username}
        </button>
      </div>
      <div className="new-post__bottom">
        <button className="new-post-btn new-post-btn-main">
          <AiOutlinePlus /> Start a new post
        </button>
      </div>
    </div>
  );
};
export default NewPost;
