import { Message } from './Message/Message';
import { Response } from './Response/Response';
import { Typing } from './Typing/Typing';

export function MessageHistory({ list }) {
  return (
    <ul>
      {list.map(message => (
        <>
          {message.type === 'message' && <Message message={message} />}
          {message.type === 'response' && <Response message={message} />}
          {message.type === 'typing' && <Typing message={message} />}
        </>
      ))}
    </ul>
  );
}
