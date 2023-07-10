import { HiHome } from "react-icons/hi";
import LinkIcon from "./LinkIcon";
import userImage from "../../assets/Images/user-image.jpg";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="header">
      <h1 className="logo">SocialBuzz</h1>
      <nav className="header__nav">
        <ol className="header__nav-list header__nav--center">
          <li className="header__nav--link-item">
            <LinkIcon icon={<HiHome />} label="home" />
          </li>
          <li className="header__nav--link-item">
            <LinkIcon icon={<HiHome />} label="community" />
          </li>
          <li className="header__nav--link-item">
            <LinkIcon icon={<HiHome />} label="notifications" />
          </li>
          <li className="header__nav--link-item">
            <LinkIcon icon={<HiHome />} label="inbox" />
          </li>
        </ol>
        <ol className="header__nav-list header__nav--right">
          <li className="header__nav--right-item item-center-full">
            <div className="header__image">
              <img
                src={userImage}
                alt="user profile photo"
                className="header__image--img"
              />
            </div>
            <p className="header__nav-right--username">@zaphenath254</p>
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
