import vLogo from '/vite.svg';
import rLogo from './../assets/react.svg';

const P2App = () => {
  return (
    <main>
      <img src={vLogo} className="logo" alt="Vite Logo" />
      <img src={rLogo} className="logo react" alt="React Logo" />
      <h1>P2App Tutorial</h1>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>React Router</li>
        <li>React Icons</li>
      </ul>
    </main>
  );
};

export default P2App;