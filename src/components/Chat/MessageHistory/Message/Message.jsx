export function Message({ message }) {
  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{message.from.name}</span>
      </div>
      <div className="message my-message">
        {message.text}
      </div>
    </li>
  );
}
