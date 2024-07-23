import { Fragment } from "react/jsx-runtime";
import { Layout } from "./Layout";
import { lazy, Suspense } from "react";

const Remote = lazy(() => import("remoteApp/Remote"));

export const RemoteView = () => {
  return (
    <Fragment>
      <Layout />
      <Suspense fallback={<div>Loading...</div>}>
        <Remote />
      </Suspense>
    </Fragment>
  );
};
