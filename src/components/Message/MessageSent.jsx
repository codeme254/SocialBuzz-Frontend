import "./Message.css";

const MessageSent = ({ senderProfilePhoto, message }) => {
  return (
    <div className="message-wrapper">
      <div className="message message-flipped">
        <div className="message__profile-photo">
          <img src={senderProfilePhoto} alt="sender profile photo" />
        </div>
        <div className="message__texts">
          <h5 className="message__texts--user-full-name you-label">you</h5>
          <p className="message__texts--message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageSent;
