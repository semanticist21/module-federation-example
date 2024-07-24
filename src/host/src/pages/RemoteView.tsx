import { Fragment } from "react/jsx-runtime";
import { Header } from "./Header";
import { lazy, Suspense } from "react";

const Remote = lazy(() => import("remoteApp/Remote"));

export const RemoteView = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Remote />
      </Suspense>
    </Fragment>
  );
};
