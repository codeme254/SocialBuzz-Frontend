import { HiHome } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { HiOutlineInboxIn } from "react-icons/hi";
import LinkIcon from "./LinkIcon";
import userImage from "../../assets/Images/user-image.jpg";
import "./Nav.css";
import { UserContext } from "../../Helpers/Context";
import { useContext } from 'react';

const Nav = () => {
  const {socialBuzzUserData, setSocialBuzzUserData} = useContext(UserContext);
  return (
    <header className="header">
      <h1 className="logo">SocialBuzz</h1>
      <nav className="header__nav">
        <ol className="header__nav-list header__nav--center">
          <li className="header__nav--link-item">
            <LinkIcon icon={<HiHome />} to="/feed" label="home" />
          </li>
          <li className="header__nav--link-item">
            <LinkIcon icon={<IoIosPeople />} label="community" />
          </li>
          {/* <li className="header__nav--link-item">
            <LinkIcon icon={<MdNotificationsActive />} label="notifications" />
          </li> */}
          <li className="header__nav--link-item">
            <LinkIcon
              icon={<HiOutlineInboxIn />}
              to="/messaging"
              label="inbox"
            />
          </li>
        </ol>
        <ol className="header__nav-list header__nav--right">
          <li className="header__nav--right-item item-center-full">
            <div className="header__image">
              <img
                src={socialBuzzUserData && socialBuzzUserData.profilePhoto}
                alt="user profile photo"
                className="header__image--img"
              />
            </div>
            <p className="header__nav-right--username">@{socialBuzzUserData && socialBuzzUserData.username}</p>
          </li>
          <li className="header__nav--link-item">
            <LinkIcon icon={<HiHome />} label="logout" />
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Nav;
