import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./SignUp.css";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Loader from "../../components/Loader/Loader";
import { v4 } from 'uuid';
import { apiDomain } from "../../utils/utils";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from 'react-toastify';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profilePhotoUpload, setProfilePhotUpload] = useState(null);
  const [coverPhotoUpload, setCoverPhotoUpload] = useState(null);
  const navigate = useNavigate();

  const uploadProfilePhoto = () => {
    if (!profilePhotoUpload) return Promise.resolve(null);

    const imageRef = ref(storage, `profile_photos/${profilePhotoUpload.name + v4()}`);
    return uploadBytes(imageRef, profilePhotoUpload)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .catch((error) => {
        console.log("Error occurred while uploading the profile photo:", error);
        toast.error("There was an error uploading profile photo, please try again.")
        return null;
      });
  };

  const uploadCoverPhoto = () => {
    if (!coverPhotoUpload) return Promise.resolve(null);

    const imageRef = ref(storage, `cover_photos/${coverPhotoUpload.name + v4()}`);
    return uploadBytes(imageRef, coverPhotoUpload)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .catch((error) => {
        console.log("Error occurred while uploading the cover photo:", error);
        toast.error("There was an error uploading cover photo, please try again.")
        return null;
      });
  };

  const { register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = async data => {
    setIsSubmitting(true);
    try {
      const profilePhotoUrl = await uploadProfilePhoto();
      const coverPhotoUrl = await uploadCoverPhoto();
      if (profilePhotoUrl && coverPhotoUrl){
        data["profilePhoto"] = profilePhotoUrl;
        data["coverPhoto"] = coverPhotoUrl;

        const registerUser = await fetch(`${apiDomain}/users`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const responseData = await registerUser.json();
        if (registerUser.ok) {
          toast.success("Account successfully created")
          navigate("/login")
        } else {
          toast.error(responseData.message)
        }
      } else {
        toast.info("Please provide cover photo and/or profile photo")
      }
    } catch (e) {
      console.log("An error occurred while registering", e)
      toast.error("There was an error registering. Please try again")
    }
    setIsSubmitting(false);
  }

  return (
    <div className="sign-up-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
        { isSubmitting ? <Loader text="submitting your information please wait" /> : null}
        <div className="form-text-top">
          <Title text="Create your account" />
          <p>
            Create a free account to see photos, videos and updates from your
            friends
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="firstName" className="form-group-label">
            first name
          </label>
          <input
            type="text"
            id="firstName"
            className="form-group__textual-input"
            placeholder="first name"
            {...register("firstName", {required: true})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="form-group-label">
            last name
          </label>
          <input
            type="text"
            id="lastName"
            className="form-group__textual-input"
            placeholder="last name"
            {...register("lastName", {required: true})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailAddress" className="form-group-label">
            email address
          </label>
          <input
            type="email"
            id="emailAddress"
            className="form-group__textual-input"
            placeholder="email address eg johndoe@gmail.com"
            {...register("emailAddress", {required: true})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username" className="form-group-label">
            username
          </label>
          <input
            type="text"
            id="username"
            className="form-group__textual-input"
            placeholder="pick a username, be creative"
            {...register("username", {required: true})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="statusText" className="form-group-label">
            status text, could be something about you
          </label>
          <input
            type="text"
            id="statusText"
            className="form-group__textual-input"
            placeholder="eg hey there, am using SocialBuzz, or I love my life"
            {...register("statusText", {required: true})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-group-label">
            password
          </label>
          <input
            type="password"
            id="password"
            className="form-group__textual-input"
            placeholder="type a strong password"
            {...register("password", {required: true})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confPass" className="form-group-label">
            confirm password
          </label>
          <input
            type="password"
            id="confPass"
            className="form-group__textual-input"
            placeholder="confirm your password"
            {...register("confirmPassword", {required: true})}
          />
        </div>

        <div className="form-group">
          <label htmlFor="profilePhoto" className="form-group-label">
            upload profile photo
          </label>
          <input
            type="file"
            id="profilePhoto"
            className="form-group__textual-input"
            required
            onChange={(event) => setProfilePhotUpload(event.target.files[0])}
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverPhoto" className="form-group-label">
            upload a cover photo
          </label>
          <input
            type="file"
            id="coverPhoto"
            className="form-group__textual-input"
            required
            onChange={(event) => setCoverPhotoUpload(event.target.files[0])}
          />
        </div>

        <button type="submit" className="submit-btn">
          create account
        </button>

        <p className="form-guide">
          Already have an account? <Link to="/login">login</Link>
        </p>
      </form>
    </div>
  );
};
export default SignUp;
