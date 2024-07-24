import RemoteContent from "./RemoteContent";
import client from "hostApp/Query";
import { QueryClientProvider } from "@tanstack/react-query";

const Remote = () => {
  return (
    <QueryClientProvider client={client}>
      <RemoteContent />
    </QueryClientProvider>
  );
};

export default Remote;
