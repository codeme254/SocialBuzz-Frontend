import Nav from "../../components/Nav/Nav";
import "./Feed.css";
import FeedUserDetails from "../../components/FeedUserDetails/FeedUserDetails";
import userImage from "../../assets/Images/user-image.jpg";
import coverPhoto from "../../assets/Images/cover-photo-example.jpg";
import FeedUserActionLinks from "../../components/FeedUserActionLinks/FeedUserActionLinks";
import Follows from "../../components/Follows/Follows";
import NewPost from "../../components/NewPost/NewPost";
const Feed = () => {
  return (
    <div className="feed__container">
      <Nav />
      <div className="feed__body">
        <div className="feed__body--left">
          <FeedUserDetails
            coverPhoto={coverPhoto}
            profilePhoto={userImage}
            fullName="dennis otwoma"
            aboutText="I love my life"
            username="@zaphenath254"
            numberOfFollowers="56"
            numberOfFollowing="35"
            numberOfPosts="15"
          />
          <FeedUserActionLinks />
        </div>
        <div className="feed__body--center">
          <NewPost userProfilePhoto={userImage} username="zaphenath254" />
        </div>
        <div className="feed__body--right">
          <Follows />
        </div>
      </div>
    </div>
  );
};
export default Feed;
