import logo from './assets/logo.jpg'
import PropTypes from 'prop-types';


function Header({setActiveTab}) {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a onClick={() => setActiveTab(1)}>Kickstarter</a>
          </li>
          <li>
            <a onClick={() => setActiveTab(2)}>Movies</a>
          </li>
          <li>
            <a onClick={() => setActiveTab(3)}>Video-Game</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  setActiveTab : PropTypes.func.isRequired
}

export default Header