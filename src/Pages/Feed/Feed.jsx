import Nav from "../../components/Nav/Nav";
import "./Feed.css";
import FeedUserDetails from "../../components/FeedUserDetails/FeedUserDetails";
import userImage from "../../assets/Images/user-image.jpg";
import coverPhoto from "../../assets/Images/cover-photo-example.jpg";
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
        </div>
        <div className="feed__body--center">
          <h3>Center part of the feed body</h3>
        </div>
        <div className="feed__body--right">
          <h3>right side of the feed body</h3>
        </div>
      </div>
    </div>
  );
};
export default Feed;
