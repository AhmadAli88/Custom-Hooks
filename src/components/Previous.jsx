import React, { useState } from 'react';
import { usePrevious } from '../hooks/AllHooks';


const PreviousValueComponent = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <h2>Previous Value Example</h2>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousValueComponent;
