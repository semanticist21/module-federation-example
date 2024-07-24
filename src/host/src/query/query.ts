import { QueryClient } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default client;

export const getMockDataAsync = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return "Host Received";
};
