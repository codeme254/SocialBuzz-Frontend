import FeedUserActionLink from "./FeedUserActionLink";
import { AiOutlinePlus } from "react-icons/ai";
import { GiPostStamp } from "react-icons/gi";
import { MdOutlineAccountBox } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";
import "./FeedUserActionLinks.css";

const FeedUserActionLinks = () => {
  return (
    <div className="feed_user-action-links">
      <FeedUserActionLink label="start a new post" icon={<AiOutlinePlus />} />
      <FeedUserActionLink label="my posts" icon={<GiPostStamp />} />
      <FeedUserActionLink label="my account" to="/my-account" icon={<MdOutlineAccountBox />} />
      <FeedUserActionLink
        label="update my account information"
        to="/my-account"
        icon={<LiaUserEditSolid />}
      />
    </div>
  );
};
export default FeedUserActionLinks;
