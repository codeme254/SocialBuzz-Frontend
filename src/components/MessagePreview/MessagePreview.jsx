import "./MessagePreview.css";
const MessagePreview = ({
  senderProfilePhoto,
  userFirstName,
  userLastName,
  previewText,
}) => {
  return (
    <div className="message-preview">
      <div className="message-preview__image">
        <img
          src={senderProfilePhoto}
          alt="sender profile photo"
          className="message-preview__image--img"
        />
      </div>
      <div className="message-preview__right">
        <h5>
          {userFirstName} {userLastName}
        </h5>
        <p className="message-preview__text">{previewText}</p>
      </div>
    </div>
  );
};
export default MessagePreview;
