import React, { useState } from 'react';
import { useInfiniteScroll } from '../hooks/AllHooks';

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));

  const fetchMoreData = () => {
    console.log('Fetching more data...');

    return new Promise((resolve) => {
      // Simulate fetching data
      setTimeout(() => {
        setItems((prevItems) => [
          ...prevItems,
          ...Array.from({ length: 10 }, (_, i) => `New Item ${prevItems.length + i + 1}`)
        ]);
        resolve(); // Resolve the promise when done
      }, 1000);
    });
  };

  const { isFetching } = useInfiniteScroll(fetchMoreData);

  return (
    <div>
      <h2>Infinite Scroll Example</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {isFetching && <p>Loading more items...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
