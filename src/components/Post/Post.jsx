import "./Post.css";
import { BiUserPlus, BiLike, BiCommentDetail, BiSend } from "react-icons/bi";
import { UserContext } from "../../Helpers/Context";
import { useContext } from "react";
import Comment from "../Comment/Comment";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { apiDomain } from "../../utils/utils";

const Post = ({
  userProfilePhoto,
  userFirstName,
  userLastName,
  datePosted,
  postText,
  postImage,
  numLikes,
  // numComments,
  post_id,
}) => {
  const { socialBuzzUserData, setSocialBuzzUserData } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [numComments, setNumComments] = useState(0);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const { register, handleSubmit } = useForm();
  const username = socialBuzzUserData.username;

  useEffect(() => {
    if (!post_id) return;
    const fetchPostComments = async () => {
      const response = await fetch(`${apiDomain}/comments/${post_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const comments = await response.json();
      if (Array.isArray(comments)) {
        setComments(comments);
        setNumComments(comments.length);
      }
    };
    setIsSubmittingComment(true);
    fetchPostComments();
    setIsSubmittingComment(false);
  }, [comments]);

  const onSubmit = async (data) => {
    if (!username) return;
    if (!post_id) return;
    data["author"] = username;

    const newComment = await fetch(`${apiDomain}/comments/${post_id}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (newComment.ok) {
      console.log("Comment added successfully")
    } else {
      console.log(`Not successfully done`);
    }
  };
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
        <form className="post-comment" onSubmit={handleSubmit(onSubmit)}>
          {isSubmittingComment ? (
            <div className="post-comment-submitting">
              Submitting your comment
            </div>
          ) : null}
          <div className="post-comment__current-user-image">
            <img
              src={socialBuzzUserData && socialBuzzUserData.profilePhoto}
              alt="your profile photo"
            />
          </div>
          <input
            type="text"
            {...register("comment_text")}
            placeholder={
              socialBuzzUserData
                ? `What do you think about this ${socialBuzzUserData.username}...`
                : `What do you think about this...`
            }
            className="post-comment__input"
          />
          <button className="post-submit-btn">
            <BiSend />
          </button>
        </form>

        <div className="post__comments">
          {comments.length <= 0 ? (
            <p className="no-comments-text">
              No comments, be the first to comment
            </p>
          ) : (
            comments.map((comment, i) => (
              <Comment
                userProfilePhoto={comment.author.profilePhoto}
                commentText={comment.comment_text}
                authorFirstName={comment.author.firstName}
                authorLastName={comment.author.lastName}
                date={new Date(comment.dateCreated).toUTCString()}
              />
            ))
          )}
        </div>
      </div>
    </div>
  ) : null;
};
export default Post;
