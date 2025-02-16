import vLogo from '/vite.svg';
import rLogo from './../assets/react.svg';
import Items from './Items';

const P2App = () => {
  
  const items = ['React', 'Vite', 'React Router', 'Tailwind CSS', 'React bullshit'];

  return (
    <main>
      <img src={vLogo} className="logo" alt="Vite Logo" />
      <img src={rLogo} className="logo react" alt="React Logo" />
      <h1>P2App Tutorial</h1>
      <Items items={items} />
      <footer>
        <small>© 2025 a.fernandez3 development. All rights reserved</small>
      </footer>
    </main>
  );
};

export default P2App;