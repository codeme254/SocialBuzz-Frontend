import "./Follows.css";
import Follow from "./Follow";
import { apiDomain } from "../../utils/utils";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../Helpers/Context";
// http://localhost:8081/follows/not_following/dennis_otwoma
const Follows = () => {
  const { socialBuzzUserData, setSocialBuzzUserData } = useContext(UserContext);
  const username = socialBuzzUserData.username;
  const [follows, setFollows] = useState([])

  useEffect(() => {
    if (!username) return;
    const fetchFollows = async () => {
      const follows = await fetch(`${apiDomain}/follows/not_following/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const followsData = await follows.json()
      if (Array.isArray(followsData)) setFollows(followsData)
    }
    fetchFollows()
  }, [])
  return (
    <div className="follows">
      {
        follows.length <= 0 ? <p>No follower found at this time...</p> :
        <div>
          <h3 className="follows__title">who to follow</h3>
          {follows.map((follow, i) => (
          <Follow key={i} profilePhoto={follow.profilePhoto} firstName={follow.firstName} lastName={follow.lastName} username={follow.username} />
        ))}
        </div>
      }
    </div>
  );
};

export default Follows;
