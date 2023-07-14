import Nav from "../../components/Nav/Nav";
import "./Inbox.css";
import MessagePreview from "../../components/MessagePreview/MessagePreview";
import sampleImg from "../../assets/Images/user-4.jpg";
import userPhoto from "../../assets/Images/user-image.jpg";
import MessageSent from "../../components/Message/MessageSent";
import MessageReceived from "../../components/Message/MessageReceived";
import { VscSend } from "react-icons/vsc";

const sampleMessage = `A wonderful serenity has taken possession of my entire soul, like these sweet  mornings of my entire spring which I enjo...`;
const Inbox = () => {
  return (
    <div>
      <Nav />
      <div className="messaging-body">
        <div className="message-preview__left-window">
          <MessagePreview
            senderProfilePhoto={sampleImg}
            userFirstName="jackton"
            userLastName="Jack"
            previewText={sampleMessage}
          />
          <MessagePreview
            senderProfilePhoto={sampleImg}
            userFirstName="jackton"
            userLastName="Jack"
            previewText={sampleMessage}
          />
          <MessagePreview
            senderProfilePhoto={sampleImg}
            userFirstName="jackton"
            userLastName="Jack"
            previewText={sampleMessage}
          />
          <MessagePreview
            senderProfilePhoto={sampleImg}
            userFirstName="jackton"
            userLastName="Jack"
            previewText={sampleMessage}
          />
        </div>
        <div className="messaging-body__main-window">
          <MessageSent senderProfilePhoto={userPhoto} message={sampleMessage} />
          <MessageReceived
            senderProfilePhoto={sampleImg}
            senderFirstName="jackton"
            senderLastName="jack"
            message={sampleMessage}
          />
          <MessageReceived
            senderProfilePhoto={sampleImg}
            senderFirstName="jackton"
            senderLastName="jack"
            message={sampleMessage}
          />

          <form action="" className="response-form">
            <input
              type="text"
              placeholder="type your message"
              className="response-form__input"
            />
            <button type="submit" className="response-form__submit-btn">
              <VscSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Inbox;
