import { Link } from 'react-router-dom';

const Nav = () => {
  // Inline styles for the navigation bar
  const navStyle = {
    backgroundColor: '#282c34',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle = {
    color: 'white',
    margin: 0,
  };

  const listStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav style={navStyle}>
      <h1 style={titleStyle}>Candidate Search App</h1>
      <ul style={listStyle}>
        <li>
          <Link to="/" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}>
            Candidate Search
          </Link>
        </li>
        <li>
          <Link to="/saved-candidates" style={linkStyle} onMouseOver={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}>
            Saved Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
