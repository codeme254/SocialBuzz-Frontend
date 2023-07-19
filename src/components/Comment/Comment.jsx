import "./Comment.css";

const Comment = ({
  userProfilePhoto,
  commentText,
  date,
  authorFirstName,
  authorLastName,
}) => {
  return (
    <div className="comment">
      <div className="comment__user-photo">
        <img
          src={userProfilePhoto}
          alt="user profile photo"
          className="comment__user-phot--img"
        />
      </div>
      <div className="comment__main">
        <div className="comment__main--header">
          <h3 className="comment__author-name">
            {authorFirstName} {authorLastName}
          </h3>
          <p className="comment__main-header--date">{date}</p>
        </div>
        <p className="comment__body">{commentText}</p>
      </div>
    </div>
  );
};
export default Comment;
