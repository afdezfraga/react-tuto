import Items from './Items';
import Header from './Header';
import Footer from './Footer';

const P3App = () => {
  
  const items = ['React', 'Vite', 'React Router', 'Tailwind CSS', 'React bullshit'];

  return (
    <>
      <Header />
      <Items items={items} />
      <Footer />
    </>
  );
}

export default P3App;