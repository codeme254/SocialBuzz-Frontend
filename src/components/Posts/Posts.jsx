import Post from "../Post/Post";
import userImage from "../../assets/Images/user-6.jpg";
import photoPostExample from "../../assets/Images/ppe.jpg";

const samplePostText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
anim id est laborum.`;

const Posts = () => {
  return (
    <div className="posts">
      <Post
        userProfilePhoto={userImage}
        userFirstName="jane"
        userLastName="krugger"
        datePosted="4th March 2023, at 4:05PM"
        postText={samplePostText}
        postImage={photoPostExample}
        numLikes="356"
        numComments="35"
      />

      <Post
        userProfilePhoto={userImage}
        userFirstName="jane"
        userLastName="krugger"
        datePosted="4th March 2023, at 4:05PM"
        // postText={samplePostText}
        postImage={photoPostExample}
        numLikes="356"
        numComments="35"
      />

      <Post
        userProfilePhoto={userImage}
        userFirstName="jane"
        userLastName="krugger"
        datePosted="4th March 2023, at 4:05PM"
        postText={samplePostText}
        // postImage={photoPostExample}
        numLikes="356"
        numComments="35"
      />

      <Post
        userProfilePhoto={userImage}
        userFirstName="jane"
        userLastName="krugger"
        datePosted="4th March 2023, at 4:05PM"
        postText={samplePostText}
        postImage={photoPostExample}
        numLikes="356"
        numComments="35"
      />

      <Post
        userProfilePhoto={userImage}
        userFirstName="jane"
        userLastName="krugger"
        datePosted="4th March 2023, at 4:05PM"
        postText={samplePostText}
        postImage={photoPostExample}
        numLikes="356"
        numComments="35"
      />
    </div>
  );
};

export default Posts;
