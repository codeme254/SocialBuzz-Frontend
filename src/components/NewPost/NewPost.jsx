import { AiOutlinePlus } from "react-icons/ai";
import "./NewPost.css";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useState } from "react";
import { AiFillFileImage } from "react-icons/ai";
import { UserContext } from "../../Helpers/Context";
import { useContext } from "react";
import { apiDomain } from "../../utils/utils";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const PostHeader = () => {
  const { socialBuzzUserData, setSocialBuzzUserData } = useContext(UserContext);
  return (
    <div className="post-header">
      <div className="post-header__user-photo">
        <img
          src={socialBuzzUserData && socialBuzzUserData.profilePhoto}
          alt="your profile photo"
        />
      </div>
      <p>
        Whats on your mind @{socialBuzzUserData && socialBuzzUserData.username}?
      </p>
    </div>
  );
};
// http://localhost:8081/posts

const NewPost = ({ userProfilePhoto, username }) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [postPhoto, setPostPhoto] = useState(null);
  const [postPhotoUrl, setPostPhotoUrl] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadPostPhoto = () => {
    if (!postPhoto) return Promise.resolve(null);
    console.log(`This is the post photo being uploaded...`);
    console.log(postPhoto);
    const imageRef = ref(
      storage,
      `social_buzz_post_photos/${postPhoto.name + v4()}`
    );
    return uploadBytes(imageRef, postPhoto)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .catch((error) => {
        console.log("Error occurred while uploading the profile photo:", error);
        toast.error(
          "There was an error uploading post photo, please try again."
        );
        return null;
      });
  };

  const onSubmit = async (data) => {
    if (!username) return;
    setIsLoading(true);
    data["username"] = username;
    if (postPhoto) {
      console.log("Uploading with the post photo");
      const imageUrl = await uploadPostPhoto();
      if (imageUrl) {
        setPostPhotoUrl(imageUrl);
      } else {
        toast.error("An error occurred while uploading your post image");
        return;
      }
    }
    console.log(`Post photo url is ${postPhotoUrl}`);
    data["image"] = postPhotoUrl;
    if (data["text"] === "") data["text"] = null;
    const response = await fetch(`${apiDomain}/posts`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (response.ok) {
      toast.success("Post published successfully");
    } else {
      toast.error(responseData.message);
    }
    setModal(false);
    setIsLoading(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setPostPhoto(file);
    }
  };

  return (
    <div className="new-post">
      <PureModal
        portal={true}
        width="700px"
        header={<PostHeader />}
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        {isLoading ? <Loader text="Publishing your post..." /> : null}
        <form className="new-post-form" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="post-input-text"
            name=""
            id=""
            cols="30"
            rows="20"
            placeholder={
              username
                ? `What do you want to talk about ${username}...`
                : `What do you want to talk about...`
            }
            {...register("text")}
          ></textarea>
          <div className="image-preview">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="preview of your image upload"
                className="image-preview"
                // onChange={(event) => setPostPhoto(event.target.files[0])}
              />
            )}
          </div>
          <div className="file-upload">
            <p className="file-upload-prompt">
              Add an image, video, document to your post (optional)
            </p>
            <div className="file-inputs">
              <button className="button-file-input" type="button">
                <AiFillFileImage />
                <input type="file" name="" id="" onChange={handleFileChange} />
              </button>
            </div>
          </div>
          <div className="publish-post-cont">
            <button type="submit" className="publish-btn">
              publish post
            </button>
          </div>
        </form>
      </PureModal>
      ;
      <div className="new-post__top">
        <div className="new-post__user-image">
          <img
            src={userProfilePhoto}
            alt="user profile photo"
            className="new-post__user-image--img"
          />
        </div>
        <button
          className="new-post-btn new-post-button-alt"
          onClick={() => setModal(true)}
        >
          What's on your mind {username}
        </button>
      </div>
      <div className="new-post__bottom">
        <button
          className="new-post-btn new-post-btn-main"
          onClick={() => setModal(true)}
        >
          <AiOutlinePlus /> Start a new post
        </button>
      </div>
    </div>
  );
};
export default NewPost;
