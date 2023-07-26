const CommunityMember = ({
  profilePhoto,
  coverPhoto,
  firstName,
  lastName,
  username,
  dateJoined,
  numberOfFollowers,
  numberOfFollowing,
  numberOfPosts,
}) => {
  return (
    <div className="member">
      <div className="member--images">
        <img
          src={coverPhoto}
          alt="cover photo"
          className="member__images--cover-photo"
        />
        <img
          src={profilePhoto}
          alt="profile photo"
          className="member__images--profile-photo"
        />
      </div>
      <div className="member__details">
        <h3 className="member__details--name">
          {firstName} {lastName}
        </h3>
        <p className="member__details--username">as @{username}</p>
        <p className="member__details--join-date">
          Joined notemate on {dateJoined}
        </p>

        <div className="member__stats">
          <div className="member__stat">
            <h5>{numberOfFollowers}</h5>
            <p>Followers</p>
          </div>
          <div className="member__stat">
            <h5>{numberOfFollowing}</h5>
            <p>Following</p>
          </div>
          <div className="member__stat">
            <h5>{numberOfPosts}</h5>
            <p>Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunityMember;
