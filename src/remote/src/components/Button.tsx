import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="shared-btn" onClick={() => setCount(count + 1)}>
        <span className="font-bold">Remote1 </span>Click me: {count}
      </button>
    </div>
  );
}

export default Button;
