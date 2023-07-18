import Nav from "../../components/Nav/Nav";
import "./Feed.css";
import FeedUserDetails from "../../components/FeedUserDetails/FeedUserDetails";
import userImage from "../../assets/Images/user-image.jpg";
import coverPhoto from "../../assets/Images/cover-photo-example.jpg";
import FeedUserActionLinks from "../../components/FeedUserActionLinks/FeedUserActionLinks";
import Follows from "../../components/Follows/Follows";
import NewPost from "../../components/NewPost/NewPost";
import Posts from "../../components/Posts/Posts";
import { UserContext } from "../../Helpers/Context";
import { useContext } from "react";
const Feed = () => {
  const { socialBuzzUserData, setSocialBuzzUserData } = useContext(UserContext);

  return (
    <div className="feed__container">
      <Nav />
      <div className="feed__body">
        <div className="feed__body--left">
          <FeedUserDetails
            coverPhoto={socialBuzzUserData && socialBuzzUserData.coverPhoto}
            profilePhoto={socialBuzzUserData && socialBuzzUserData.profilePhoto}
            fullName={
              socialBuzzUserData &&
              `${socialBuzzUserData.firstName} ${socialBuzzUserData.lastName}`
            }
            aboutText={socialBuzzUserData && socialBuzzUserData.statusText}
            username={socialBuzzUserData && `@${socialBuzzUserData.username}`}
            numberOfFollowers={socialBuzzUserData && socialBuzzUserData.numberOfFollowers}
            numberOfFollowing={socialBuzzUserData && socialBuzzUserData.numberOfFollowing}
            numberOfPosts={socialBuzzUserData && socialBuzzUserData.numberOfPosts}
          />
          <FeedUserActionLinks />
        </div>
        <div className="feed__body--center">
          <NewPost
            userProfilePhoto={
              socialBuzzUserData && socialBuzzUserData.profilePhoto
            }
            username={socialBuzzUserData && `@${socialBuzzUserData.username}`}
          />
          <Posts />
        </div>
        <div className="feed__body--right">
          <Follows />
        </div>
      </div>
    </div>
  );
};
export default Feed;
