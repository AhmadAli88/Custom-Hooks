import React from 'react';
import { useWindowSize } from '../hooks/AllHooks';


const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Window Size Example</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default WindowSizeComponent;
