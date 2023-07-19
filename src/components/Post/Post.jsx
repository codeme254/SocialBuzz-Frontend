import "./Post.css";
import { BiUserPlus, BiLike, BiCommentDetail, BiSend } from "react-icons/bi";
import { UserContext } from "../../Helpers/Context";
import { useContext } from "react";
import Comment from "../Comment/Comment";
import sampleProfilePicture from "../../assets/Images/user-3.jpg";
import sampleProfilePicture2 from "../../assets/Images/user-8.jpg";

const Post = ({
  userProfilePhoto,
  userFirstName,
  userLastName,
  datePosted,
  postText,
  postImage,
  numLikes,
  numComments,
}) => {
  const { socialBuzzUserData, setSocialBuzzUserData } = useContext(UserContext);
  return postImage || postText ? (
    <div className="post">
      <div className="post-user">
        <div className="post-user__left">
          <div className="post-user__user-photo">
            <img
              src={userProfilePhoto}
              alt="user profile photo"
              className="post-user__user-photo--photo"
            />
          </div>
          <div className="post-user__details">
            <h5 className="post-user__details--name">
              {userFirstName} {userLastName}
            </h5>
            <p className="post-user__details--date">{datePosted}</p>
          </div>
        </div>
        <button className="post-follow-user__btn">
          <BiUserPlus /> follow
        </button>
      </div>
      <div className="post-body">
        {postText && <p className="post-body__text">{postText}</p>}
        {postImage && (
          <div className="post-image">
            <img src={postImage} alt="post image" />
          </div>
        )}
        <div className="post-likes-comments">
          <button className="post__lc-btn post-likes-comments--btn">
            <BiLike />
            {numLikes} likes
          </button>
          <button className="post__lc-btn post-likes-comments--btn">
            <BiCommentDetail />
            {numComments} comments
          </button>
        </div>
      </div>
      <div className="post__bottom">
        <form action="" className="post-comment">
          <div className="post-comment__current-user-image">
            <img
              src={socialBuzzUserData && socialBuzzUserData.profilePhoto}
              alt="your profile photo"
            />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="what are your thoughts..."
            className="post-comment__input"
          />
          <button className="post-submit-btn">
            <BiSend />
          </button>
        </form>

        <div className="post__comments">
          <Comment
            authorFirstName="Jane"
            authorLastName="dodds"
            date="9th June 2023 at 4:05pm"
            commentText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque nihil quam culpa doloremque magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque nihil quam culpa doloremque magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque nihil quam culpa doloremque magnam"
            userProfilePhoto={sampleProfilePicture}
          />

          <Comment
            authorFirstName="Cynthia"
            authorLastName="warimwe"
            date="9th June 2023 at 4:05pm"
            commentText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque nihil quam culpa doloremque magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque nihil quam culpa doloremque magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque nihil quam culpa doloremque magnam"
            userProfilePhoto={sampleProfilePicture2}
          />
        </div>
      </div>
    </div>
  ) : null;
};
export default Post;
