import React, { useState } from 'react';
import { useDebounce } from '../hooks/AllHooks';


const DebounceExample = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500ms debounce

  return (
    <div>
      <h2>Debounce Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default DebounceExample;
