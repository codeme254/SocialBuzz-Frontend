import { BiUserPlus } from "react-icons/bi";
import { UserContext } from "../../Helpers/Context";
import { useContext } from 'react';
import {toast} from 'react-toastify';
import { apiDomain } from "../../utils/utils";

const Follow = ({ profilePhoto, firstName, lastName, username }) => {
  const { socialBuzzUserData, setSocialBuzzUserData } = useContext(UserContext);
  const currentUser = socialBuzzUserData.username;
  const handleFollow = async () => {
    if (!currentUser && !username) return toast.error("Failed...")
    const followUser = await fetch(`${apiDomain}/follows/${username}/${currentUser}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const followResponse = await followUser.json()
    if (followUser.ok){
      return toast.success(`${followResponse.message}, you will see updated info next time you log in`)
    } else {
      return toast.error(followResponse.message)
    }
  }
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
        <button className="user-details__follow-btn" onClick={handleFollow}>
          {" "}
          <BiUserPlus /> Follow
        </button>
      </div>
    </div>
  );
};
export default Follow;
