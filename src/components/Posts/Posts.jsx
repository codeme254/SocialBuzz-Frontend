import Post from "../Post/Post";
import userImage from "../../assets/Images/user-6.jpg";
import photoPostExample from "../../assets/Images/ppe.jpg";
import { apiDomain, samplePostText } from "../../utils/utils";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    fetchPosts();
    setIsLoading(false);
  }, []);
  return (
    <div className="posts">
      {isLoading && <p>Loading posts, please wait...</p>}
      {posts.length <= 0 ? (
        <p>No posts found at this time</p>
      ) : (
        posts.map((post, i) => (
          <Post
            key={post.post_id}
            post_id={post.post_id}
            userProfilePhoto={post.author.profilePhoto}
            userFirstName={post.author.firstName}
            userLastName={post.author.lastName}
            datePosted={`${new Date(post.dateCreated).toUTCString()}`}
            postText={post.text}
            postImage={post.image}
            numLikes={post.numberOfLikes}
            // numComments={post.numberOfComments}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
