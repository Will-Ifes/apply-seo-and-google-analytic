// app/components/Counter.tsx

import React, { useState } from "react";
import Button from "./Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <Button label="Increment" onClick={increment} />
    </div>
  );
};

export default Counter;
