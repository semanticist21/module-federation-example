import { lazy, Suspense } from "react";
import { Checkbox } from "rizzui";
// import { MainPage } from "./MainPage";

const Button = lazy(() => import("remoteApp/Button"));
const Button22 = lazy(() => import("remoteApp2/Button"));

/**
 *
 * @deprecated
 */
export const First = () => {
  return (
    <div>
      {/* <MainPage /> */}
      <div className="size-full bg-red-500">test</div>
      <Checkbox />
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
        <Button22 />
      </Suspense>
    </div>
  );
};
