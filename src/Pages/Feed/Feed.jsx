import Nav from "../../components/Nav/Nav";
import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed__container">
      <Nav />
      <div className="feed__body">
        <div className="feed__body--left">
          <h3>Left side of the feed body</h3>
        </div>
        <div className="feed__body--center">
          <h3>Center part of the feed body</h3>
        </div>
        <div className="feed__body--right">
          <h3>right side of the feed body</h3>
        </div>
      </div>
    </div>
  );
};
export default Feed;
