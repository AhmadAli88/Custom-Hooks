import React from 'react';
import { useMediaQuery } from '../hooks/AllHooks';


const MediaQueryComponent = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      <h2>Media Query Example</h2>
      <p>{isMobile ? 'You are on mobile.' : 'You are on desktop.'}</p>
    </div>
  );
};

export default MediaQueryComponent;
