import Post from "../Post/Post";
import userImage from "../../assets/Images/user-6.jpg";
import photoPostExample from "../../assets/Images/ppe.jpg";
import { apiDomain, samplePostText } from "../../utils/utils";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await fetch(`${apiDomain}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const posts_response = await posts.json();
      setPosts(posts_response);
    };
    fetchPosts();
  }, []);
  return (
    <div className="posts">
      {posts.length <= 0 ? (
        <p>No posts found at this time</p>
      ) : (
        posts.map((post, i) => (
          <Post
            key={post.post_id}
            post_id={post.post_id}
            userProfilePhoto={post.profilePhoto}
            userFirstName={post.firstName}
            userLastName={post.lastName}
            datePosted={`${new Date(post.dateCreated).toUTCString()}`}
            postText={post.text}
            postImage={post.image}
            numLikes={post.numberOfLikes}
            numComments={post.numberOfComments}
          />
        ))
      )}
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
