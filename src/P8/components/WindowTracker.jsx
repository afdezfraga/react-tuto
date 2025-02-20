import { useState, useEffect } from "react";

const WindowTracker = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect( () => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  return (
    <h1> Window width: {window.innerWidth} </h1>
  );
}

export default WindowTracker;