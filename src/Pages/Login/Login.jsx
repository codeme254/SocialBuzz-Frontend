import { Link } from "react-router-dom";
import "./Login.css";
import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";
import { apiDomain } from "../../utils/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // http://localhost:8081/auth/users/login

  const onSubmit = async (data) => {
    const login = await fetch(`${apiDomain}/auth/users/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await login.json();
    if (login.ok) {
      navigate("/feed");
      toast.success("login successful");
    } else {
      toast.error(responseData.message);
    }
  };

  return (
    <div className="login-container">
      <Title text="SocialBuzz" />
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="form-group">
          <div className="form-text-top">
            <Title text="login into your account" />
            <p className="form-group__text-top">
              Login to your account to see photos, videos and updates from your
              folks
            </p>
          </div>
          <label htmlFor="emailAddress" className="form-group-label">
            email address or username
          </label>
          <input
            type="text"
            id="emailAddress"
            className="form-group__textual-input"
            placeholder="email address eg johndoe@gmail.com or username"
            {...register("loginEntity", { required: true })}
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
            placeholder="enter your password"
            {...register("password", { required: true })}
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
