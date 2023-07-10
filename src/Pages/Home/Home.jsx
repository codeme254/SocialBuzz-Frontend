import Title from "../../components/Title/Title";
import SignUp from "./SignUp";
import "./Home.css";
import HomeProfilePicture from "./HomeProfilePicture";

import user1 from "../../assets/Images/user-1.jpg";
import user3 from "../../assets/Images/user-3.jpg";
import user4 from "../../assets/Images/user-4.jpg";
import user5 from "../../assets/Images/user-5.jpg";
import user6 from "../../assets/Images/user-6.jpg";
import user7 from "../../assets/Images/user-7.jpg";
import user8 from "../../assets/Images/user-8.jpg";
import userImg from "../../assets/Images/user-image.jpg";
import bgHome from "../../assets/Images/bg-home.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="home__textbox">
        <Title text="Let's get you started with SocialBuzz" />
        <p className="home__textbox--text">
          Discover a vibrant social media platform that connects and empowers
          individuals from all walks of life. SocialBuzz is where you can
          unleash your creativity, share moments, and engage in meaningful
          conversations. Stay updated on trends, explore interests, and connect
          with like-minded people. Express yourself, showcase your talents, and
          build a digital presence that reflects your unique personality. Join
          the buzzing community of SocialBuzz to connect, inspire, and create
          together. Sign up today for endless possibilities.
        </p>
        <div className="home__profile-pictures">
          <HomeProfilePicture image={user5} />
          <HomeProfilePicture image={user1} />
          <HomeProfilePicture image={user6} />
          <HomeProfilePicture image={user4} />
          <HomeProfilePicture image={user3} />
          <HomeProfilePicture image={user7} />
          <HomeProfilePicture image={user8} />
        </div>

        <Title text="Here's the difference between a cover photo and a profile photo" />
        <div className="photos_sample">
          <div className="photo_sample--cover-photo">
            <img src={bgHome} alt="cover photo sample" />
            <p className="sample sample-cover">cover photo</p>
          </div>
          <div className="photos_sample--profile-photo">
            <img src={userImg} alt="profile picture sample" />
            <p className="sample sample-profile-photo">profile photo</p>
          </div>
        </div>
      </div>
      <SignUp />
    </section>
  );
};
export default Home;
