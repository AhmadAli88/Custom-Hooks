import React from 'react';
import { useClickOutside } from '../hooks/AllHooks';


const ClickOutsideComponent = () => {
  const ref = useClickOutside(() => {
    console.log('Clicked outside!');
  });

  return (
    <div ref={ref} style={{ padding: '20px', background: 'lightgray' }}>
      <h2>Click Outside Example</h2>
      <p>Click outside this box to trigger the callback.</p>
    </div>
  );
};

export default ClickOutsideComponent;
