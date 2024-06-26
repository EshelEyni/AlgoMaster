import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Loader } from "./components/Loader/Loader";
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Loader className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
        }
      >
        <Routes>
          <Route index element={<Navigate replace to="/Home" />} />
          {routes.map((r, i) => (
            <Route key={i} path={r.path} element={<r.component />} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
