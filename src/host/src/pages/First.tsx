import { Layout } from "./Layout";
import { lazy, Suspense } from "react";

const Button = lazy(() => import("remoteApp/Button"));
const Button22 = lazy(() => import("remoteApp2/Button"));

export const First = () => {
  return (
    <div>
      <Layout />
      <div className="size-full bg-red-500">test</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
        <Button22 />
      </Suspense>
    </div>
  );
};
