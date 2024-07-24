import { QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

export default client;

export const getMockDataAsync = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return "successful in remote2";
};
