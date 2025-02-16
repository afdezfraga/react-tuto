import vLogo from '/vite.svg';
import rLogo from './../assets/react.svg';

const Header = () => {

    return (
        <header className='header'> 
          <img src={vLogo} className="nav-logo" alt="Vite Logo" />
          <img src={rLogo} className="nav-logo" alt="React Logo" />
          <nav>
            <ul className="nav-list">
              <li className='nav-list-item'><a href="/">Home</a></li>
              <li className='nav-list-item'><a href="/about">About</a></li>
              <li className='nav-list-item'><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
    );
}

export default Header;