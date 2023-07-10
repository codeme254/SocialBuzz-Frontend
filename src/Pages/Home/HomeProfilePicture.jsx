const HomeProfilePicture = ({ image }) => {
  return (
    <div className="home-profile-picture__box">
      <img src={image} alt="profile picture of a SocialBuzz user" />
    </div>
  );
};
export default HomeProfilePicture;
