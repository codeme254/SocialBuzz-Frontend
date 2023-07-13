import { Link } from "react-router-dom";

const FeedUserActionLink = ({ label, to, icon }) => {
  return (
    <Link className="feed__user-action-link">
      {icon}
      <p className="feed__user-action-link--label">{label}</p>
    </Link>
  );
};

export default FeedUserActionLink;
