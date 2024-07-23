import { useState } from "react";

function Button22() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="shared-btn" onClick={() => setCount(count + 1)}>
        Click me2: {count}
      </button>
    </div>
  );
}

export default Button22;
