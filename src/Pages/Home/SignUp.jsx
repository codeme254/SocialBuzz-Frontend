import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-form-container">
      <form action="" className="sign-up-form">
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
