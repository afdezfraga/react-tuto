import { useState } from 'react';
import WindowTracker from './WindowTracker';

const CH2 = () => {
  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <main>
      <button onClick={onClick}> Toggle WindowTracker</button>
      {show && <WindowTracker/>}
    </main>
  );
}

export default CH2;