import "./FeedUserDetails.css";

const FeedUserDetails = ({
  coverPhoto,
  profilePhoto,
  fullName,
  aboutText,
  username,
  numberOfFollowers,
  numberOfFollowing,
  numberOfPosts,
}) => {
  return (
    <div className="feed-user-details">
      <div className="feed-user-details__cover-photo">
        <img src={coverPhoto} alt="cover photo" />
      </div>
      <div className="feed-user-details__user">
        <div className="feed-user-details__image">
          <img
            src={profilePhoto}
            alt="profile photo"
            className="feed-user-details__image--img"
          />
        </div>
        <div className="user-details">
          <h2 className="user-details__full-name">{fullName}</h2>
          <p className="user-details__about-text">{aboutText}</p>
          <div className="user-details__username">{username}</div>
        </div>
      </div>
      <div className="user-stats">
        <div className="user-stat">
          <h3 className="user-stat--count">{numberOfFollowers}</h3>
          <p className="user-stat--type">followers</p>
        </div>
        <div className="user-stat">
          <h3 className="user-stat--count">{numberOfFollowing}</h3>
          <p className="user-stat--type">following</p>
        </div>
        <div className="user-stat">
          <h3 className="user-stat--count">{numberOfPosts}</h3>
          <p className="user-stat--type">followers</p>
        </div>
      </div>
    </div>
  );
};

export default FeedUserDetails;
