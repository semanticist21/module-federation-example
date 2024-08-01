import { lazy, Suspense } from "react";
import { Header } from "./Header";
import { Checkbox } from "rizzui";

const Button = lazy(() => import("remoteApp/Button"));
const Button2 = lazy(() => import("remoteApp2/Button"));

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Checkbox />
      <Suspense fallback={null}>
        <div className="flex flex-col gap-4">
          <Button />
          <Button2 />
        </div>
      </Suspense>
    </div>
  );
};
