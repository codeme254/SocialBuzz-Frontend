import Nav from "../../components/Nav/Nav";
import CommunityMember from "./CommunityMember";
import "./Community.css";
import testPhoto from "../../assets/Images/user-photo-test.jpg";
import bgPhotoTest from "../../assets/Images/cp-7.jpg";

import { useState, useEffect } from "react";
import { apiDomain } from "../../utils/utils";

const Community = () => {
  const [allCommunityMembers, setAllCommunityMembers] = useState([]);
  useEffect(() => {
    const fetchAllCommunityMembers = async () => {
      const response = await fetch(`${apiDomain}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const community = await response.json();
      if (Array.isArray(community)) setAllCommunityMembers(community);
    };
    fetchAllCommunityMembers();
  }, []);
  return (
    <>
      <Nav />
      <div className="community">
        <div>
          <h3 className="community-title">All community members</h3>
          <div className="community-container">
            {allCommunityMembers.length <= 0 ? (
              <p>Cannot get any member right now</p>
            ) : (
              allCommunityMembers.map((member, i) => (
                <CommunityMember
                  key={i}
                  profilePhoto={member.profilePhoto}
                  coverPhoto={member.coverPhoto}
                  firstName={member.firstName}
                  lastName={member.lastName}
                  username={member.username}
                  dateJoined={new Date(member.dateCreated).toUTCString()}
                  numberOfFollowers={member.numberOfFollowers}
                  numberOfFollowing={member.numberOfFollowing}
                  numberOfPosts={member.numberOfPosts}
                />
              ))
            )}
          </div>
        </div>
        {/* <CommunityMember
          profilePhoto={testPhoto}
          coverPhoto={bgPhotoTest}
          firstName="Dennis"
          lastName="otwoma"
          username="dennis"
          dateJoined="4th august 2023"
          numberOfFollowers="12"
          numberOfFollowing="23"
          numberOfPosts="18"
        /> */}
      </div>
    </>
  );
};

export default Community;
