import React from 'react';
import { useLocalStorage } from '../hooks/AllHooks';


const LocalStorageComponent = () => {
  const [value, setValue] = useLocalStorage('myKey', '');

  return (
    <div>
      <h2>Local Storage Example</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Stored Value: {value}</p>
    </div>
  );
};

export default LocalStorageComponent;
