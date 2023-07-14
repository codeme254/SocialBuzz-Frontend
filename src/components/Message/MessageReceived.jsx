import "./Message.css";

const MessageReceived = ({
  senderProfilePhoto,
  senderFirstName,
  senderLastName,
  message,
}) => {
  return (
    <div className="message-wrapper-normal">
      <div className="message message-normal">
        <div className="message__profile-photo">
          <img src={senderProfilePhoto} alt="sender profile photo" />
        </div>
        <div className="message__texts">
          <h5 className="message__texts--user-full-name">
            {senderFirstName} {senderLastName}
          </h5>
          <p className="message__texts--message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageReceived;
