import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ROUTER_CONSTS } from "./consts/route.consts";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route element={<Home />} path={ROUTER_CONSTS.HOME} />
          <Route element={<NotFound />} path={ROUTER_CONSTS.NOT_FOUND} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
