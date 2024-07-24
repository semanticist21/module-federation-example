import { Link } from "react-router-dom";
import { useIncrementStore } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import { getMockDataAsync } from "../query/query";
import { keyChain } from "@kkoms/query-key-chain";

export const Header = () => {
  const { count, increment, timestamp } = useIncrementStore();

  const { data, isFetching, refetch } = useQuery({
    queryKey: keyChain("test").all(),
    queryFn: getMockDataAsync,
  });

  return (
    <header className="bg-green-700 flex items-center justify-between w-full top-0 fixed left-0 px-8">
      <div className="flex items-center justify-center gap-4">
        <Link className="text-white" to="/">
          Home
        </Link>
        <Link className="text-white" to="/remote">
          Remote Page
        </Link>
        <Link className="text-white" to="/remote2">
          Remote2 Page
        </Link>
      </div>

      <div className="flex items-center justify-center gap-4 bg-gray-400 rounded-md px-4">
        <span className="text-base font-bold text-wrap inline-block bg-purple-500 rounded-md px-2 py-1">
          React Query
        </span>
        <p
          className={`text-sm rounded-md px-2 py-1 min-w-20 ${
            isFetching ? "bg-red-500" : "bg-green-500"
          }`}
        >
          <span>{data ?? "null"}</span>
        </p>
        <span className="bg-gray-500 inline-block px-2 py-1 rounded-md text-sm">
          hasFetching? : {isFetching ? "🟠" : "❌"}
        </span>
        <button className="my-3" onClick={() => refetch()}>
          Force Refetch
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 bg-gray-400 rounded-md px-4">
        <span className="text-base font-bold text-wrap inline-block bg-emerald-500 rounded-md px-2 py-1">
          Host Zustand
        </span>
        <div className="flex gap-1 items-center bg-gray-500 tracking-tighter rounded-md px-2 py-1">
          <span className="text-sm">Instance timestamp:</span>
          <time className="text-xs">{timestamp}</time>
        </div>

        <p className={`text-sm rounded-md px-2 py-1 bg-gray-800 text-white`}>
          <span>{count}</span>
        </p>

        <button className="my-3" onClick={() => increment()}>
          Increase+
        </button>
      </div>
    </header>
  );
};
