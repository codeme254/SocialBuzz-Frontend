import Title from "../../components/Title/Title";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <section>
      <div className="home__textbox">
        <Title text="Let's get you started with SocialBuzz" />
        <p>
          Discover a vibrant social media platform that connects and empowers
          individuals from all walks of life. SocialBuzz is where you can
          unleash your creativity, share moments, and engage in meaningful
          conversations. Stay updated on trends, explore interests, and connect
          with like-minded people. Express yourself, showcase your talents, and
          build a digital presence that reflects your unique personality. Join
          the buzzing community of SocialBuzz to connect, inspire, and create
          together. Sign up today for endless possibilities.
        </p>
      </div>
      <SignUp />
    </section>
  );
};
export default Home;
