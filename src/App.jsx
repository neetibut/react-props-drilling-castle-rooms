import { useState } from "react";
import Castle from "./components/01_Castle";

// This is a Kingdom Component
function App() {
  const [replyMessage, setReplyMessage] = useState("");

  const handleReply = (message) => {
    setReplyMessage(message);
  };

  const message1 = "Do you love React?";

  return (
    <div>
      <p>Message for JSD8: {message1}</p>
      <p>
        Reply from the Secret Room:{" "}
        <span className="text-red">
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <Castle message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default App;
