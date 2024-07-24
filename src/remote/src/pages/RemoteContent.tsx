import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useIncrementStore } from "hostApp/Store";
import { getMockDataAsync } from "../query/query";

const RemoteContent = () => {
  const { count, increment } = useIncrementStore();
  const client = useQueryClient();

  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: getMockDataAsync,
  });

  return (
    <div className="bg-gray-500 size-full flex items-center justify-center flex-col gap-4">
      <h1 className="text-white">Remote</h1>

      <button
        onClick={() => {
          document.dispatchEvent(new CustomEvent("route", { detail: "/" }));
        }}
      >
        집으로 현재 url {window.location.href}
      </button>

      <button onClick={increment}>increment</button>
      <p>{count}</p>

      <div>
        <p>데이타</p>
        <p>{data}</p>
      </div>
      <button onClick={() => client.invalidateQueries({ queryKey: ["test"] })}>
        invalidate query
      </button>
    </div>
  );
};

export default RemoteContent;
