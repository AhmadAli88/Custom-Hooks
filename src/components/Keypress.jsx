import React from 'react';
import { useKeyPress } from '../hooks/AllHooks';


const KeyPressComponent = () => {
  const isEnterPressed = useKeyPress('Enter');

  return (
    <div>
      <h2>Key Press Example</h2>
      <p>{isEnterPressed ? 'Enter key is pressed!' : 'Press Enter'}</p>
    </div>
  );
};

export default KeyPressComponent;
