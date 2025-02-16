import ReactLogo from './../../assets/react.svg';


const Header = () => {
    return (
        <header className='header'>
          <nav>
            <img src={ReactLogo} className="nav-logo" alt="React Logo" />
            <span className="nav-title">React Project #1</span>
          </nav>
        </header>
    );
}

export default Header;