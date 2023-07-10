import { Link } from "react-router-dom";
import "./Login.css";
import Title from "../../components/Title/Title";

const Login = () => {
  return (
    <div className="login-container">
      <Title text="SocialBuzz" />
      <form action="" className="login-form">
        <div className="form-group">
          <div className="form-text-top">
            <Title text="login into your account" />
            <p>
              Login to your account to see photos, videos and updates from your
              folks
            </p>
          </div>
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

        <button type="submit" className="submit-btn">
          Login
        </button>

        <p className="form-guide">
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
