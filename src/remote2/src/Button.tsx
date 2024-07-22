import { useState } from "react";

function Button22() {
  const [state, setState] = useState(0);

  return (
    <div>
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        Click me2: {state}
      </button>
    </div>
  );
}

export default Button22;
