import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="shared-btn" onClick={() => setCount(count + 1)}>
        Click me: {count}
      </button>
    </div>
  );
}

export default Button;
