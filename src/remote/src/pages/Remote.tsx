import { useIncrementStore } from "hostApp/Store";

const Remote = () => {
  const { count, increment } = useIncrementStore();

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
    </div>
  );
};

export default Remote;
