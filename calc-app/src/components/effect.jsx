import React, { useState, useEffect } from 'react';

function Apps() {
  const [count, setCount] = useState(0);

  // This effect runs after every render
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Apps;