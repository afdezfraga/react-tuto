import GlobeLogo from './../../assets/globe.png';


const Header = () => {
    return (
        <header>
          <img src={GlobeLogo} className="logo" alt="Globe Logo" />
          <h1 className='header-title'>P6App - My travel Journal</h1>
        </header>
    );
}

export default Header;