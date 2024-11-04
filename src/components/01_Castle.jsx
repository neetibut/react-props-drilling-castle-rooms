/* eslint-disable react/prop-types */
import Tower from "./02_Tower";

export default function Castle({ message1, handleReply }) {
  return (
    <div>
      <Tower message1={message1} handleReply={handleReply} />
    </div>
  );
}
