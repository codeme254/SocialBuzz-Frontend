import "./Post.css";
import { BiUserPlus, BiLike, BiCommentDetail } from "react-icons/bi";
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
      {/* <form action="" className="post-comment">
        <input type="text" name="" id="" className="post-comment__input" />
        <button>comment</button>
      </form> */}
    </div>
  ) : null;
};

export default Post;
