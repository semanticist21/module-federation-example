import Button from "remoteApp/Button";
import { Layout } from "./Layout";
import Button22 from "remoteApp2/Button";

export const First = () => {
  return (
    <div>
      <Layout />
      <div className="size-full bg-red-500">test</div>
      <Button/>
      <Button22/>
    </div>
  );
};
