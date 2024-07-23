import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { First } from "./pages/First";
import { RemoteView2 } from "./pages/RemoteView2";
import { RemoteView } from "./pages/RemoteView";
import { useEffect } from "react";

function App() {
  // global
  const navigate = useNavigate();

  // use effects
  useEffect(() => {
    document.addEventListener("route", (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      navigate(customEvent.detail);
    });
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/remote" element={<RemoteView />} />
      <Route path="/remote2" element={<RemoteView2 />} />
    </Routes>
  );
}

export default App;
