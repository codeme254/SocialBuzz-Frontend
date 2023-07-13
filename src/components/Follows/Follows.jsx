import "./Follows.css";
import Follow from "./Follow";
import examplePhoto1 from "../../assets/Images/user-7.jpg";
const Follows = () => {
  return (
    <div className="follows">
      <h3 className="follows__title">who to follow</h3>

      <Follow
        firstName="eve"
        lastName="candy"
        username="Mutunga_OJ"
        profilePhoto={examplePhoto1}
      />
      <Follow
        firstName="eve"
        lastName="candy"
        username="Mutunga_OJ"
        profilePhoto={examplePhoto1}
      />
      <Follow
        firstName="eve"
        lastName="candy"
        username="Mutunga_OJ"
        profilePhoto={examplePhoto1}
      />
      <Follow
        firstName="eve"
        lastName="candy"
        username="Mutunga_OJ"
        profilePhoto={examplePhoto1}
      />
      <Follow
        firstName="eve"
        lastName="candy"
        username="Mutunga_OJ"
        profilePhoto={examplePhoto1}
      />
      <Follow
        firstName="eve"
        lastName="candy"
        username="Mutunga_OJ"
        profilePhoto={examplePhoto1}
      />
    </div>
  );
};

export default Follows;
