import Items from './Items';
import Header from './Header';
import Footer from './Footer';

const P4App = () => {
  
  const items = ['React', 'Vite', 'React Router', 'Tailwind CSS', 'React bullshit'];

  return (
    <>
      <Header />
      <h1>P4App Tutorial - Styling</h1>
      <Items items={items} />
      <Footer />
    </>
  );
}

export default P4App;