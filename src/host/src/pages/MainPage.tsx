import { Header } from "./Header";
import { lazy, Suspense } from "react";

const Button = lazy(() => import("remoteApp/Button"));
const Button2 = lazy(() => import("remoteApp2/Button"));

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <div className="flex flex-col gap-4">
          <Button />
          <Button2 />
        </div>
      </Suspense>
    </div>
  );
};
