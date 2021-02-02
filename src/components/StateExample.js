import React, { useState, useEffect } from 'react';

function StateExample({initialCount}) {
  initialCount = parseInt(initialCount)
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `Le counter est à ${count} !`
  })

  return(
    <div>
      <p><b>Total</b> : {count}</p>
      <button onClick={() => setCount(initialCount)}>Réinitialiser</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default StateExample