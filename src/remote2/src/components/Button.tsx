import { useState } from "react";

function Button2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="shared-btn" onClick={() => setCount(count + 1)}>
        <span className="font-bold">Remote2 </span>Click me2: {count}
      </button>
    </div>
  );
}

export default Button2;
