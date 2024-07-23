import { Link } from "react-router-dom";
import { useIncrementStore } from "../store/store";

export const Layout = () => {
  const { count, increment } = useIncrementStore();

  return (
    <div className="bg-green-700 flex items-center justify-between w-full top-0 fixed left-0 px-8">
      <Link className="text-white" to="/">
        Home
      </Link>
      <Link className="text-white" to="/remote">
        Remote
      </Link>
      <Link className="text-white" to="/remote2">
        Remote2
      </Link>

      <div className="flex items-center justify-center gap-4">
        <button onClick={increment}>increment</button>
        <p>{count}</p>
      </div>
    </div>
  );
};
