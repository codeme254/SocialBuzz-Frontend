import "./UserAccount.css";
import Nav from "../../components/Nav/Nav";
import { UserContext } from "../../Helpers/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { apiDomain } from "../../utils/utils";

// http://localhost:8081/users/eve
const UserAccount = () => {
  const { socialBuzzUserData, setSocialBuzzUserData } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const username = socialBuzzUserData.username;
    if (!username) return;
    const response = await fetch(`${apiDomain}/users/${username}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (response.ok) {
      toast.success("Update done successfully");
      setSocialBuzzUserData(responseData);
      navigate("/feed");
    } else {
      toast.error(responseData.message);
    }
  };

  return (
    <div className="user-account-container">
      <Nav />
      <div className="account-details">
        <div className="user-account-container__profile-cover-photo">
          <img
            src={socialBuzzUserData && socialBuzzUserData.coverPhoto}
            alt="cover photo"
            className="user-account__cover-photo"
          />
          <div className="user-account-profile-photo">
            <img
              src={socialBuzzUserData && socialBuzzUserData.profilePhoto}
              alt="your profile photo"
              className="user-account-profile-photo__image"
            />
          </div>
        </div>
        <div className="user-information">
          <h4 className="user-information__full-name">
            {socialBuzzUserData &&
              `${socialBuzzUserData.firstName} ${socialBuzzUserData.lastName}`}
          </h4>
          <p className="username">
            {socialBuzzUserData && `${socialBuzzUserData.username}`}
          </p>
          <p className="email-address">
            Current email address:{" "}
            <span>
              {socialBuzzUserData && `${socialBuzzUserData.emailAddress}`}
            </span>
          </p>
          <p>
            You joined SocialBuzz on{" "}
            {socialBuzzUserData &&
              `${new Date(socialBuzzUserData.dateCreated).toDateString()}`}
          </p>
          <p>
            Account last updated on{" "}
            {socialBuzzUserData &&
              `${new Date(socialBuzzUserData.dateUpdated).toDateString()}`}
          </p>
        </div>
        <form
          className="user-account-update-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="form-info">You can update your account (optional)</p>
          <div className="form-group">
            <label htmlFor="firstName" className="form-group-label">
              first name
            </label>
            <input
              type="text"
              id="firstName"
              className="form-group__textual-input"
              placeholder="first name"
              defaultValue={socialBuzzUserData && socialBuzzUserData.firstName}
              {...register("firstName")}
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
              defaultValue={socialBuzzUserData && socialBuzzUserData.lastName}
              {...register("lastName")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress" className="form-group-label">
              current email address
            </label>
            <input
              type="email"
              id="emailAddress"
              className="form-group__textual-input"
              placeholder="email address eg johndoe@gmail.com"
              defaultValue={
                socialBuzzUserData && socialBuzzUserData.emailAddress
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="newEmailAddress" className="form-group-label">
              new email address
            </label>
            <input
              type="email"
              id="newEmailAddress"
              className="form-group__textual-input"
              placeholder="email address eg johndoe@gmail.com"
              {...register("newEmailAddress")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="username" className="form-group-label">
              current username
            </label>
            <input
              type="text"
              id="username"
              className="form-group__textual-input"
              placeholder="pick a username, be creative"
              defaultValue={socialBuzzUserData && socialBuzzUserData.username}
            />
          </div>

          <div className="form-group">
            <label htmlFor="newUsername" className="form-group-label">
              new username
            </label>
            <input
              type="text"
              id="newUsername"
              className="form-group__textual-input"
              placeholder="pick a username, be creative"
              {...register("newUsername")}
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
              defaultValue={socialBuzzUserData && socialBuzzUserData.statusText}
              {...register("statusText")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-group-label">
              new password (optional)
            </label>
            <input
              type="password"
              id="password"
              className="form-group__textual-input"
              placeholder="type a strong password"
              {...register("password")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confPass" className="form-group-label">
              confirm your new password
            </label>
            <input
              type="password"
              id="confPass"
              className="form-group__textual-input"
              placeholder="confirm your new password"
            />
          </div>

          <div className="update-form-buttons">
            <button type="submit" className="update-form-buttons__submit">
              update
            </button>
            <button className="cancel">Cancel</button>
          </div>
        </form>
        <div className="user-account__posts">
          <h3>You don't have any posts yet</h3>
        </div>
      </div>
    </div>
  );
};
export default UserAccount;
