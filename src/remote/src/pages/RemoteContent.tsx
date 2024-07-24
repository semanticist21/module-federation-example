import { useIsFetching, useQuery, useQueryClient } from "@tanstack/react-query";
import { useIncrementStore } from "hostApp/Store";
import { getMockDataAsync } from "../query/query";
import { keyChain } from "@kkoms/query-key-chain";

const RemoteContent = () => {
  const { count, increment, timestamp } = useIncrementStore();
  const client = useQueryClient();

  const { data } = useQuery({
    queryKey: keyChain("test").all(),
    queryFn: getMockDataAsync,
  });

  const isFetching = useIsFetching();

  return (
    <div className="size-full flex items-center justify-center flex-col gap-4">
      <h1 className="text-white">Remote</h1>
      <time className="text-white">{timestamp}</time>

      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-md"
        onClick={() => {
          document.dispatchEvent(new CustomEvent("route", { detail: "/" }));
        }}
      >
        GO BACK HOME USING CUSTOM EVENT
      </button>

      <div className="flex items-center justify-center gap-4 bg-gray-400 rounded-md px-4">
        <span className="text-base font-bold text-wrap inline-block bg-purple-500 rounded-md px-2 py-1">
          Remote Imported React Query
        </span>
        <p
          className={`text-sm rounded-md px-2 py-1 min-w-20 ${
            isFetching ? "bg-red-500" : "bg-green-500"
          }`}
        >
          <span>{data ?? "null"}</span>
        </p>
        <button
          className="my-3"
          onClick={() =>
            client.invalidateQueries({
              queryKey: keyChain("test").all(),
            })
          }
        >
          Invalidate Query
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 bg-gray-400 rounded-md px-4">
        <span className="text-base font-bold text-wrap inline-block bg-emerald-500 rounded-md px-2 py-1">
          Remote Imported Zustand
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
    </div>
  );
};

export default RemoteContent;
