import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./components/routes";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
