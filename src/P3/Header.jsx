import vLogo from '/vite.svg';
import rLogo from './../assets/react.svg';

const Header = () => {

    return (
        <header>
          <img src={vLogo} className="logo" alt="Vite Logo" />
          <img src={rLogo} className="logo react" alt="React Logo" />
          <h1>P3App Tutorial - Fragment Component</h1>
        </header>
    );
}

export default Header;