import { Link } from 'react-router-dom';

export function Header() {
  
  const headerButton = {
    padding: '8px 12px',
    marginRight: '10px',
    backgroundColor: '#ffffff',
    color: '#444444',
    border: '1px solid #444444',
    cursor: 'pointer'
  };
  
  return (
    <header>
      <Link to="/">
        <button style={headerButton}>Рейтинг</button>
      </Link>
      <Link to="/listing">
        <button style={headerButton}>Список предложений</button>
      </Link>
      <Link to="/chat">
        <button style={headerButton}>История сообщений в чате</button>
      </Link>
    </header>
  );
}
