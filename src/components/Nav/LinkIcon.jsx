import { Link } from "react-router-dom";

const LinkIcon = ({ label, icon, to }) => {
  return (
    <Link to={to} className="header__link">
      <span>{icon}</span>
      <p className="header__link--label">{label}</p>
    </Link>
  );
};

export default LinkIcon;
