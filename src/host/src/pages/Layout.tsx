import { Link } from "react-router-dom";
import { useIncrementStore } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import { getMockDataAsync } from "../query/query";

export const Layout = () => {
  const { count, increment } = useIncrementStore();

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["test"],
    queryFn: getMockDataAsync,
  });

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
        <p>{data}</p>
        <p className={`${isFetching ? "text-red-500" : "text-green-500"}`}>
          전송중? : {isFetching ? "true" : "false"}
        </p>
        <button onClick={() => refetch()}>refetch</button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button onClick={increment}>increment</button>
        <p>{count}</p>
      </div>
    </div>
  );
};
