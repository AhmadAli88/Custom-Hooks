import React from 'react';
import { useFetch } from '../hooks/AllHooks';

const DataDisplay = () => {
  const { data, error, loading, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Fetched Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={refetch}>Refetch Data</button>
    </div>
  );
};

export default DataDisplay;
