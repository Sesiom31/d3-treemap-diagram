import logo from './assets/logo.jpg'

function Header() {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a>Kickstarter</a>
          </li>
          <li>
            <a>Movies</a>
          </li>
          <li>
            <a>Video-Game</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header