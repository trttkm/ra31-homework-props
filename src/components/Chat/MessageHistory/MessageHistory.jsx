import { Message } from './Message/Message';
import { Response } from './Response/Response';
import { Typing } from './Typing/Typing';

export function MessageHistory({ list }) {
  
  const renderComponentByType = (message) => {
    switch (message.type) {
      case 'message':
        return <Message message={message} key={message.id} />;
      case 'response':
        return <Response message={message} key={message.id} />;
      case 'typing':
        return <Typing message={message} key={message.id} />;
      default:
        return null;
    }
  };
  
  return (
    <ul>
      {list.map(message => (
        renderComponentByType(message)
      ))}
    </ul>
  );
}
