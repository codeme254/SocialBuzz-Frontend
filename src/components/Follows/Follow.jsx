import { BiUserPlus } from "react-icons/bi";
const Follow = ({ profilePhoto, firstName, lastName, username }) => {
  return (
    <div className="follow">
      <div className="follow__image">
        <img
          src={profilePhoto}
          alt="user profile photo"
          className="follow__image--img"
        />
      </div>
      <div className="user-details">
        <h5 className="user-details__name">
          {firstName} {lastName}
        </h5>
        <p className="user-details__username">{username}</p>
        <button className="user-details__follow-btn">
          {" "}
          <BiUserPlus /> Follow
        </button>
      </div>
    </div>
  );
};
export default Follow;
