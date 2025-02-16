import AI_Logo from './../../assets/AI-logo.svg';


const Header = () => {
    return (
        <header>
          <img src={AI_Logo} className="logo" alt="AI Logo" />
          <h1 className='header-title'>P7App - My AI Chef</h1>
        </header>
    );
}

export default Header;