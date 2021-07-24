export function Typing({ message }) {
  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{message.from.name}</span>
      </div>
      <div>
        печатает...
      </div>
    </li>
  );
}

